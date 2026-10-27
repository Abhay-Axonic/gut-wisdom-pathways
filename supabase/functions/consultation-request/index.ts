import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const Body = z
  .object({
    fullName: z.string().trim().min(2).max(100),
    email: z.union([z.literal(""), z.string().trim().email().max(255)]),
    phone: z.union([z.literal(""), z.string().trim().regex(/^[+0-9 ()-]{7,20}$/)]),
    preferredContact: z.enum(["email", "phone"]),
    appointmentPreference: z.enum(["in_person", "video", "either"]),
    message: z.string().trim().max(500).optional().default(""),
    marketingOptIn: z.boolean().default(false),
    website: z.string().optional(), // honeypot
    elapsedMs: z.number().optional(),
  })
  .refine((v) => (v.preferredContact === "email" ? !!v.email : !!v.phone), {
    message: "Contact detail required for preferred method",
  });

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }
  const parsed = Body.safeParse(raw);
  if (!parsed.success) return json({ ok: false, error: "validation", issues: parsed.error.flatten().fieldErrors }, 400);
  const d = parsed.data;

  // Spam signals: filled honeypot or implausibly fast submission. Respond neutrally, store nothing.
  if (d.website || (typeof d.elapsedMs === "number" && d.elapsedMs < 2500)) {
    return json({ ok: false, error: "rejected" }, 400);
  }

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  // Duplicate protection: the same person resubmitting within 15 minutes gets their existing
  // reference back instead of creating a second record.
  const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  let dupQuery = supabase
    .from("consultation_requests")
    .select("id")
    .eq("full_name", d.fullName)
    .gte("created_at", since)
    .limit(1);
  dupQuery = d.email ? dupQuery.eq("email", d.email) : dupQuery.eq("phone", d.phone);
  const { data: dup, error: dupError } = await dupQuery.maybeSingle();
  if (dupError) {
    console.error("duplicate_check_failed", dupError.code);
    return json({ ok: false, error: "storage_failed" }, 500);
  }
  if (dup) return json({ ok: true, duplicate: true, reference: dup.id.slice(0, 8).toUpperCase() });

  const { data, error } = await supabase
    .from("consultation_requests")
    .insert({
      full_name: d.fullName,
      email: d.email || null,
      phone: d.phone || null,
      preferred_contact: d.preferredContact,
      appointment_preference: d.appointmentPreference,
      message: d.message || null,
      marketing_opt_in: d.marketingOptIn,
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("insert_failed", error?.code);
    return json({ ok: false, error: "storage_failed" }, 500);
  }
  const reference = data.id.slice(0, 8).toUpperCase();

  // Staff notification (prepared, inactive until configured). Sends only the reference and a
  // link to the secure location — never the patient's name, contact details or message.
  const recipient = Deno.env.get("CONSULTATION_NOTIFY_EMAIL");
  if (recipient) {
    const { error: notifyError } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "new-consultation-request",
        recipientEmail: recipient,
        idempotencyKey: `consultation-notify-${data.id}`,
        templateData: { reference, reviewUrl: Deno.env.get("CONSULTATION_REVIEW_URL") ?? "" },
      },
    });
    if (notifyError) console.error("notify_failed", reference);
  }

  return json({ ok: true, reference });
});
