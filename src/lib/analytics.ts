import { site } from "@/config/site";

/**
 * Privacy-conscious event helper. Events carry only a name and a non-personal
 * location label — never names, contact details, messages or symptoms.
 * Nothing is sent unless an analytics provider is configured AND the visitor consented.
 */
export type ClinicEvent =
  | "cta_click"
  | "phone_click"
  | "email_click"
  | "consultation_request_accepted"
  | "booking_confirmed";

const CONSENT_KEY = "mc-analytics-consent";

export const analyticsConfigured = () => Boolean(site.analytics.provider && site.analytics.id);

export function getConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  if (value === "granted") loadAnalytics();
}

let loaded = false;
export function loadAnalytics() {
  if (loaded || !analyticsConfigured() || getConsent() !== "granted") return;
  loaded = true;
  const s = document.createElement("script");
  s.defer = true;
  if (site.analytics.provider === "plausible") {
    s.dataset.domain = site.analytics.id!;
    s.src = "https://plausible.io/js/script.js";
  } else {
    s.src = `https://www.googletagmanager.com/gtag/js?id=${site.analytics.id}`;
    const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = (...a: unknown[]) => w.dataLayer.push(a);
    w.gtag("js", new Date());
    w.gtag("config", site.analytics.id, { anonymize_ip: true });
  }
  document.head.appendChild(s);
}

export function track(event: ClinicEvent, location?: string) {
  if (!analyticsConfigured() || getConsent() !== "granted") return;
  const props = location ? { location } : undefined;
  const w = window as unknown as {
    plausible?: (e: string, o?: { props?: object }) => void;
    gtag?: (...a: unknown[]) => void;
  };
  if (site.analytics.provider === "plausible") w.plausible?.(event, { props });
  else w.gtag?.("event", event, props);
}
