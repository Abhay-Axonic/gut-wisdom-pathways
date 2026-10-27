# Microbiome Clinic launch-preparation upgrade

Implements the uploaded brief end to end, within this project, without inventing facts.

## 1. Central configuration
One site config file holding: brand name ("Microbiome Clinic"), production URL, phone/email (flagged "owner to verify"), location ("London" only), consultation/package inclusions and durations (flagged unconfirmed), fees (empty, so "Please request our current fees" shows), booking integration (none), analytics IDs (empty), Search Console token. All pages read from it.

## 2. Visual redesign
- Palette: warm ivory background, deep forest green primary, muted teal secondary, restrained brass accent; dark readable text; tokens in the global stylesheet.
- Fonts: editorial serif headings (e.g. Fraunces) + clean sans body (e.g. Figtree), preloaded with font-display swap.
- New header (desktop nav + accessible mobile sheet menu, "Request a consultation" CTA), complete footer, subtle reduced-motion-aware fade-ins.
- Lightweight SVG botanical/abstract microbiome illustrations; no photos of people. One branded share image.

## 3. Pages and URLs
Home, /about, /clinicians (profiles from supplied info only, roles marked for verification), /services, /fees, /testing (process + laboratory: "partner laboratory details to be confirmed"), /science (evidence and limitations), /faq, /contact, /privacy, /terms (incl. cancellation draft), /accessibility, useful 404. Old /providers, /research, /resources redirect or fold into these.
Homepage follows the brief's structure with headline "Understand your gut health with specialist-led care." and visible limitations.

## 4. Claims audit
Rewrite all copy in British English; remove >90% IBD accuracy, antibiotic-recovery monitoring, chemotherapy side-effect, metabolic/health-span, calprotectin-by-sequencing, accreditation, turnaround, HSA/FSA and international shipping claims. Conditions section reframed as "areas of active research", not service promises. Existing references kept only where they clearly support a statement; others flagged for clinical review. No testimonials, stats, ratings or badges.

## 5. Consultation request form
- Enable Lovable Cloud. Private enquiries table (insert only via a server function; no public read), RLS on.
- Server function validates input (zod), honeypot + rate limit, stores the request; optional email notification left as a configuration step.
- Fields: name, email/phone, preferred contact method, appointment preference, optional short admin message with "do not include medical details" note, separate optional marketing opt-in.
- Accessible labels/errors, disabled button while sending, success only on confirmed server response, error + retry state.

## 6. SEO
Per-page title/description/canonical (from production URL) via a head component, one H1 per page, internal links, sitemap.xml and robots.txt generated from config, Organization/MedicalClinic + Person + Breadcrumb JSON-LD using verified fields only, noindex on non-production hosts, build-time prerendering of routes so content and metadata are in the HTML.

## 7. Measurement and consent
Small event helper (CTA click, phone/email click, accepted request) with no personal data. No trackers by default; consent banner only activates if an analytics ID is configured.

## 8. Verification and report
Build/type check, Playwright pass at mobile and desktop over all pages, nav, form (success and error), 404, titles/canonicals, sitemap. Test of the form-storing rule. Final report split into implemented / tested / awaiting configuration / awaiting approval, plus owner checklist and DNS steps from Lovable's domain settings. Nothing published, purchased or DNS-changed.

## Technical notes
- React Router + react-helmet-async; prerender via a Vite plugin step at build.
- Enquiries stored in Cloud with service-role insert from an edge function; no secrets in the frontend.
