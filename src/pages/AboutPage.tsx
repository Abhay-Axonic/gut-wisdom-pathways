import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  ArrowRight,
  Stethoscope,
  Microscope,
  GraduationCap,
  Award,
  CheckCircle2,
  Heart,
  Target,
  Scale,
} from "lucide-react";

const teamMembers = [
  {
    name: "Prof. Abhay Chopada, MS, FRCS",
    role: "Consultant Gastrointestinal Surgeon",
    icon: Stethoscope,
    credentials: [
      "Fellowship of the Royal College of Surgeons",
      "International Envoy, Symbiosis University",
      "Author: AI and Medical Education",
      "25+ years clinical experience",
    ],
    bio: "Prof. Chopada brings extensive expertise in gastrointestinal surgery and a passion for integrating cutting-edge research with clinical practice. His work focuses on bridging the gap between emerging microbiome science and practical patient care.",
  },
  {
    name: "Dr. Rashmi Kulkarni",
    role: "Microbiome Specialist",
    icon: Microscope,
    credentials: [
      "Specialist in gut microbiome analysis",
      "Evidence-based intervention expertise",
      "Clinical research background",
      "Patient-centred care approach",
    ],
    bio: "Dr. Kulkarni specialises in interpreting complex microbiome data and translating research findings into actionable health recommendations. Her approach combines scientific rigour with compassionate patient care.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centred",
    description: "Every recommendation is tailored to your individual health context and goals.",
  },
  {
    icon: Scale,
    title: "Ethical Practice",
    description: "We never sell supplements or products. Our only interest is your health.",
  },
  {
    icon: Target,
    title: "Evidence-Based",
    description: "All recommendations grounded in peer-reviewed research with transparent limitations.",
  },
  {
    icon: GraduationCap,
    title: "Research Contribution",
    description: "We contribute to advancing microbiome science through clinical research.",
  },
];

const standards = [
  "All testing supervised by qualified healthcare professionals",
  "CLIA-certified laboratory partnerships with rigorous quality control",
  "Transparent communication about evidence and limitations",
  "No supplement sales or conflicts of interest",
  "Mandatory medical consultation before and after testing",
  "Integration with and support of your existing medical care",
  "HIPAA/GDPR compliant data handling",
  "Professional indemnity insurance",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              About Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the Microbiome Clinic
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A specialist-led practice dedicated to evidence-based microbiome analysis, 
              integrating cutting-edge research with compassionate patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
              <Award className="h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                To provide evidence-based microbiome analysis that complements conventional 
                medical care, while contributing to the scientific understanding of the 
                gut-health connection through rigorous clinical research.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe in complete transparency about both the promise and current 
                limitations of microbiome science. Our role is not to replace your 
                existing healthcare, but to provide additional insights that may support 
                your health optimisation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Team"
            title="Specialist Clinicians"
            description="Your care is led by experienced healthcare professionals with expertise in gastroenterology and microbiome science."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <member.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-muted-foreground">{member.bio}</p>
                  <div className="mt-6">
                    <h4 className="font-medium text-foreground">Credentials</h4>
                    <ul className="mt-3 space-y-2">
                      {member.credentials.map((credential) => (
                        <li key={credential} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="The principles that guide every aspect of our practice."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Our Standards"
              title="Commitment to Excellence"
              description="We adhere to the highest standards of ethical and professional practice."
            />

            <Card>
              <CardContent className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {standards.map((standard) => (
                    <div key={standard} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="rounded-2xl clinical-gradient p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to Learn More?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Schedule a consultation to discuss your health goals and learn how 
              microbiome analysis might support your journey.
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
