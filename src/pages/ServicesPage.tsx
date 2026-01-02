import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EvidenceDisclosure } from "@/components/shared/EvidenceDisclosure";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  FileText,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";

const testingIncludes = [
  "Bacterial diversity and composition analysis",
  "Key functional pathway assessment",
  "Inflammatory markers (calprotectin, secretory IgA)",
  "Digestive function markers",
  "Short-chain fatty acid producer identification",
  "Metagenomic sequencing analysis",
];

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "60-minute consultation to review medical history, current treatments, assess suitability, and obtain informed consent.",
    required: true,
  },
  {
    step: 2,
    icon: FlaskConical,
    title: "Sample Collection",
    description: "Home collection kit with preservative, detailed instructions, and quality control measures for reliable results.",
    required: false,
  },
  {
    step: 3,
    icon: Microscope,
    title: "Laboratory Analysis",
    description: "Metagenomic sequencing, functional pathway analysis, and reference database comparison in CLIA-certified labs.",
    required: false,
  },
  {
    step: 4,
    icon: FileText,
    title: "Results Consultation",
    description: "60-minute clinical review with evidence-based interpretation, personalised recommendations, and care integration.",
    required: true,
  },
];

const benefitCategories = [
  {
    title: "Gastrointestinal Conditions",
    badge: "Emerging Evidence",
    conditions: [
      "Inflammatory Bowel Disease monitoring (physician-supervised)",
      "Irritable Bowel Syndrome symptom correlation",
      "Post-antibiotic recovery assessment",
    ],
  },
  {
    title: "Metabolic Health Optimisation",
    badge: "Research Stage",
    conditions: [
      "Obesity and weight management support",
      "Type 2 diabetes lifestyle interventions",
      "Metabolic syndrome risk assessment",
    ],
  },
  {
    title: "General Wellness",
    badge: "Exploratory",
    conditions: [
      "Dietary optimisation guidance",
      "Lifestyle intervention planning",
      "Health-span optimisation strategies",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Our Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Comprehensive Gut Microbiome Analysis
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A complete service package designed for meaningful health insights, 
              delivered by specialist clinicians with full integration into your existing care.
            </p>
          </div>

          {/* Evidence Disclosure */}
          <div className="mx-auto mt-12 max-w-3xl">
            <EvidenceDisclosure />
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                What We Test
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Comprehensive Microbiome Profiling
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our analysis provides a detailed picture of your gut ecosystem, 
                examining multiple aspects of microbial composition and function.
              </p>
              <ul className="mt-8 space-y-3">
                {testingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                        <Microscope className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">
                        Advanced Sequencing
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Using state-of-the-art metagenomic technology 
                        in CLIA-certified laboratories.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who May Benefit */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Who May Benefit"
            title="Potential Applications"
            description="Testing is adjunctive to, not a replacement for, standard medical care."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {benefitCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <span className="mb-2 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {category.badge}
                  </span>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.conditions.map((condition) => (
                      <li key={condition} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Evidence levels vary 
                by condition. We clearly communicate the strength of evidence for any 
                recommendations made. Testing cannot diagnose disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Testing Process"
            title="Your Journey With Us"
            description="A structured process designed for clinical rigour and patient support."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.step} className="relative">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  {step.required && (
                    <span className="mt-1 inline-block text-xs font-medium text-primary">
                      Required
                    </span>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <SectionHeader
              badge="Pricing"
              title="Comprehensive Analysis Package"
            />

            <Card className="overflow-hidden border-2 border-primary">
              <CardHeader className="bg-primary/5 text-center">
                <CardTitle className="text-2xl">Full Microbiome Analysis</CardTitle>
                <p className="text-muted-foreground">
                  Everything you need for a complete assessment
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">Contact for Pricing</span>
                </div>

                <div className="mt-8 space-y-3">
                  <h4 className="font-medium text-foreground">Package Includes:</h4>
                  {[
                    "Initial clinical consultation (60 min)",
                    "Complete microbiome sequencing",
                    "Inflammatory & digestive markers",
                    "Personalised report (20-30 pages)",
                    "Results consultation (60 min)",
                    "3-month follow-up appointment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-secondary/50 p-4">
                  <h4 className="font-medium text-foreground">Payment Information</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Direct payment accepted</li>
                    <li>• Receipts provided for insurance submission</li>
                    <li>• HSA/FSA eligible</li>
                    <li>• International payments accepted</li>
                  </ul>
                </div>

                <Button asChild size="lg" className="mt-8 w-full">
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Results typically available within 2-3 weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Questions About Our Services?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              We're happy to discuss whether microbiome analysis is appropriate 
              for your specific situation.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
