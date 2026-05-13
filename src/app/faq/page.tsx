import { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Artisan Crumbs",
  description: "Answers to the most common questions about ordering custom cakes, lead times, dietary accommodations, delivery, and more.",
};

export default function FAQPage() {
  return (
    <main id="main-content" className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-section-gap relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-surface-container-low -z-10"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-4">
            Help & Information
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-primary-container mx-auto rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to know about our handcrafted sweets, ordering process, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-section-gap">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/20 custom-shadow-1 overflow-hidden"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6 font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {faq.question}
                <span className="material-symbols-outlined text-primary/70 transform group-open:rotate-180 transition-transform duration-300">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <div className="w-full h-[1px] bg-outline-variant/10 mb-4"></div>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md mb-6">Still have questions?</h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 opacity-90">
            If you didn&apos;t find what you were looking for, please reach out to our team.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
