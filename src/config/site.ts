/**
 * Central public configuration. No secrets belong here.
 * Values marked `null` are not yet confirmed and are hidden from the public site.
 * See OWNER_CHECKLIST.md for what remains to be supplied.
 */
export const site = {
  brandName: "Microbiome Clinic",
  operatorName: "Gastrosurgery UK",
  /** Production origin used for canonical URLs and the sitemap (no trailing slash). */
  productionUrl: "https://gut-wisdom-pathways.lovable.app",
  locale: "en_GB",

  contact: {
    phoneDisplay: "020 7099 9333",
    phoneHref: "tel:+442070999333",
    email: "gastrosurgery@gmail.com",
    /** Confirmed response time wording, or null to omit any promise. */
    responseTime: null as string | null,
  },

  location: {
    /** Only confirmed location information. A full address enables the map. */
    city: "London",
    country: "United Kingdom",
    streetAddress: null as string | null,
    postcode: null as string | null,
  },

  services: {
    /** Microbiome testing is only offered once laboratory arrangements are confirmed. */
    testingAvailable: false,
    consultationDurationMinutes: null as number | null,
    followUpOffered: null as boolean | null,
  },

  fees: {
    /** Verified prices only, e.g. "£250". Null shows "request our current fees". */
    initialConsultation: null as string | null,
    followUpConsultation: null as string | null,
  },

  booking: {
    /** URL of a connected booking system. Null = request-a-consultation journey. */
    url: null as string | null,
  },

  analytics: {
    /** e.g. Plausible domain or GA4 ID. Empty = no analytics, no consent banner. */
    provider: null as null | "plausible" | "ga4",
    id: null as string | null,
  },

  searchConsoleVerification: null as string | null,
} as const;

export const ctaLabel = site.booking.url ? "Book a consultation" : "Request a consultation";
export const ctaHref = site.booking.url ?? "/contact#request";

export const isProductionHost = () =>
  typeof window !== "undefined" &&
  window.location.hostname === new URL(site.productionUrl).hostname;
