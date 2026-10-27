import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { MicrobeField } from "@/components/shared/Illustrations";
import { CtaBand } from "@/components/shared/PageHero";
import { site, ctaHref, ctaLabel } from "@/config/site";
import { clinicians } from "@/config/clinicians";
import { track } from "@/lib/analytics";

const suits = [
  "Long-standing digestive symptoms such as bloating, altered bowel habit or discomfort, where you want a specialist view",
  "An existing diagnosis such as IBS or inflammatory bowel disease, and questions about where microbiome research fits",
  "Gut symptoms after antibiotics, illness or cancer treatment, and a wish to understand your options",
  "Interest in a commercial microbiome test — before you spend money on one",
];

const steps = [
  { t: "Request a consultation", d: "Send a short request. We contact you to arrange a time — no medical details needed at this stage." },
  { t: "Specialist assessment", d: "A consultant reviews your history and symptoms, and any investigations you have already had." },
  { t: "A clear plan", d: "We explain what we think, which standard tests or referrals may help, and whether microbiome testing would add anything useful." },
  { t: "Ongoing support", d: "Where it helps, we work alongside your GP or existing specialist so your care stays joined up." },
];

const can = [
  "Describe which microbes were detected in one stool sample",
  "Support research and help frame discussion about diet and lifestyle",
];
const cannot = [
  "Diagnose IBS, inflammatory bowel disease or cancer",
  "Replace blood tests, stool inflammation tests, endoscopy or imaging",
  "Reliably predict your future health or tell you which supplement to take",
];

const faqs = [
  { q: "Do I need a referral?", a: "No. You can request a consultation yourself. If you have a GP or specialist, we are happy to keep them informed with your permission." },
  { q: "Will I be sold a test or supplements?", a: "No. The consultation comes first. We do not sell supplements, and we will tell you honestly if a test is unlikely to help." },
  { q: "Is this a replacement for my NHS care?", a: "No. Our role is to complement, not replace, the care you receive from your GP and hospital teams." },
  { q: "What if my symptoms are urgent?", a: "Please contact your GP or NHS 111. If you have severe pain, bleeding or feel very unwell, call 999." },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo
        title={`${site.brandName} London | Specialist-led gut health assessment`}
        description="Specialist-led digestive health consultations in London, with honest, evidence-based guidance on what microbiome science and testing can and cannot tell you."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: site.brandName,
            url: site.productionUrl,
            telephone: "+44 20 7099 9333",
            email: site.contact.email,
            address: { "@type": "PostalAddress", addressLocality: site.location.city, addressCountry: "GB" },
            medicalSpecialty: "Gastroenterologic",
            employee: clinicians.map((c) => ({ "@type": "Person", name: c.name, jobTitle: c.role })),
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div className="fade-up">
            <p className="eyebrow">{site.brandName} · London</p>
            <h1 className="mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl">
              Understand your gut health with <em className="text-accent">specialist-led</em> care.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Consultant-led consultations for people with digestive symptoms or questions about the microbiome. We
              assess you first, explain your options plainly, and only discuss testing where it could genuinely help.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" onClick={() => track("cta_click", "home_hero")}>
                <Link to={ctaHref}>{ctaLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#how-it-works">How it works</a>
              </Button>
            </div>
          </div>
          <MicrobeField className="mx-auto w-full max-w-md fade-up" />
        </div>
      </section>

      {/* Clinician intro */}
      <section className="border-y border-border/70 section-alt">
        <div className="container grid gap-8 py-14 md:grid-cols-[auto_1fr] md:items-center">
          <p className="eyebrow">Led by</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {clinicians.map((c) => (
              <Link key={c.slug} to={`/clinicians#${c.slug}`} className="group">
                <p className="font-heading text-2xl group-hover:text-primary">{c.name}</p>
                <p className="text-muted-foreground">{c.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who it suits */}
      <section className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Who we see</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A consultation may suit you if you have…</h2>
            <p className="mt-5 text-muted-foreground">
              We cannot promise to resolve symptoms, but we can give you a careful specialist opinion and a clear
              explanation of the evidence.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {suits.map((s) => (
              <li key={s} className="flex gap-4 py-5">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section id="how-it-works" className="scroll-mt-24 bg-forest text-ivory">
        <div className="container py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-ivory sm:text-4xl">Consultation first. Testing only if it is appropriate.</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-ivory/25 pt-6">
                <span className="font-heading text-4xl text-brass">0{i + 1}</span>
                <h3 className="mt-3 text-xl text-ivory">{s.t}</h3>
                <p className="mt-2 text-ivory/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Options */}
      <section className="container py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <p className="eyebrow">Available now</p>
            <h2 className="mt-3 text-3xl">Specialist consultation</h2>
            <p className="mt-4 text-muted-foreground">
              A consultant-led assessment of your digestive health, a review of previous investigations, and a clear
              explanation of next steps. In person in London or by video.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild onClick={() => track("cta_click", "home_options")}><Link to={ctaHref}>{ctaLabel}</Link></Button>
              <Button asChild variant="ghost"><Link to="/fees">Fees <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-border p-8 sm:p-10">
            <p className="eyebrow">About testing</p>
            <h2 className="mt-3 text-3xl">Microbiome testing</h2>
            <p className="mt-4 text-muted-foreground">
              {site.services.testingAvailable
                ? "Where it is appropriate and agreed with you, testing may be arranged after your consultation."
                : "We are not currently arranging microbiome tests. We can, however, help you understand whether a test is likely to be useful and interpret results you already have."}
            </p>
            <Button asChild variant="ghost" className="mt-8 px-0"><Link to="/testing">What testing can and cannot tell you <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="section-alt border-y border-border/70">
        <div className="container py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">An honest view of the evidence</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Microbiome science is promising — and still early.</h2>
            <p className="mt-5 text-muted-foreground">
              Research links the gut microbiome with many conditions, but for most people routine microbiome testing
              has limited established clinical use. It does not replace standard medical assessment, investigations or
              treatment.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl">A stool microbiome test can</h3>
              <ul className="mt-4 space-y-3">{can.map((c) => <li key={c} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />{c}</li>)}</ul>
            </div>
            <div>
              <h3 className="text-xl">It cannot</h3>
              <ul className="mt-4 space-y-3">{cannot.map((c) => <li key={c} className="flex gap-3"><Minus className="mt-1 h-5 w-5 shrink-0 text-destructive" aria-hidden />{c}</li>)}</ul>
            </div>
          </div>
          <Button asChild variant="link" className="mt-8 px-0"><Link to="/science">Read about the science and its limitations <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
      </section>

      {/* Clinicians */}
      <section className="container py-20 sm:py-28">
        <p className="eyebrow">Your clinicians</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Who you will see</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {clinicians.map((c) => (
            <article key={c.slug} className="border-t-2 border-brass pt-6">
              <h3 className="text-2xl">{c.name}</h3>
              <p className="text-accent">{c.role}</p>
              <p className="mt-4 text-muted-foreground">{c.summary}</p>
            </article>
          ))}
        </div>
        <Button asChild variant="link" className="mt-6 px-0"><Link to="/clinicians">Meet the clinicians <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
      </section>

      {/* FAQ */}
      <section className="container pb-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Practical questions</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Before you get in touch</h2>
            <Button asChild variant="link" className="mt-4 px-0"><Link to="/faq">All FAQs <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand location="home_final" />
    </Layout>
  );
}
