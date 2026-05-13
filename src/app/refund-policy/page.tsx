import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Artisan Crumbs",
  description: "Read our cancellation and refund policy for custom orders and events.",
};

export default function RefundPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main id="main-content" className="bg-background min-h-[70vh] py-section-gap">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl custom-shadow-1 border border-outline-variant/10">
          <div className="mb-10 text-center">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
              Refund Policy
            </h1>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
              Last updated: January 1, {currentYear}
            </p>
          </div>

          <div className="prose prose-stone max-w-none prose-headings:font-headline-sm prose-headings:text-primary prose-p:font-body-md prose-p:text-on-surface-variant prose-p:leading-relaxed">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4 mt-8">Cancellation & Refund Policy</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Orders cancelled more than 7 days before the event receive a full refund minus the 50% deposit. Orders cancelled within 7 days are non-refundable. We will always try to reschedule where possible.
            </p>

            <h2 className="font-headline-sm text-headline-sm text-primary mb-4 mt-8">Deposits</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              A 50% non-refundable deposit is required to secure your order and date. This deposit covers the initial cost of ingredients and design planning, and blocks out time in our schedule.
            </p>

            <h2 className="font-headline-sm text-headline-sm text-primary mb-4 mt-8">Rescheduling</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              If you need to change the date of your event, please contact us as soon as possible. If the request is made more than 7 days prior to the original date, we will transfer your deposit to the new date, subject to availability.
            </p>

            <h2 className="font-headline-sm text-headline-sm text-primary mb-4 mt-8">Dissatisfaction</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              If you are dissatisfied with your order for any reason, please return the uneaten portion within 24 hours. We will assess the item and, if we determine it does not meet our standards, we will offer a replacement or a partial refund at our discretion. Refunds will not be issued for flavor preferences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
