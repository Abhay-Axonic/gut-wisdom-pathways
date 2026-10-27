import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand, RelatedLinks } from "@/components/shared/PageHero";

const areas = [
  { t: "Inflammatory bowel disease", d: "People with Crohn’s disease and ulcerative colitis often have differences in gut microbes. These are research associations; diagnosis and monitoring still rely on standard tests such as calprotectin, blood tests and endoscopy." },
  { t: "Irritable bowel syndrome", d: "Some studies find microbiome differences in IBS, but patterns are inconsistent and no microbiome test is recommended to diagnose or guide IBS care." },
  { t: "After antibiotics", d: "Antibiotics can change the gut microbiome, which usually recovers over time. Routine testing to monitor recovery is not an established clinical practice." },
  { t: "During and after cancer treatment", d: "Researchers are studying how the microbiome relates to chemotherapy and immunotherapy. This is an active research area; testing has not been shown to reduce treatment side effects. Please discuss gut symptoms with your oncology team." },
  { t: "Metabolic health", d: "Links between gut microbes, weight and blood sugar are being researched. Testing cannot currently predict your individual risk of disease." },
];

export default function SciencePage() {
  return (
    <Layout>
      <Seo
        title="The science and its limitations"
        description="A balanced summary of gut microbiome research: where evidence is emerging, where it is established, and why routine testing has limited clinical use."
        path="/science"
        breadcrumbs={[{ name: "The science", path: "/science" }]}
      />
      <PageHero eyebrow="The science" title="Promising research, honest limits">
        <p>We separate what research has found from what is proven to help patients. Here is where things stand.</p>
      </PageHero>
      <section className="container py-16">
        <h2 className="">Areas of active research</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">These are fields of study, not services or promised outcomes.</p>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {areas.map((a) => (
            <article key={a.t} className="border-t border-border pt-6">
              <h3 className="">{a.t}</h3>
              <p className="mt-3 text-muted-foreground">{a.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-alt border-y border-border/70">
        <div className="container prose-clinic max-w-3xl py-16">
          <h2 className="!mt-0">Association is not the same as cause</h2>
          <p>
            Many studies show that people with a condition have different gut microbes on average. That does not mean
            the microbes caused the condition, or that changing them will help. Clinical trials are needed to show
            benefit, and for most uses those trials are still under way.
          </p>
          <h2>Our position</h2>
          <p>
            Routine microbiome testing has limited established clinical utility and does not replace standard medical
            assessment, investigations or treatment. We follow the evidence as it develops and will tell you plainly
            when something is not yet proven. See <Link to="/testing">what a test can and cannot tell you</Link>.
          </p>
        </div>
      </section>
      <RelatedLinks page="science" />
      <CtaBand location="science" />
    </Layout>
  );
}
