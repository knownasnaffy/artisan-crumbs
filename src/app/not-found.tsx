import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Artisan Crumbs",
  description: "We couldn't find the page you were looking for.",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-background px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="max-w-xl text-center">
        <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">
          404 Error
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
          We couldn&apos;t find that page
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-95 text-center"
          >
            Return Home
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-95 text-center"
          >
            Explore Menu
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all active:scale-95 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
