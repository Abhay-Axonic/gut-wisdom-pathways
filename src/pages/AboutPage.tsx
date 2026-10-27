import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand } from "@/components/shared/PageHero";
import { site } from "@/config/site";

const principles = [
  { t: "Assessment before testing", d: "We see you first. Testing is only ever discussed when it could change your care." },
  { t: "No product sales", d: "We do not sell supplements or receive commission on products, so our advice is independent." },
  { t: "Honest about evidence", d: "We explain what research shows, what it does not, and where uncertainty remains." },
  { t: "Working with your doctors", d: "We support, rather than replace, the care you receive from your GP and hospital teams." },
];

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About the clinic"
        description={`About ${site.brandName}: a specialist-led London clinic offering careful, evidence-based guidance on digestive health and the gut microbiome.`}
        path="/about"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />
      <PageHero eyebrow="About" title={`About ${site.brandName}`}>
        <p>
          A specialist-led clinic in {site.location.city}, run by {site.operatorName}, for people who want a careful,
          honest view of their digestive health and the science of the gut microbiome.
        </p>
      </PageHero>
      <section className="container py-20">
        <h2 className="">How we practise</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.t} className="flex gap-6">
              <span className="font-heading text-3xl text-brass">0{i + 1}</span>
              <div>
                <h3 className="">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-14 text-muted-foreground">
          Meet <Link to="/clinicians" className="text-primary underline underline-offset-4">our clinicians</Link>, or see{" "}
          <Link to="/services" className="text-primary underline underline-offset-4">how a consultation works</Link>.
        </p>
      </section>
      <CtaBand location="about" />
    </Layout>
  );
}
