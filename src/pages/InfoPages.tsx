import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/shared/Seo";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/config/site";

const contactLine = (
  <>
    contact us on <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a> or{" "}
    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
  </>
);

export function PrivacyPage() {
  return (
    <Layout>
      <Seo path="/privacy" breadcrumbs={[{ name: "Privacy", path: "/privacy" }]} />
      <PageHero eyebrow="Privacy" title="Privacy information" />
      <article className="container prose-clinic max-w-3xl py-12">
        <p>Our full privacy notice is being finalised. This page explains how the website itself handles your information today.</p>
        <h2>Consultation requests</h2>
        <p>When you send a request we receive your name, contact details, contact and appointment preferences, any short message you add, and whether you opted in to updates. We use this only to respond to your request. Please do not send medical information through the website.</p>
        <h2>Analytics and cookies</h2>
        <p>This website does not use advertising trackers. Analytics are not currently enabled; if that changes, they will only run with your consent.</p>
        <h2>Your rights</h2>
        <p>To ask what information we hold about you, or to ask us to correct or delete it, please {contactLine}.</p>
      </article>
    </Layout>
  );
}

export function TermsPage() {
  return (
    <Layout>
      <Seo path="/terms" breadcrumbs={[{ name: "Terms", path: "/terms" }]} />
      <PageHero eyebrow="Terms" title="Terms and cancellations" />
      <article className="container prose-clinic max-w-3xl py-12">
        <p>Our full appointment terms and cancellation policy are being finalised. Before any appointment is confirmed, we will tell you the fee, what it includes and the cancellation terms that apply, so you can decide with full information.</p>
        <h2>Use of this website</h2>
        <p>Information on this website is general and is not a substitute for advice from a doctor who has assessed you.</p>
        <p>Questions? Please {contactLine}.</p>
      </article>
    </Layout>
  );
}

export function AccessibilityPage() {
  return (
    <Layout>
      <Seo path="/accessibility" breadcrumbs={[{ name: "Accessibility", path: "/accessibility" }]} />
      <PageHero eyebrow="Accessibility" title="Accessibility" />
      <article className="container prose-clinic max-w-3xl py-12">
        <p>We want everyone to be able to use this website. It has been designed to:</p>
        <ul>
          <li>work with a keyboard, with visible focus and a “skip to content” link;</li>
          <li>use readable text with strong colour contrast;</li>
          <li>label every form field and announce errors to screen readers;</li>
          <li>reduce motion when your device asks for it.</li>
        </ul>
        <p>If you find something difficult to use, or need information in another format, please {contactLine}. You can also <Link to="/contact">request a consultation</Link> by telephone.</p>
      </article>
    </Layout>
  );
}
