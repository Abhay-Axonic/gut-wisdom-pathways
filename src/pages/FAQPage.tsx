import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand } from "@/components/shared/PageHero";
import { site } from "@/config/site";

const groups = [
  {
    t: "Consultations",
    items: [
      { q: "Do I need a referral?", a: "No. You can request a consultation yourself." },
      { q: "What happens at the first appointment?", a: "A specialist reviews your symptoms, history, medicines and previous investigations, then explains their view and the sensible next steps." },
      { q: "Where are appointments held?", a: `Appointments are based in ${site.location.city}. We confirm the arrangements when we contact you.` },
      { q: "Will you share information with my GP?", a: "Only with your permission. Keeping your GP informed usually helps your care stay joined up." },
    ],
  },
  {
    t: "Testing",
    items: [
      { q: "Can I buy a microbiome test from you?", a: site.services.testingAvailable ? "Testing is only arranged after a consultation, where it is appropriate and agreed with you." : "Not at present. We focus on assessment and helping you decide whether a test is worthwhile." },
      { q: "Can a microbiome test diagnose my condition?", a: "No. Microbiome tests cannot diagnose IBS, inflammatory bowel disease or cancer. Standard medical tests are needed for diagnosis." },
      { q: "Does sequencing measure inflammation?", a: "No. Sequencing describes microbes. Inflammation markers such as faecal calprotectin are separate tests." },
    ],
  },
  {
    t: "Fees and practicalities",
    items: [
      { q: "How much does a consultation cost?", a: "Please request our current fees. We confirm the fee before anything is booked." },
      { q: "Will my insurer pay?", a: "We cannot guarantee insurance cover. Please check with your insurer before booking." },
      { q: "Do you sell supplements?", a: "No. We do not sell supplements or receive commission on products." },
      { q: "What if my symptoms are urgent?", a: "Contact your GP or NHS 111. In an emergency, call 999." },
    ],
  },
];

export default function FAQPage() {
  return (
    <Layout>
      <Seo title="Frequently asked questions" description="Answers about consultations, microbiome testing, fees and practical arrangements at our London gut health clinic." path="/faq" breadcrumbs={[{ name: "FAQs", path: "/faq" }]} jsonLd={[{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: groups.flatMap((g) => g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } }))) }]} />
      <PageHero eyebrow="FAQs" title="Frequently asked questions" />
      <section className="container max-w-4xl py-16">
        {groups.map((g) => (
          <div key={g.t} className="mb-14">
            <h2 className="">{g.t}</h2>
            <Accordion type="multiple" className="mt-4">
              {g.items.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        <p className="text-muted-foreground">Still have a question? <Link to="/contact" className="text-primary underline">Contact us</Link>.</p>
      </section>
      <CtaBand location="faq" />
    </Layout>
  );
}
