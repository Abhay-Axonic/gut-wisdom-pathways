import { Link } from "react-router-dom";
import { site, ctaHref, ctaLabel } from "@/config/site";
import { track } from "@/lib/analytics";

const groups = [
  { title: "Care", links: [{ n: "Services", h: "/services" }, { n: "Fees", h: "/fees" }, { n: "Clinicians", h: "/clinicians" }, { n: "For healthcare professionals", h: "/providers" }] },
  { title: "Understanding", links: [{ n: "Microbiome testing", h: "/testing" }, { n: "The science", h: "/science" }, { n: "FAQs", h: "/faq" }, { n: "About the clinic", h: "/about" }] },
  { title: "Information", links: [{ n: "Contact", h: "/contact" }, { n: "Privacy", h: "/privacy" }, { n: "Terms & cancellations", h: "/terms" }, { n: "Accessibility", h: "/accessibility" }] },
];

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-heading text-2xl">{site.brandName}</p>
            <p className="mt-2 text-sm text-ivory/75">{site.operatorName} · {site.location.city}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li><a className="text-ivory/90 underline-offset-4 hover:underline" href={site.contact.phoneHref} onClick={() => track("phone_click", "footer")}>{site.contact.phoneDisplay}</a></li>
              <li><a className="text-ivory/90 underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`} onClick={() => track("email_click", "footer")}>{site.contact.email}</a></li>
            </ul>
            <Link to={ctaHref} onClick={() => track("cta_click", "footer")} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-ivory px-5 text-sm font-medium text-forest hover:bg-ivory/90">
              {ctaLabel}
            </Link>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{g.title}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {g.links.map((l) => (
                  <li key={l.h}><Link to={l.h} className="text-ivory/85 hover:text-ivory hover:underline underline-offset-4">{l.n}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-ivory/15 pt-8 text-sm text-ivory/70">
          <p className="max-w-3xl">
            Information on this website is general and does not replace advice from your own doctor. Microbiome
            testing has limited established clinical use and does not replace standard medical assessment. If you
            have urgent symptoms, contact your GP, NHS 111, or in an emergency call 999.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} {site.brandName}</p>
        </div>
      </div>
    </footer>
  );
}
