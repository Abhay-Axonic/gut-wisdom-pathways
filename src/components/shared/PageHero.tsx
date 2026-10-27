import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, MicrobeField } from "./Illustrations";
import { ctaHref, ctaLabel, site } from "@/config/site";
import { track } from "@/lib/analytics";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <Leaf className="pointer-events-none absolute -right-6 -top-4 hidden h-44 w-44 opacity-70 md:block" />
      <MicrobeMotif className="pointer-events-none absolute bottom-6 right-24 hidden h-10 w-28 opacity-80 lg:block" />
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4">{title}</h1>
          {children && <div className="lede measure mt-5">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Talk to us about your digestive health",
  text = "Start with a consultation. We will listen, review your history and explain your options — including whether any testing is worthwhile.",
  location = "cta_band",
}: { title?: string; text?: string; location?: string }) {
  return (
    <section className="container py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-14 text-ivory sm:px-14">
        <MicrobeField className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 opacity-25" />
        <div className="relative max-w-2xl">
          <h2 className=" text-ivory">{title}</h2>
          <p className="mt-4 text-ivory/80">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="secondary" onClick={() => track("cta_click", location)}>
              <Link to={ctaHref}>{ctaLabel}</Link>
            </Button>
            <a href={site.contact.phoneHref} onClick={() => track("phone_click", location)} className="text-ivory/90 underline underline-offset-4 sm:ml-4">
              Call {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const relatedMap: Record<string, { to: string; label: string; note: string }[]> = {
  services: [
    { to: "/fees", label: "How consultation fees are confirmed", note: "Fees" },
    { to: "/clinicians", label: "The clinicians you will see", note: "Clinicians" },
    { to: "/testing", label: "When a microbiome test may or may not help", note: "Testing" },
  ],
  testing: [
    { to: "/science", label: "What the research currently shows", note: "The science" },
    { to: "/services", label: "What a specialist consultation covers", note: "Services" },
    { to: "/faq", label: "Common questions before you get in touch", note: "FAQs" },
  ],
  science: [
    { to: "/testing", label: "What a stool microbiome test can and cannot tell you", note: "Testing" },
    { to: "/services", label: "How a consultation works", note: "Services" },
    { to: "/clinicians", label: "Who leads the clinic", note: "Clinicians" },
  ],
  fees: [
    { to: "/services", label: "What the consultation includes", note: "Services" },
    { to: "/faq", label: "Practical questions about appointments", note: "FAQs" },
    { to: "/contact", label: "Ways to contact the clinic", note: "Contact" },
  ],
  clinicians: [
    { to: "/services", label: "What to expect from your consultation", note: "Services" },
    { to: "/about", label: "How the clinic practises", note: "About" },
    { to: "/science", label: "Our view of the microbiome evidence", note: "The science" },
  ],
};

export function RelatedLinks({ page }: { page: keyof typeof relatedMap }) {
  const items = relatedMap[page];
  return (
    <section className="container pt-4">
      <h2 className="sr-only">Related pages</h2>
      <ul className="grid gap-4 border-t border-border pt-8 md:grid-cols-3">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="lift group block rounded-2xl border border-border bg-card p-6">
              <span className="eyebrow">{i.note}</span>
              <span className="mt-2 block font-heading text-xl text-foreground group-hover:text-primary">{i.label} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
