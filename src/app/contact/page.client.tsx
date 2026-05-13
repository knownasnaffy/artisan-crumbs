"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main id="main-content" className="bg-background">
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24 border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Let&apos;s Create Something Sweet Together</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you have a question about our menu, want to discuss a custom order, or just want to say hello, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Contact Details & Map (Left Column) */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 custom-shadow-1">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-1">Visit Us</h3>
                      <p className="font-body-md text-on-surface-variant">{business.address.street}</p>
                      <p className="font-body-md text-on-surface-variant">{business.address.city}, {business.address.state} {business.address.zip}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-1">Email</h3>
                      <a href={`mailto:${business.email}`} className="font-body-md text-primary hover:underline">{business.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-1">Phone</h3>
                      <a href={`tel:${business.phone.replace(/[^0-9]/g, '')}`} className="font-body-md text-primary hover:underline">{business.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-1">Hours</h3>
                      {business.hours.map((hour, idx) => (
                        <div key={idx} className="flex justify-between gap-4 font-body-md text-on-surface-variant mb-1">
                          <span>{hour.days}:</span>
                          <span>{hour.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 custom-shadow-1 overflow-hidden h-64 relative flex items-center justify-center">
                {/* Decorative map background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#71585b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 bg-surface-container-lowest/80 backdrop-blur-sm rounded-lg border border-outline-variant/30 custom-shadow-1">
                  <MapPin className="text-primary mb-2" size={32} />
                  <p className="font-label-md text-label-md text-on-surface">{business.address.street}</p>
                  <p className="font-body-sm text-on-surface-variant">{business.address.city}, {business.address.state}</p>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-2xl custom-shadow-1 border border-outline-variant/10 h-full">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-secondary text-4xl">check_circle</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Thanks for reaching out!</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                      We&apos;ve received your message and will reply to <span className="font-semibold">{formData.email}</span> within 1–2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
                      }}
                      className="mt-4 bg-surface-container-high text-on-surface px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-6">Send us a message</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="font-label-md text-label-md text-on-surface mb-2 block">Name *</label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none rounded-lg font-body-md text-body-md p-3 transition-colors"
                          placeholder="Your Full Name"
                          type="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="font-label-md text-label-md text-on-surface mb-2 block">Email *</label>
                        <input
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none rounded-lg font-body-md text-body-md p-3 transition-colors"
                          placeholder="hello@example.com"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="font-label-md text-label-md text-on-surface mb-2 block">Phone (Optional)</label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none rounded-lg font-body-md text-body-md p-3 transition-colors"
                          placeholder="(555) 123-4567"
                          type="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="font-label-md text-label-md text-on-surface mb-2 block">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none rounded-lg font-body-md text-body-md p-3 transition-colors"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Custom Order">Custom Order</option>
                          <option value="Wedding Cake">Wedding Cake</option>
                          <option value="Corporate Order">Corporate Order</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="font-label-md text-label-md text-on-surface mb-2 block">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none rounded-lg font-body-md text-body-md p-3 transition-colors"
                        placeholder="How can we help you?"
                        rows={6}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <section className="py-16 bg-surface border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Have a quick question?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            We might have already answered it. Check out our frequently asked questions about orders, delivery, and dietary options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              href="/faq"
              className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
