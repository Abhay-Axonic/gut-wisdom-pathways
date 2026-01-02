import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "Will this diagnose my condition?",
        answer:
          "No. Microbiome testing is not diagnostic. It provides complementary information to support your existing medical care. We cannot diagnose diseases based on microbiome analysis, and results should never replace proper medical investigation by your doctor.",
      },
      {
        question: "Can I use this instead of seeing my doctor?",
        answer:
          "Absolutely not. Our service requires ongoing medical supervision and works alongside conventional healthcare. Microbiome analysis is meant to complement, not replace, standard medical care. We require that all patients maintain their relationship with their primary care provider or specialist.",
      },
      {
        question: "How accurate are the tests?",
        answer:
          "The laboratory analysis is technically accurate—we use validated metagenomic sequencing in CLIA-certified laboratories. However, clinical interpretation has limitations. Current evidence doesn't support many health claims made by commercial testing companies, and what constitutes a 'normal' microbiome is still being defined.",
      },
      {
        question: "What conditions can microbiome testing help with?",
        answer:
          "Evidence varies significantly by condition. The strongest evidence exists for recurrent C. difficile infection (where FMT is FDA-approved). Emerging evidence exists for IBD monitoring, and observational data links microbiome changes to metabolic conditions. However, for most conditions including IBS, expert consensus is that testing is not currently helpful outside research settings.",
      },
    ],
  },
  {
    title: "About Our Practice",
    faqs: [
      {
        question: "Will you recommend supplements?",
        answer:
          "We provide evidence-based dietary and lifestyle recommendations only. We do not sell supplements, probiotics, or any products—this avoids conflicts of interest that affect many commercial microbiome testing companies. If we believe a specific intervention may help, we'll provide the evidence and you can discuss options with your doctor.",
      },
      {
        question: "Is this regulated?",
        answer:
          "Currently, most microbiome testing services are not specifically regulated as medical devices in the UK or USA. We voluntarily adhere to the highest laboratory standards (CLIA certification) and ethical clinical practice. All consultations are provided by registered healthcare professionals.",
      },
      {
        question: "Who provides the consultations?",
        answer:
          "Consultations are provided by Prof. Abhay Chopada (Consultant GI Surgeon, FRCS) and Dr. Rashmi Kulkarni (Microbiome Specialist). Both are registered healthcare professionals with relevant expertise.",
      },
      {
        question: "How do you handle my data?",
        answer:
          "We are HIPAA and GDPR compliant. Your data is handled securely, never shared without consent, and you maintain control over your information. Samples are destroyed after analysis unless you specifically consent to research use.",
      },
    ],
  },
  {
    title: "The Testing Process",
    faqs: [
      {
        question: "What does the testing process involve?",
        answer:
          "The process includes: 1) Initial 60-minute consultation to assess suitability and obtain consent, 2) Home sample collection with our provided kit, 3) Laboratory analysis using metagenomic sequencing, and 4) Results consultation with personalised recommendations. We also include a 3-month follow-up appointment.",
      },
      {
        question: "How long do results take?",
        answer:
          "Results are typically available within 2-3 weeks after your sample reaches the laboratory. We'll schedule your results consultation as soon as your report is ready.",
      },
      {
        question: "What if my results are 'abnormal'?",
        answer:
          "There is no universally defined 'normal' microbiome—individual variation is high. We interpret your results in the context of your health history, symptoms, and goals. Any concerns are discussed with clear evidence levels, and we always recommend discussing significant findings with your primary care provider.",
      },
      {
        question: "Can I get testing without the consultations?",
        answer:
          "No. We believe responsible microbiome analysis requires proper clinical context and professional interpretation. The consultations are mandatory components of our service to ensure you receive appropriate care and understand the limitations of testing.",
      },
    ],
  },
  {
    title: "Pricing & Practical",
    faqs: [
      {
        question: "How much does it cost?",
        answer:
          "Please contact us for current pricing. Our comprehensive package includes initial consultation, complete testing, detailed report, results consultation, and 3-month follow-up. We accept direct payment and provide receipts for insurance submission where applicable.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "We provide receipts that you can submit to your insurance provider. Coverage varies by policy. Our services are HSA/FSA eligible in many cases. We recommend checking with your insurance provider before booking.",
      },
      {
        question: "Do you see international patients?",
        answer:
          "Yes. Virtual consultations are available, and sample collection can be arranged worldwide. We accept international payments and can provide multi-language support for consultations.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We request 48 hours notice for cancellation or rescheduling of consultations. Sample kit costs are non-refundable once shipped, but can be applied to a rescheduled appointment.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              FAQ
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Honest answers to common questions about microbiome testing, 
              our practice, and what you can expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className={categoryIndex > 0 ? "mt-12" : ""}>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're happy to discuss any aspect of our service or the evidence 
              base in more detail.
            </p>
            <Button asChild size="lg" className="mt-8">
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
