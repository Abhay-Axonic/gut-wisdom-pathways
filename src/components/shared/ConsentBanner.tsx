import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { analyticsConfigured, getConsent, loadAnalytics, setConsent } from "@/lib/analytics";

/** Only renders when an analytics provider is configured. No tracking loads before consent. */
export function ConsentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!analyticsConfigured()) return;
    if (getConsent() === null) setShow(true);
    else loadAnalytics();
  }, []);
  if (!show) return null;
  const choose = (v: "granted" | "denied") => { setConsent(v); setShow(false); };
  return (
    <div role="dialog" aria-label="Analytics preferences" className="fixed inset-x-3 bottom-24 z-50 rounded-xl border border-border bg-card p-5 shadow-soft sm:left-auto sm:right-6 sm:max-w-sm lg:bottom-6">
      <p className="text-sm text-muted-foreground">
        May we use privacy-friendly analytics to understand which pages are useful? No personal or health information is collected.
      </p>
      <div className="mt-4 flex gap-3">
        <Button size="sm" onClick={() => choose("granted")}>Allow</Button>
        <Button size="sm" variant="outline" onClick={() => choose("denied")}>Decline</Button>
      </div>
    </div>
  );
}
