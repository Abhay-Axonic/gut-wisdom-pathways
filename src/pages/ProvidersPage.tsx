import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/config/site";

export default function ProvidersPage() {
  return (
    <Layout>
      <Seo path="/providers" breadcrumbs={[{ name: "For healthcare professionals", path: "/providers" }]} />
      <PageHero eyebrow="For healthcare professionals" title="Working with GPs and specialists">
        <p>We aim to complement, not replace, the care your patient already receives.</p>
      </PageHero>
      <article className="container prose-clinic max-w-3xl py-12">
        <h2>Our approach</h2>
        <ul>
          <li>Consultant-led assessment comes first; testing is not offered as a stand-alone product.</li>
          <li>Red-flag symptoms are directed to standard investigation pathways.</li>
          <li>With the patient’s consent, we write back to the referring clinician.</li>
          <li>We are clear with patients about the limited established clinical use of routine microbiome testing.</li>
        </ul>
        <h2>Getting in touch</h2>
        <p>To discuss a patient, please call <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a> or email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Please do not send identifiable clinical information by unsecured email. Patients can also <Link to="/contact">request a consultation</Link> directly.</p>
      </article>
    </Layout>
  );
}
