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
