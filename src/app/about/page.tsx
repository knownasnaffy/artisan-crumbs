import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { founderStory, milestones, values } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Story | Artisan Crumbs",
  description: "Meet the team behind Artisan Crumbs — a family-run bakery committed to organic ingredients, handcrafted technique, and unforgettable celebration cakes.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* Hero & Founder Story Section */}
      <section className="py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low -z-10"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden custom-shadow-2">
              <Image
                src={founderStory.image}
                alt={`${founderStory.name}, ${founderStory.title} in the bakery`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-headline-sm text-headline-sm mb-1">{founderStory.name}</p>
                <p className="font-label-md text-label-md uppercase tracking-wider opacity-90">{founderStory.title}</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block">Our Story</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                From a single mixer to your sweetest celebrations.
              </h1>
              <div className="w-16 h-1 bg-primary-container rounded-full"></div>

              <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-4">
                {founderStory.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              Every creation that leaves our kitchen is built on a foundation of quality, care, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 custom-shadow-1 hover:custom-shadow-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
                  {/* Simplistic icon mapping based on index for demo purposes */}
                  <span className="material-symbols-outlined text-primary">
                    {index === 0 ? "eco" : index === 1 ? "bakery_dining" : index === 2 ? "volunteer_activism" : "group"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{value.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Timeline Section */}
      <section className="py-section-gap bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-outline-variant/30 ml-3 md:ml-6 space-y-12 pb-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute w-6 h-6 bg-primary-container rounded-full border-4 border-background -left-[13px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="font-headline-sm text-headline-sm text-primary shrink-0">{milestone.year}</span>
                    <span className="font-body-lg text-body-lg text-on-surface-variant pt-1 sm:pt-0">{milestone.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-headline-md md:text-display-lg mb-6">Ready to work with us?</h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 opacity-90">
            Let&apos;s start designing the perfect sweets for your next special occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/special-orders"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all"
            >
              Start Custom Order
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
