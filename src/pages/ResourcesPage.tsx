import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

const patientEducation = [
  {
    title: "Understanding Your Microbiome Report",
    description: "A guide to interpreting your test results and what different markers mean.",
    type: "Guide",
  },
  {
    title: "Diet and Microbiome Health",
    description: "Evidence-based dietary factors that influence gut bacteria composition.",
    type: "Article",
  },
  {
    title: "Evidence-Based Probiotic Use",
    description: "What the research says about probiotics and which conditions have evidence.",
    type: "Guide",
  },
  {
    title: "Reading Scientific Studies",
    description: "How to evaluate microbiome research claims and spot weak evidence.",
    type: "Tutorial",
  },
];

const scientificReferences = [
  {
    title: "International Consensus on Microbiome Testing",
    source: "The Lancet Gastroenterology & Hepatology",
    date: "December 2024",
    description: "69 experts from 18 countries on current evidence for clinical microbiome testing.",
    link: "#",
  },
  {
    title: "Microbiome Biomarkers in Inflammatory Bowel Disease",
    source: "Nature Medicine",
    date: "2024",
    description: "Research on diagnostic accuracy of microbial signatures in IBD.",
    link: "#",
  },
  {
    title: "Gut Microbiota and Metabolic Health",
    source: "Journal of Clinical Endocrinology & Metabolism",
    date: "2024",
    description: "Links between gut bacteria, obesity, and metabolic syndrome.",
    link: "#",
  },
  {
    title: "FDA Approval: Fecal Microbiota Products",
    source: "FDA",
    date: "2023",
    description: "Approval of Rebyota and Vowst for recurrent C. difficile infection.",
    link: "#",
  },
  {
    title: "Commercial Microbiome Testing: Regulatory Considerations",
    source: "University of Maryland",
    date: "2024",
    description: "Analysis of regulatory gaps in commercial microbiome testing market.",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Resources
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Educational Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Evidence-based materials to help you understand microbiome science, 
              interpret research, and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Education */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Patient Education"
            title="Understanding Your Gut Health"
            description="Resources to help you navigate microbiome science and your test results."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {patientEducation.map((resource) => (
              <Card key={resource.title} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block rounded bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                        {resource.type}
                      </span>
                      <h3 className="mt-2 font-semibold text-foreground">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <FileText className="h-8 w-8 flex-shrink-0 text-primary" />
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 -ml-2">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Resources are available to patients following consultation. 
            Contact us for access.
          </p>
        </div>
      </section>

      {/* Scientific References */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Scientific References"
            title="Key Research Papers"
            description="Primary sources informing our practice and evidence communication."
          />

          <div className="space-y-4">
            {scientificReferences.map((ref) => (
              <Card key={ref.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="font-semibold text-foreground">
                          {ref.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {ref.date}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-primary">
                        {ref.source}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {ref.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Full reference list and PDFs available upon request during consultation.
          </p>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="External Resources"
              title="Trusted Information Sources"
              description="Reputable organisations for further reading on gut health."
            />

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      name: "British Society of Gastroenterology",
                      description: "Professional guidelines and patient information on GI conditions.",
                    },
                    {
                      name: "Gut Microbiota for Health",
                      description: "Educational platform supported by gastroenterology organisations.",
                    },
                    {
                      name: "NIH Human Microbiome Project",
                      description: "Research resources from the National Institutes of Health.",
                    },
                    {
                      name: "NICE Guidelines",
                      description: "UK national guidance on GI conditions and evidence-based treatment.",
                    },
                  ].map((resource) => (
                    <div key={resource.name} className="flex items-start gap-3">
                      <ExternalLink className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{resource.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Want Personalised Guidance?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our consultations provide individualised interpretation and 
              recommendations based on your specific situation.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
