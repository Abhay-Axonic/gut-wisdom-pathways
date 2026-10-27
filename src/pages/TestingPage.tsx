import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero, CtaBand, RelatedLinks } from "@/components/shared/PageHero";
import { site } from "@/config/site";

export default function TestingPage() {
  return (
    <Layout>
      <Seo
        path="/testing"
        breadcrumbs={[{ name: "Microbiome testing", path: "/testing" }]}
      />
      <PageHero eyebrow="Microbiome testing" title="What a microbiome test can — and cannot — tell you">
        <p>Commercial tests are widely advertised. Before you buy one, it helps to know what they actually measure.</p>
      </PageHero>

      {!site.services.testingAvailable && (
        <div className="container pt-12">
          <p className="max-w-3xl rounded-xl border border-brass/40 bg-muted/60 p-5">
            <strong>Please note:</strong> we are not currently arranging microbiome tests through the clinic. Our
            consultations focus on specialist assessment and helping you decide whether any test is worthwhile.
          </p>
        </div>
      )}

      <article className="container prose-clinic max-w-3xl py-12">
        <h2>What is measured</h2>
        <p>
          Most tests analyse DNA from a single stool sample to estimate which bacteria (and sometimes other microbes)
          are present and in what relative amounts. The two common methods are:
        </p>
        <ul>
          <li><strong>16S rRNA sequencing</strong> — reads one marker gene; usually identifies bacteria to genus level.</li>
          <li><strong>Shotgun metagenomic sequencing</strong> — reads DNA more broadly; can give more detail on species and genes.</li>
        </ul>
        <p>
          Sequencing describes microbes. It does not measure gut inflammation. Markers such as faecal calprotectin
          are separate laboratory tests and are usually arranged through your GP or specialist.
        </p>

        <h2>Important limitations</h2>
        <ul>
          <li>The gut microbiome varies between people and from day to day, and there is no agreed “healthy” profile.</li>
          <li>Results from different companies and methods are often not comparable.</li>
          <li>For most conditions, there is not yet good evidence that acting on a test result improves outcomes.</li>
          <li>A test cannot diagnose IBS, inflammatory bowel disease, coeliac disease or cancer.</li>
        </ul>

        <h2>Where microbiome-based treatment is established</h2>
        <p>
          The clearest established use is treating recurrent <em>Clostridioides difficile</em> infection with
          faecal microbiota transplant, which is a specialist treatment. This does not mean that general commercial
          microbiome profiling is clinically validated.
        </p>

        <h2>When to see a doctor first</h2>
        <p>
          Blood in your stool, unexplained weight loss, a persistent change in bowel habit, night-time symptoms,
          anaemia, or a family history of bowel cancer or inflammatory bowel disease should be assessed by a doctor
          with standard investigations — not a microbiome test.
        </p>
        <p>
          Read more about <Link to="/science">the science and research</Link>, or see <Link to="/services">how a
          consultation works</Link>.
        </p>
      </article>
      <RelatedLinks page="testing" />
      <CtaBand title="Unsure whether a test is worth it?" text="A specialist consultation can help you decide — and point you towards the investigations that matter." location="testing" />
    </Layout>
  );
}
