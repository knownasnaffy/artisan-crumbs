import type { Metadata } from "next";

const collectionCategories = [
  {
    title: "Information you share",
    description:
      "Contact details, order requests, event notes, and any message you send through inquiry forms or direct outreach.",
    icon: "mail",
    accent: "bg-primary-container text-on-primary-container",
  },
  {
    title: "Order and payment records",
    description:
      "Order history, delivery preferences, and transaction details processed to fulfill purchases and support accounting needs.",
    icon: "receipt_long",
    accent: "bg-secondary-container text-on-secondary-container",
  },
  {
    title: "Website usage signals",
    description:
      "Basic device, browser, and interaction data used to keep the website secure, reliable, and easy to navigate.",
    icon: "monitoring",
    accent: "bg-tertiary-container text-on-tertiary-container",
  },
];

const privacyPractices = [
  {
    title: "How we use data",
    points: [
      "Prepare quotes, process orders, and coordinate pickups, deliveries, and special requests.",
      "Respond to questions, provide customer support, and share updates about active orders.",
      "Improve the website experience, protect against misuse, and maintain service quality.",
    ],
  },
  {
    title: "When we share data",
    points: [
      "With payment, delivery, and technology providers that help us run the bakery and website.",
      "When required by law or to protect the rights, safety, and property of Artisan Crumbs and our customers.",
      "We do not sell personal information or share it for unrelated third-party marketing.",
    ],
  },
  {
    title: "Your choices",
    points: [
      "Ask for access, corrections, or deletion of the information you have shared with us.",
      "Opt out of promotional emails at any time by following the unsubscribe instructions.",
      "Contact us if you want details about retention periods or how a request will affect open orders.",
    ],
  },
];

const safeguards = [
  "We limit access to personal information to team members and partners who need it to do their work.",
  "We use administrative, technical, and physical safeguards designed to protect data from loss, misuse, or unauthorized access.",
  "We keep records only for as long as needed to provide services, meet legal obligations, and resolve disputes.",
];

export const metadata: Metadata = {
  title: "Privacy Policy | Artisan Crumbs",
  description:
    "Learn how Artisan Crumbs collects, uses, and protects customer information across orders, inquiries, and website visits.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto flex max-w-container-max flex-col gap-10 px-margin-mobile md:px-margin-desktop lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-container px-4 py-2 font-label-md text-label-md uppercase tracking-widest text-on-primary-container">
              <span className="material-symbols-outlined text-base">shield_lock</span>
              Privacy Policy
            </span>
            <div className="space-y-4">
              <h1 className="font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
                Thoughtful privacy practices for every order and visit.
              </h1>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                We collect only the information we need to bake, deliver, and support your Artisan Crumbs experience. This page explains what we gather, how we use it, and the choices you have.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-6 custom-shadow-1 lg:max-w-sm">
            <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
              Effective date
            </p>
            <p className="mt-2 font-headline-sm text-headline-sm text-on-surface">
              May 13, 2026
            </p>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              If we make material updates, we will revise this page so you can quickly review what changed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <span className="material-symbols-outlined text-4xl text-primary/30">grain</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary">
              What we collect
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary-container"></div>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {collectionCategories.map((category) => (
              <article
                key={category.title}
                className="flex h-full flex-col rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 custom-shadow-1 transition-all hover:custom-shadow-2"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${category.accent}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {category.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {category.title}
                </h3>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {privacyPractices.map((practice, index) => (
              <article
                key={practice.title}
                className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 custom-shadow-1"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
                    <span className="font-label-md text-label-md">0{index + 1}</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    {practice.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {practice.points.map((point) => (
                    <li key={point} className="flex gap-3 font-body-md text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 text-secondary">
                        check_circle
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-outline-variant/20 bg-primary-container/30 p-8 custom-shadow-1">
              <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
                Security and retention
              </p>
              <div className="mt-6 space-y-5">
                {safeguards.map((safeguard) => (
                  <div key={safeguard} className="rounded-2xl bg-surface-container-lowest p-5">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {safeguard}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 custom-shadow-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                    Contact us
                  </p>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Questions about privacy?
                  </h2>
                </div>
              </div>
              <p className="mt-5 font-body-md text-body-md text-on-surface-variant">
                Reach out if you need help with a privacy request or want more information about how we handle customer data.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  className="flex items-center gap-3 rounded-2xl border border-outline-variant/20 bg-surface-container-low px-5 py-4 font-body-md text-body-md text-on-surface transition-colors hover:border-primary"
                  href="mailto:privacy@artisancrumbs.com"
                >
                  <span className="material-symbols-outlined text-primary">mail</span>
                  privacy@artisancrumbs.com
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-outline-variant/20 bg-surface-container-low px-5 py-4 font-body-md text-body-md text-on-surface transition-colors hover:border-primary"
                  href="tel:+15551234567"
                >
                  <span className="material-symbols-outlined text-primary">call</span>
                  (555) 123-4567
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
