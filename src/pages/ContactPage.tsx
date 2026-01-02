import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Medical Center Drive", "London, UK"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 (0) 123 456 7890"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@microbiomeclinic.com", "providers@microbiomeclinic.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday – Friday: 9am – 5pm", "Saturday: By appointment"],
  },
];

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you're interested in a consultation, have questions about 
              our services, or want to discuss research collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                We typically respond within 1-2 business days.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Complete the form below and we'll be in touch soon.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* International Patients */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="International Patients"
              title="Worldwide Consultations"
              description="We welcome patients from around the world."
            />

            <Card>
              <CardContent className="p-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">Virtual Consultations</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Video consultations available in multiple time zones.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">Sample Collection</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Kits shipped worldwide with clear instructions.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">International Payments</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Multiple currencies and payment methods accepted.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-muted-foreground">
                  Interactive map placeholder — 123 Medical Center Drive, London
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
