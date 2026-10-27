import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand, RelatedLinks } from "@/components/shared/PageHero";
import { site, ctaHref, ctaLabel } from "@/config/site";
import { track } from "@/lib/analytics";

export function FeeRow({ name, detail, price }: { name: string; detail: string; price: string | null }) {
  return (
    <div className="grid gap-3 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-baseline">
      <div>
        <h3 className="">{name}</h3>
        <p className="mt-2 max-w-xl text-muted-foreground">{detail}</p>
      </div>
      <p className="font-heading text-2xl text-primary sm:text-right">{price ?? <span className="text-base font-sans text-muted-foreground">Please request our current fees</span>}</p>
    </div>
  );
}

export default function FeesPage() {
  return (
    <Layout>
      <Seo
        title="Fees"
        description="Consultation fees at our London gut health clinic, what is included, and what may cost extra."
        path="/fees"
        breadcrumbs={[{ name: "Fees", path: "/fees" }]}
      />
      <PageHero eyebrow="Fees" title="Clear fees, agreed before you book">
        <p>We confirm the fee for your appointment in writing before anything is booked. There are no hidden charges.</p>
      </PageHero>
      <section className="container py-16">
        <div className="border-t border-border">
          <FeeRow name="Initial specialist consultation" detail="Assessment of your history and symptoms, review of previous investigations, and a clear explanation of next steps." price={site.fees.initialConsultation} />
          {site.services.followUpOffered && (
            <FeeRow name="Follow-up consultation" detail="A review of progress and any results." price={site.fees.followUpConsultation} />
          )}
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="">What may cost extra</h2>
            <p className="mt-3 text-muted-foreground">
              Any investigations, tests or onward referrals are separate from the consultation fee. We will always
              explain these and their costs before you decide.
            </p>
          </div>
          <div>
            <h2 className="">Insurance</h2>
            <p className="mt-3 text-muted-foreground">
              We cannot guarantee that an insurer will cover your appointment. If you plan to claim, please check with
              your insurer before booking.
            </p>
          </div>
        </div>
        <Button asChild size="lg" className="mt-12" onClick={() => track("cta_click", "fees")}><Link to={ctaHref}>{ctaLabel}</Link></Button>
        <p className="mt-4 text-sm text-muted-foreground">Questions about fees? <Link to="/contact" className="underline">Contact us</Link>.</p>
      </section>
      <RelatedLinks page="fees" />
      <CtaBand location="fees_band" />
    </Layout>
  );
}
