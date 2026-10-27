import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand } from "@/components/shared/PageHero";
import { site } from "@/config/site";

const journey = [
  { t: "Initial clinical assessment", d: "A consultant-led conversation about your symptoms, history, medicines and any investigations you have had. We look for anything that needs standard medical tests or referral first." },
  { t: "Testing — only if appropriate and agreed", d: site.services.testingAvailable ? "If a test could change your care, we explain the method, its limitations and cost before you decide." : "We are not currently arranging microbiome tests. If a standard test would help, we explain which one and how to access it." },
  { t: "Explanation and plan", d: "You leave with a clear explanation of what we think is going on, what the evidence says, and sensible next steps." },
  { t: "Coordinated care", d: "With your permission we can write to your GP or specialist so your care stays joined up." },
];

export default function ServicesPage() {
  return (
    <Layout>
      <Seo
        title="Services — specialist digestive health consultation"
        description="What happens during a specialist-led gut health consultation at our London clinic: assessment, an honest view of testing, and a clear plan."
        path="/services"
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      <PageHero eyebrow="Services" title="A consultation-first approach to gut health">
        <p>Every patient starts with a specialist assessment. We do not sell tests or supplements up front.</p>
      </PageHero>

      <section className="container py-20">
        <ol className="space-y-0 border-t border-border">
          {journey.map((j, i) => (
            <li key={j.t} className="grid gap-4 border-b border-border py-10 md:grid-cols-[120px_1fr_1.2fr]">
              <span className="font-heading text-4xl text-brass">0{i + 1}</span>
              <h2 className="">{j.t}</h2>
              <p className="text-muted-foreground">{j.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-alt border-y border-border/70">
        <div className="container grid gap-10 py-20 md:grid-cols-2">
          <div>
            <h2 className="">What the consultation is not</h2>
            <p className="mt-4 text-muted-foreground">
              It is not an emergency service, and it does not replace your GP or hospital care. We will not promise
              that testing or any treatment will relieve your symptoms.
            </p>
          </div>
          <div>
            <h2 className="">Practical arrangements</h2>
            <p className="mt-4 text-muted-foreground">
              Appointments are based in {site.location.city}. When we contact you, we confirm the appointment type,
              length and fee before anything is booked.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline"><Link to="/fees">View fees</Link></Button>
              <Button asChild variant="ghost"><Link to="/testing">About testing</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand location="services" />
    </Layout>
  );
}
