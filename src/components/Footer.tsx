import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant full-width bottom-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap gap-gutter">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-headline-sm text-headline-sm text-on-surface">
            Artisan Crumbs
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            © 2024 Artisan Crumbs Bakery. Handcrafted with love and organic flour.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all transition-opacity duration-200 hover:opacity-80"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all transition-opacity duration-200 hover:opacity-80"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all transition-opacity duration-200 hover:opacity-80"
            href="/shipping"
          >
            Shipping Info
          </Link>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
            Notebook
          </span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
            camera_enhance
          </span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
            location_on
          </span>
        </div>
      </div>
    </footer>
  );
}
