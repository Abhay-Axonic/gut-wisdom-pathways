import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EvidenceDisclosure } from "@/components/shared/EvidenceDisclosure";
import {
  ArrowRight,
  Microscope,
  Stethoscope,
  FlaskConical,
  Users,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Activity,
  HeartPulse,
  Scale,
  Pill,
  Brain,
  Sparkles,
} from "lucide-react";

const conditionsWithEvidence = [
  {
    icon: Activity,
    title: "Inflammatory Bowel Disease",
    subtitle: "IBD / Crohn's / Ulcerative Colitis",
    evidence: "Strong Emerging",
    description: "Research shows >90% diagnostic accuracy using microbial biomarkers. Monitoring applications under active investigation.",
  },
  {
    icon: Brain,
    title: "Irritable Bowel Syndrome",
    subtitle: "IBS & Functional GI Disorders",
    evidence: "Emerging",
    description: "Studies correlate specific microbial patterns with IBS subtypes. Dietary interventions show promise for symptom management.",
  },
  {
    icon: Scale,
    title: "Metabolic Health",
    subtitle: "Obesity & Type 2 Diabetes",
    evidence: "Emerging",
    description: "Consistent links between reduced diversity and metabolic conditions. Lifestyle interventions supported by microbiome insights.",
  },
  {
    icon: Pill,
    title: "Post-Antibiotic Recovery",
    subtitle: "Gut Restoration",
    evidence: "Established",
    description: "FDA-approved microbiota therapies for recurrent C. difficile. Evidence supports monitoring recovery after antibiotic courses.",
  },
  {
    icon: HeartPulse,
    title: "Digestive Wellness",
    subtitle: "Bloating, Discomfort & Irregularity",
    evidence: "Supportive",
    description: "Functional markers and diversity analysis can guide dietary optimisation for common digestive complaints.",
  },
  {
    icon: Sparkles,
    title: "Health Optimisation",
    subtitle: "Preventive & Longevity Focus",
    evidence: "Exploratory",
    description: "Higher diversity correlates with better health outcomes. Personalised dietary guidance based on your unique microbiome.",
  },
];

const approachItems = [
  {
    icon: Stethoscope,
    title: "Clinician-Supervised",
    description: "All testing supervised by qualified healthcare professionals",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based",
    description: "Grounded in peer-reviewed research, transparent about limitations",
  },
  {
    icon: Users,
    title: "Integrated Care",
    description: "Works alongside your existing healthcare providers",
  },
  {
    icon: FlaskConical,
    title: "Research Contribution",
    description: "Contributing to clinical research to advance the field",
  },
];

const services = [
  {
    title: "Comprehensive Gut Analysis",
    description:
      "Complete metagenomic sequencing with bacterial diversity, functional pathways, and inflammatory markers.",
  },
  {
    title: "Clinical Consultation",
    description:
      "60-minute consultations with specialist clinicians before and after testing.",
  },
  {
    title: "Personalised Report",
    description:
      "20-30 page evidence-based report with actionable dietary and lifestyle recommendations.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-primary">Microbiome</span> Clinic
            </h1>
            <p className="mt-4 text-xl text-muted-foreground sm:text-2xl font-medium">
              Evidence-Based Gut Health Analysis
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Stethoscope className="h-5 w-5 text-primary" />
              <span className="text-base sm:text-lg">
                Led by Prof. Abhay Chopada (Consultant GI Surgeon) & Dr. Rashmi Kulkarni (Microbiome Specialist)
              </span>
            </div>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
              Research-informed microbiome analysis integrated with standard medical care. 
              Clinician-supervised testing with transparent, evidence-based guidance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/science">View the Evidence</Link>
              </Button>
            </div>
          </div>

          {/* Evidence Disclosure */}
          <div className="mx-auto mt-12 max-w-3xl">
            <EvidenceDisclosure />
          </div>
        </div>
      </section>

      {/* Conditions With Evidence */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Research Areas"
            title="Conditions Where Microbiome Science Shows Promise"
            description="Current research reveals meaningful connections between gut microbiome and these health areas. Evidence levels vary—we help you understand what the science actually shows."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditionsWithEvidence.map((condition) => (
              <Card key={condition.title} className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <condition.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      condition.evidence === "Strong Emerging" || condition.evidence === "Established"
                        ? "bg-primary/15 text-primary"
                        : condition.evidence === "Emerging"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {condition.evidence}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{condition.title}</h3>
                  <p className="text-sm text-primary/80">{condition.subtitle}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/science">
                Explore the Full Evidence Base
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Approach"
            title="Ethical, Research-Informed Practice"
            description="We believe in transparency about both the promise and limitations of microbiome science."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachItems.map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                Meet the Team
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Specialist Clinicians Leading Your Care
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Prof. Abhay Chopada, MS, FRCS
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Consultant Gastrointestinal Surgeon with extensive experience 
                      in digestive health and surgical innovation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Dr. Rashmi Kulkarni
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Microbiome Specialist with expertise in gut health analysis 
                      and evidence-based interventions.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8" variant="outline">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                      <Microscope className="h-12 w-12 text-primary" />
                    </div>
                    <p className="mt-6 text-lg font-medium text-foreground">
                      Clinical Excellence in Microbiome Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Microbiome Analysis"
            description="A complete service package designed for meaningful health insights."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/services">
                View Full Service Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Our Standards"
              title="What Sets Us Apart"
              description="We adhere to the highest standards of ethical practice in microbiome analysis."
            />

            <div className="mt-8 space-y-4">
              {[
                "All testing supervised by qualified healthcare professionals",
                "CLIA-certified laboratory partnerships",
                "Transparent evidence communication",
                "No supplement sales or conflicts of interest",
                "Mandatory medical consultation before and after testing",
                "Integration with existing medical care",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <BookOpen className="mx-auto h-12 w-12 text-primary-foreground/80" />
            <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to Explore Your Gut Health?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Schedule a consultation to discuss whether microbiome analysis 
              is right for your health journey.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Link to="/contact">
                Book Your Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
