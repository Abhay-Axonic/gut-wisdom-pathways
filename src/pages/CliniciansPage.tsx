import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand, RelatedLinks } from "@/components/shared/PageHero";
import { Leaf } from "@/components/shared/Illustrations";
import { clinicians } from "@/config/clinicians";
import { site } from "@/config/site";

export default function CliniciansPage() {
  return (
    <Layout>
      <Seo
        description={`Meet the clinicians at ${site.brandName}, London: ${clinicians.map((c) => `${c.name}, ${c.role}`).join("; ")}.`}
        path="/clinicians"
        breadcrumbs={[{ name: "Clinicians", path: "/clinicians" }]}
        jsonLd={clinicians.map((c) => ({
          "@context": "https://schema.org",
          "@type": "Person",
          name: c.name,
          jobTitle: c.role,
          worksFor: { "@type": "MedicalClinic", name: site.brandName, url: site.productionUrl },
        }))}
      />
      <PageHero eyebrow="Clinicians" title="The people behind your care" />
      <section className="container py-16">
        {clinicians.map((c) => (
          <article id={c.slug} key={c.slug} className="grid scroll-mt-28 gap-8 border-b border-border py-14 md:grid-cols-[220px_1fr]">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-secondary" aria-hidden>
              <Leaf className="h-20 w-20" />
            </div>
            <div>
              <p className="eyebrow">{c.role}</p>
              <h2 className="mt-3">{c.name}</h2>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{c.summary}</p>
            </div>
          </article>
        ))}
      </section>
      <RelatedLinks page="clinicians" />
      <CtaBand location="clinicians" />
    </Layout>
  );
}
