import { z } from "zod";

/** Mirrors the server-side validation in supabase/functions/consultation-request. */
export const consultationSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
    email: z.union([z.literal(""), z.string().trim().email("Please enter a valid email address").max(255)]),
    phone: z
      .union([z.literal(""), z.string().trim().regex(/^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number")]),
    preferredContact: z.enum(["email", "phone"], { errorMap: () => ({ message: "Please choose how we should contact you" }) }),
    appointmentPreference: z.enum(["in_person", "video", "either"], {
      errorMap: () => ({ message: "Please choose an appointment preference" }),
    }),
    message: z.string().trim().max(500, "Please keep your message under 500 characters").optional().default(""),
    marketingOptIn: z.boolean().default(false),
  })
  .superRefine((v, ctx) => {
    if (v.preferredContact === "email" && !v.email)
      ctx.addIssue({ code: "custom", path: ["email"], message: "Please enter your email address" });
    if (v.preferredContact === "phone" && !v.phone)
      ctx.addIssue({ code: "custom", path: ["phone"], message: "Please enter your phone number" });
  });

export type ConsultationInput = z.input<typeof consultationSchema>;
