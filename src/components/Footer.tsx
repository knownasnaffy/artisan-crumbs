import Link from "next/link";
import { business } from "@/data/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant full-width bottom-0">
      <div className="flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Column 1 - Artisan Crumbs */}
          <div className="flex flex-col gap-4">
            <div className="font-headline-sm text-headline-sm text-on-surface">
              {business.name}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {business.tagline}
            </p>
            <div className="flex flex-col gap-1 mt-2 font-body-md text-body-md text-on-surface-variant">
              <p>{business.address.full}</p>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="font-title-md text-title-md text-on-surface font-semibold">Explore</h3>
            <div className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Home</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/menu">Menu</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/special-orders">Special Orders</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/gallery">Gallery</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/about">About</Link>
            </div>
          </div>

          {/* Column 3 - Help */}
          <div className="flex flex-col gap-4">
            <h3 className="font-title-md text-title-md text-on-surface font-semibold">Help</h3>
            <div className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/contact">Contact</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/refund-policy">Refund Policy</Link>
            </div>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-title-md text-title-md text-on-surface font-semibold">Follow Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                aria-disabled="true"
                title="Coming soon"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                aria-disabled="true"
                title="Coming soon"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-outline-variant/50">
          <p className="font-body-sm text-body-sm text-on-surface-variant/80 text-center md:text-left">
            ⚠️ Allergen Notice: Our kitchen handles nuts, gluten, dairy, and eggs. While we accommodate many dietary needs, we cannot guarantee a fully allergen-free environment. Always inform us of severe allergies at the time of ordering.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-outline-variant/50 gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant">
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
