import { describe, it, expect } from "vitest";
import { consultationSchema } from "./consultationSchema";

const base = { fullName: "Jane Smith", email: "", phone: "", preferredContact: "email", appointmentPreference: "video", message: "", marketingOptIn: false };

describe("consultation request rules", () => {
  it("requires an email when email is the preferred contact method", () => {
    expect(consultationSchema.safeParse(base).success).toBe(false);
    expect(consultationSchema.safeParse({ ...base, email: "jane@example.com" }).success).toBe(true);
  });
  it("requires a phone number when telephone is preferred", () => {
    expect(consultationSchema.safeParse({ ...base, preferredContact: "phone" }).success).toBe(false);
    expect(consultationSchema.safeParse({ ...base, preferredContact: "phone", phone: "020 7099 9333" }).success).toBe(true);
  });
  it("limits the optional message to 500 characters", () => {
    expect(consultationSchema.safeParse({ ...base, email: "a@b.co", message: "x".repeat(501) }).success).toBe(false);
  });
  it("keeps marketing opt-in off unless chosen", () => {
    const r = consultationSchema.parse({ ...base, email: "a@b.co", marketingOptIn: undefined });
    expect(r.marketingOptIn).toBe(false);
  });
});
