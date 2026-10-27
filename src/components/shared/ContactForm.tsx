import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { consultationSchema } from "@/lib/consultationSchema";
import { track } from "@/lib/analytics";
import { site } from "@/config/site";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";
const initial = {
  fullName: "",
  email: "",
  phone: "",
  preferredContact: "" as string,
  appointmentPreference: "" as string,
  message: "",
  marketingOptIn: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState("");
  const startedAt = useRef(Date.now());
  const inFlight = useRef(false);

  const set = (k: keyof typeof initial, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    // Clear a field's error as soon as it is corrected.
    setErrors((e) => {
      if (!e[k]) return e;
      const { [k]: _removed, ...rest } = e;
      return rest;
    });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inFlight.current) return;
    const parsed = consultationSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] ??= i.message));
      setErrors(errs);
      const first = document.getElementById(Object.keys(errs)[0]);
      first?.focus({ preventScroll: true });
      first?.scrollIntoView({ block: "center" });
      return;
    }
    setErrors({});
    inFlight.current = true;
    setStatus("sending");
    try {
      const { data, error } = await supabase.functions.invoke("consultation-request", {
        body: { ...parsed.data, website: form.website, elapsedMs: Date.now() - startedAt.current },
      });
      if (error || !data?.ok) throw new Error("not accepted");
      setReference(data.reference);
      setStatus("success");
      track("consultation_request_accepted", "contact_form");
      setForm(initial);
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-accent/40 bg-secondary/60 p-8">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden />
        <h3 className="mt-4">Thank you — your request has been received</h3>
        <p className="mt-3 text-muted-foreground">
          Your reference is <strong className="text-foreground">{reference}</strong>. A member of the team will
          contact you using your preferred method{site.contact.responseTime ? ` ${site.contact.responseTime}` : ""}.
          If your symptoms worsen in the meantime, please contact your GP, call NHS 111, or in an emergency call 999.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => { startedAt.current = Date.now(); setStatus("idle"); }}>
          Send another request
        </Button>
      </div>
    );
  }

  const field = (id: string, required = false) => ({
    id,
    "aria-required": required || undefined,
    "aria-invalid": Boolean(errors[id]),
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });
  const Err = ({ id }: { id: string }) =>
    errors[id] ? <p id={`${id}-error`} className="text-sm font-medium text-destructive">{errors[id]}</p> : null;

  const Req = () => (
    <span className="text-destructive" aria-hidden="true">*</span>
  );

  const Choice = ({ name, value, label }: { name: "preferredContact" | "appointmentPreference"; value: string; label: string }) => (
    <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-input bg-card px-4 py-2 has-[:checked]:border-primary has-[:checked]:bg-secondary/60">
      <input type="radio" name={name} value={value} checked={form[name] === value} onChange={() => set(name, value)} className="h-4 w-4 accent-[hsl(var(--primary))]" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-note">
      <p className="text-sm text-muted-foreground">Fields marked <span aria-hidden="true">*</span><span className="sr-only">"required"</span> are required.</p>

      <div role="alert" aria-live="assertive">
        {Object.keys(errors).length > 0 && (
          <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
            <p className="font-medium text-foreground">
              Please correct {Object.keys(errors).length === 1 ? "1 field" : `${Object.keys(errors).length} fields`}:
            </p>
            <ul className="mt-2 list-disc pl-5">
              {Object.entries(errors).map(([k, m]) => (
                <li key={k}><a className="text-destructive underline" href={`#${k}`} onClick={(e) => { e.preventDefault(); document.getElementById(k)?.focus(); }}>{m}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p id="form-note" className="rounded-lg border border-brass/40 bg-muted/60 p-4 text-sm text-muted-foreground">
        Please do not include medical history, test results or other clinical details here. We will discuss your
        health privately during your consultation.
      </p>

      <div className="space-y-2">
        <Label htmlFor="fullName">Full name <Req /></Label>
        <Input {...field("fullName", true)} autoComplete="name" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
        <Err id="fullName" />
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">How should we contact you? <Req /></legend>
        <div className="grid gap-3 sm:grid-cols-2" id="preferredContact" tabIndex={-1} role="radiogroup" aria-required="true" aria-invalid={Boolean(errors.preferredContact)} aria-describedby={errors.preferredContact ? "preferredContact-error" : undefined}>
          <Choice name="preferredContact" value="email" label="Email" />
          <Choice name="preferredContact" value="phone" label="Telephone" />
        </div>
        <Err id="preferredContact" />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email address {form.preferredContact === "email" && <Req />}</Label>
          <Input {...field("email", form.preferredContact === "email")} type="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
          <Err id="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telephone {form.preferredContact === "phone" && <Req />}</Label>
          <Input {...field("phone", form.preferredContact === "phone")} type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
          <Err id="phone" />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Appointment preference <Req /></legend>
        <div className="grid gap-3 sm:grid-cols-3" id="appointmentPreference" tabIndex={-1} role="radiogroup" aria-required="true" aria-invalid={Boolean(errors.appointmentPreference)} aria-describedby={errors.appointmentPreference ? "appointmentPreference-error" : undefined}>
          <Choice name="appointmentPreference" value="in_person" label="In person (London)" />
          <Choice name="appointmentPreference" value="video" label="Video" />
          <Choice name="appointmentPreference" value="either" label="No preference" />
        </div>
        <Err id="appointmentPreference" />
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="message">Short message <span className="font-normal text-muted-foreground">(optional, e.g. best times to call)</span></Label>
        <Textarea {...field("message")} rows={3} maxLength={500} value={form.message} onChange={(e) => set("message", e.target.value)} />
        <Err id="message" />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" checked={form.marketingOptIn} onChange={(e) => set("marketingOptIn", e.target.checked)} className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]" />
        <span>Optional: I would like occasional clinic updates by email. This is separate from my request and I can unsubscribe at any time.</span>
      </label>

      {status === "error" && (
        <div role="alert" className="flex gap-3 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <AlertCircle className="h-5 w-5 shrink-0 text-destructive" aria-hidden />
          <p>
            Sorry, we could not send your request. Nothing was submitted. Please try again, or call{" "}
            <a className="underline" href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>.
          </p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden /> Sending…</> : status === "error" ? "Try again" : "Send consultation request"}
      </Button>
      <p className="text-xs text-muted-foreground">
        We use these details only to respond to your request. See our <a className="underline" href="/privacy">privacy information</a>.
      </p>
    </form>
  );
}
