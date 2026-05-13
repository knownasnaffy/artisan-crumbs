"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close nav on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // Trap focus when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Special Orders", href: "/special-orders" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-surface-container-lowest shadow-sm docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link href="/" className="font-headline-md text-headline-sm md:text-headline-md text-primary hover:opacity-80 transition-opacity">
          Artisan Crumbs
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95 border-b-2 border-transparent hover:border-primary py-1"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/special-orders"
            className="inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 hover:opacity-90 transition-all cursor-pointer active:scale-95"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-primary p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-surface-container-lowest shadow-lg flex flex-col p-6 animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end mb-8">
              <button
                className="text-primary p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-on-surface text-title-md font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  href="/special-orders"
                  className="inline-block w-full text-center bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:opacity-90 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
