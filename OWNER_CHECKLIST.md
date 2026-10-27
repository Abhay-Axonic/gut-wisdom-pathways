# Owner checklist (not shown on the public site)

All values are set in `src/config/site.ts` and `src/config/clinicians.ts`.

1. Final brand name and domain — set `productionUrl`; canonicals, sitemap and robots follow. Connect the domain in Project Settings → Domains.
2. Contact details — confirm phone 020 7099 9333 and gastrosurgery@gmail.com; consider a branded email once the domain exists. Confirm a response time to display.
3. Clinic address — street and postcode (enables full address and structured data).
4. Clinicians — verified qualifications, GMC/other registration numbers, whether each role is medical, photos (real only).
5. Services — consultation length, video availability, whether follow-ups are offered, what reports are provided.
6. Laboratory — partner, accreditation, method, turnaround; only then set `testingAvailable: true`.
7. Fees — initial and follow-up consultation prices; what costs extra.
8. Booking/payment — booking system URL (switches CTA to "Book a consultation").
9. Enquiry notifications (LAUNCH BLOCKER) — requests are stored securely but nobody is alerted yet. Needed: a sender domain you own, the staff address to notify (`CONSULTATION_NOTIFY_EMAIL` secret) and where staff should review requests. The alert sends only a reference number, no patient details.
9a. Staff access — requests are currently only visible in the Lovable Cloud backend. A staff sign-in area with roles can be added if more people need access.
10. Policies — approve full privacy notice (controller, ICO registration, retention), appointment terms and cancellation policy.
11. Clinical sign-off — review all public copy, especially Science and Testing pages; previous references were removed pending review.
12. Analytics — choose provider/ID if wanted; consent banner then activates.
13. Search Console — verification token, then submit sitemap.
14. Hosting checks after first publish — confirm each page's own title/description appears when the published page is fetched directly (e.g. /services); real HTTP 404 status for unknown pages is not available on this hosting (missing pages are noindex and kept out of the sitemap).
15. Test records to delete before launch: TEST, UI TEST, TEST Verification Run, UI TEST Journey, UI TEST Journey Two, DOMAIN TEST.
