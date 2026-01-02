import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Users,
  FlaskConical,
  GraduationCap,
} from "lucide-react";

const researchCommitments = [
  {
    icon: FlaskConical,
    title: "Clinical Outcome Studies",
    description: "Tracking patient outcomes to contribute real-world evidence to the field.",
  },
  {
    icon: GraduationCap,
    title: "Academic Collaborations",
    description: "Partnering with universities for rigorous clinical validation studies.",
  },
  {
    icon: FileText,
    title: "Peer-Reviewed Publications",
    description: "Publishing our findings to advance scientific understanding.",
  },
  {
    icon: Users,
    title: "Conference Presentations",
    description: "Sharing insights with the global gastroenterology community.",
  },
];

export default function ResearchPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Research & Publications
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Advancing Microbiome Science
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're committed to contributing to the evidence base through rigorous 
              clinical research and academic collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Commitment"
            title="Contributing to the Evidence"
            description="Rather than just consuming microbiome research, we aim to advance it."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchCommitments.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <item.icon className="h-7 w-7 text-primary" />
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

      {/* Current Protocols */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Current Research"
              title="Active Research Protocols"
            />

            <Card>
              <CardContent className="p-8 text-center">
                <FlaskConical className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Research Protocols in Development
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We are currently developing our research programme and establishing 
                  academic partnerships. Details of active protocols will be shared 
                  here once ethics approval is obtained.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  If you're interested in research collaboration or patient participation, 
                  please contact us.
                </p>
                <Button asChild className="mt-6">
                  <Link to="/contact">
                    Enquire About Research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Publications"
              title="Publications & Presentations"
            />

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Team Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <p className="font-medium text-foreground">
                      AI and Medical Education
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Prof. Abhay Chopada — Book publication exploring the intersection 
                      of artificial intelligence and medical training.
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground italic">
                      Additional publications will be listed as our research programme 
                      develops. Our focus is on contributing high-quality, peer-reviewed 
                      evidence to the field.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Collaboration
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Academic Partnerships
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're actively seeking partnerships with academic institutions for 
              clinical validation studies. If your institution is interested in 
              microbiome research collaboration, we'd welcome the conversation.
            </p>
            <div className="mt-8 inline-block rounded-lg border border-border bg-card p-6">
              <GraduationCap className="mx-auto h-10 w-10 text-primary" />
              <p className="mt-4 font-medium text-foreground">
                International Envoy, Symbiosis University
              </p>
              <p className="text-sm text-muted-foreground">
                Prof. Chopada maintains academic connections supporting our research goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <FlaskConical className="mx-auto h-12 w-12 text-primary-foreground/80" />
            <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Interested in Collaboration?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Whether you're a researcher, institution, or potential study participant, 
              we'd love to hear from you.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
