import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout hideMobileCta>
      <Seo title="Contact and consultation requests" description={`Request a consultation with ${site.brandName}, London. Call ${site.contact.phoneDisplay} or send a short request online.`} path="/contact" breadcrumbs={[{ name: "Contact", path: "/contact" }]} />
      <PageHero eyebrow="Contact" title="Request a consultation">
        <p>Send a short request and we will contact you to arrange a time. You can also call or email us.</p>
      </PageHero>
      <section className="container grid gap-14 py-16 lg:grid-cols-[1.3fr_0.7fr]">
        <div id="request" className="scroll-mt-28">
          <h2 className="mb-8">Your details</h2>
          <ContactForm />
        </div>
        <aside className="space-y-8 lg:border-l lg:border-border lg:pl-12">
          <div className="flex gap-4">
            <Phone className="mt-1 h-5 w-5 text-accent" aria-hidden />
            <div><h2 className="text-lg">Telephone</h2><a href={site.contact.phoneHref} onClick={() => track("phone_click", "contact")} className="text-primary underline underline-offset-4">{site.contact.phoneDisplay}</a></div>
          </div>
          <div className="flex gap-4">
            <Mail className="mt-1 h-5 w-5 text-accent" aria-hidden />
            <div><h2 className="text-lg">Email</h2><a href={`mailto:${site.contact.email}`} onClick={() => track("email_click", "contact")} className="break-all text-primary underline underline-offset-4">{site.contact.email}</a></div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 h-5 w-5 text-accent" aria-hidden />
            <div>
              <h2 className="text-lg">Location</h2>
              <p className="text-muted-foreground">{site.brandName}, {site.operatorName}<br />{site.location.streetAddress && <>{site.location.streetAddress}<br /></>}{site.location.city}{site.location.postcode && ` ${site.location.postcode}`}</p>
            </div>
          </div>
          <p className="rounded-xl bg-muted/70 p-5 text-sm text-muted-foreground">
            This is not an emergency service. For urgent symptoms contact your GP or NHS 111, or call 999 in an emergency.
          </p>
        </aside>
      </section>
    </Layout>
  );
}
