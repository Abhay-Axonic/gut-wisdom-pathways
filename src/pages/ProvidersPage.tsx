import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileText,
  Users,
  Handshake,
  Phone,
} from "lucide-react";

const collaborativeFeatures = [
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Detailed reports with clinical context designed for healthcare professional review.",
  },
  {
    icon: Users,
    title: "Direct Communication",
    description: "We're available to discuss findings with referring providers when needed.",
  },
  {
    icon: Handshake,
    title: "Coordinated Care",
    description: "Recommendations designed to complement, not replace, your treatment plan.",
  },
];

const appropriateReferrals = [
  "Patients with GI conditions seeking complementary insights to standard care",
  "Metabolic syndrome patients interested in lifestyle optimisation support",
  "Post-FMT monitoring and follow-up assessment",
  "Patients enrolled in or considering research study participation",
  "Patients with recurrent antibiotic-associated symptoms",
];

const notAppropriateReferrals = [
  "Replacement for standard diagnostic workup",
  "Acute medical conditions requiring immediate care",
  "Patients unwilling to continue conventional medical care",
  "Seeking definitive diagnosis of gastrointestinal disease",
  "Patients expecting microbiome testing to replace colonoscopy or other investigations",
];

export default function ProvidersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              For Healthcare Providers
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Collaborative Care Model
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We work alongside your existing care team, providing complementary 
              microbiome insights while supporting your treatment goals.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Partnership"
            title="How We Work With You"
            description="Our service is designed to enhance, not replace, your patient care."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {collaborativeFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  What Providers Receive
                </h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Detailed clinical report with methodology",
                    "Evidence-based interpretation of findings",
                    "Recommendations with cited research",
                    "Clear limitations and caveats",
                    "Follow-up availability for questions",
                    "Research protocol opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Guidelines */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Referral Guidelines"
            title="When to Consider Referral"
            description="Clear guidance on appropriate and inappropriate referrals."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <CardTitle>Appropriate Referrals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {appropriateReferrals.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <CardTitle>Not Appropriate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notAppropriateReferrals.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evidence Commitment */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card className="border-border">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-foreground">
                  Our Evidence Commitment
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We recognise that the December 2024 international consensus 
                  (The Lancet Gastroenterology & Hepatology) concluded there is 
                  insufficient evidence to recommend routine use of microbiome 
                  testing in clinical practice widely.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We share this information with all patients and position our 
                  service as research-informed health optimisation, not diagnostic 
                  testing. All recommendations are evidence-based with clear 
                  communication about confidence levels.
                </p>
                <div className="mt-6 rounded-lg bg-accent/50 p-4">
                  <p className="text-sm text-foreground font-medium">
                    We maintain no conflicts of interest. We do not sell supplements 
                    or products based on test results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Research Collaboration
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join Our Research Efforts
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're committed to advancing the evidence base. If you're interested 
              in research collaboration or have patients who may benefit from 
              participating in clinical studies, we'd welcome the conversation.
            </p>
            <Button asChild className="mt-8">
              <Link to="/contact">
                Discuss Research Collaboration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Provider Contact */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <Phone className="mx-auto h-12 w-12 text-primary-foreground/80" />
            <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Provider Hotline
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              For healthcare provider enquiries, patient discussions, or to 
              request clinical documentation.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-primary-foreground">
                providers@microbiomeclinic.com
              </p>
            </div>
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
