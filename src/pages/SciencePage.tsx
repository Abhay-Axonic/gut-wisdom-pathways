import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const whatWeKnow = [
  "The gut microbiome influences metabolism, immunity, and inflammation",
  "Specific microbial signatures associate with various health conditions",
  "Diet and lifestyle significantly impact microbiome composition",
  "Microbiome diversity generally correlates with better health outcomes",
  "Short-chain fatty acids produced by gut bacteria have systemic effects",
];

const whatWeDontKnow = [
  "Precise causal relationships in most conditions",
  "Optimal interventions for specific microbial patterns",
  "Long-term outcomes of microbiome-directed therapies",
  "Individual response predictability to interventions",
  "What constitutes a 'normal' microbiome (high individual variation)",
];

const researchAreas = [
  {
    condition: "Inflammatory Bowel Disease (IBD)",
    evidenceLevel: "Emerging",
    findings: [
      "Studies demonstrate consistent microbial alterations in IBD",
      "Specific bacterial species show diagnostic potential (>90% accuracy in research)",
      "Fecal microbial signatures show potential for monitoring (0.82-0.85 AUC)",
      "Still primarily research-stage, not routine clinical practice",
    ],
    references: ["Nature Medicine 2024", "PMC meta-analyses"],
  },
  {
    condition: "Metabolic Health",
    evidenceLevel: "Observational",
    findings: [
      "Reduced microbial diversity linked to obesity and diabetes",
      "Butyrate-producing bacteria inversely correlated with metabolic disease",
      "Gut-liver axis influences insulin sensitivity",
      "Evidence is observational; clinical utility not yet established",
    ],
    references: ["Journal of Clinical Endocrinology & Metabolism 2024", "Cell Metabolism"],
  },
  {
    condition: "Recurrent C. difficile Infection",
    evidenceLevel: "Established",
    findings: [
      "FDA has approved fecal microbiota transplantation products (Rebyota, Vowst)",
      "This represents the strongest evidence-based application of microbiome therapy",
      "Clinical trials demonstrate significant efficacy",
    ],
    references: ["FDA Approval Documents", "NEJM"],
  },
  {
    condition: "Irritable Bowel Syndrome (IBS)",
    evidenceLevel: "Limited",
    findings: [
      "Expert opinion states microbiome testing is not currently helpful outside research",
      "We cannot yet define what is abnormal in IBS",
      "Results are inconsistent across studies",
      "May help identify specific dietary triggers in some cases",
    ],
    references: ["Gastroenterology Guidelines 2024"],
  },
];

const limitations = [
  {
    title: "International Expert Consensus (Dec 2024)",
    description:
      "69 experts from 18 countries concluded there is insufficient evidence to widely recommend routine microbiome testing in clinical practice. Published in The Lancet Gastroenterology & Hepatology.",
  },
  {
    title: "Defining 'Normal' is Challenging",
    description:
      "Normal microbiome ranges are still being defined. Many factors influence results beyond underlying health conditions, including diet, medications, and geography.",
  },
  {
    title: "Not Diagnostic",
    description:
      "Microbiome testing cannot diagnose disease or replace standard medical investigations. It provides complementary information only.",
  },
  {
    title: "Intervention Validation Needed",
    description:
      "Interventions based on testing require further clinical validation. We do not know with certainty how to optimally modify the microbiome for most conditions.",
  },
];

export default function SciencePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              The Science
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Current Evidence Base
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A transparent overview of what microbiome research shows—and what 
              remains uncertain. We believe you deserve to know both.
            </p>
          </div>
        </div>
      </section>

      {/* What We Know vs Don't Know */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <CardTitle>What We Know</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whatWeKnow.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-amber-600" />
                  <CardTitle>What We Don't Yet Know</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whatWeDontKnow.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research by Condition */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Research Evidence"
            title="What Research Shows by Condition"
            description="Current evidence varies significantly by condition. Here's an honest assessment."
          />

          <div className="space-y-6">
            {researchAreas.map((area) => (
              <Card key={area.condition}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <CardTitle className="text-xl">{area.condition}</CardTitle>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        area.evidenceLevel === "Established"
                          ? "bg-green-100 text-green-800"
                          : area.evidenceLevel === "Emerging"
                          ? "bg-blue-100 text-blue-800"
                          : area.evidenceLevel === "Observational"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      Evidence: {area.evidenceLevel}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.findings.map((finding) => (
                      <li key={finding} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground">{finding}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Key References:</strong>{" "}
                      {area.references.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Limitations */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Transparency"
              title="Important Limitations"
              description="We believe in complete honesty about the current state of the science."
            />

            <div className="space-y-6">
              {limitations.map((limitation) => (
                <Card key={limitation.title} className="border-amber-200 bg-amber-50/50">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {limitation.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {limitation.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key References */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="References"
              title="Key Scientific References"
              description="Primary sources informing our practice and patient communication."
            />

            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    {
                      title: "International Consensus on Microbiome Testing",
                      source: "The Lancet Gastroenterology & Hepatology, December 2024",
                    },
                    {
                      title: "Microbiome Biomarkers in Inflammatory Bowel Disease",
                      source: "Nature Medicine, 2024",
                    },
                    {
                      title: "Gut Microbiota and Metabolic Health",
                      source: "Journal of Clinical Endocrinology & Metabolism, 2024",
                    },
                    {
                      title: "FDA Approval: Fecal Microbiota Products for C. difficile",
                      source: "FDA Documentation, 2023",
                    },
                    {
                      title: "Commercial Microbiome Testing: Regulatory Considerations",
                      source: "University of Maryland Research Review, 2024",
                    },
                  ].map((ref) => (
                    <li key={ref.title} className="flex items-start gap-3">
                      <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{ref.title}</p>
                        <p className="text-sm text-muted-foreground">{ref.source}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Full reference list and PDFs available upon request during consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <BookOpen className="mx-auto h-12 w-12 text-primary-foreground/80" />
            <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Have Questions About the Evidence?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              We're happy to discuss the science in more detail and help you 
              understand what testing can and cannot offer.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
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
