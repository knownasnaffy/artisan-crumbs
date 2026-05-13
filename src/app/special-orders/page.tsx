export default function SpecialOrders() {
  return (
    <main>
      <section className="relative w-full h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Wedding Cake"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_72pzpnJts2SFMp07pcmPFtkuHCG2iCqcyYa3GSWhiBoy4LkuNFm127HYuPzVJ5Bwab0hkf_7k7nyOd6oNlq6ZgRjAckTFa9W_TPn0dYXWXH3T_LOh9bCsy2gEB8bwVWv89AGRoI6Mk-Yaug8uBhhCuwAWE8euWtP1YcAnLhpu_xlmIPKvu9m8aHfB-SAzt_ekTFkYfne8qJFNGY4qlcS-ulneywn8N59yNx6jgpqn_br_26CKS7FONPq5czZ1uu5smj-hjWmDY"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl bg-surface-container-lowest/90 backdrop-blur-md p-8 md:p-12 rounded-xl custom-shadow-1 border border-outline-variant/10">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">Bespoke Creations</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Your Vision, Handcrafted with Heart.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">From intimate weddings to grand celebrations, we create artisanal cakes and pastries tailored perfectly to your unique story.</p>
            <a
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-95"
              href="#inquiry-form"
            >
              Start Your Custom Order
            </a>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">The Artisan Journey</h2>
          <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="group p-8 rounded-xl bg-surface-container-low border border-outline-variant/20 custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
            </div>
            <span className="font-label-md text-label-md text-primary mb-2 block uppercase">Step 01</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Consultation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We begin with a personal chat to understand your theme, flavor preferences, and event guest count.</p>
          </div>

          <div className="group p-8 rounded-xl bg-surface-container-low border border-outline-variant/20 custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">draw</span>
            </div>
            <span className="font-label-md text-label-md text-secondary mb-2 block uppercase">Step 02</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Design &amp; Tasting</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Our pastry chefs sketch your design and invite you for a curated tasting of our signature organic fillings.</p>
          </div>

          <div className="group p-8 rounded-xl bg-surface-container-low border border-outline-variant/20 custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-tertiary text-3xl">local_shipping</span>
            </div>
            <span className="font-label-md text-label-md text-tertiary mb-2 block uppercase">Step 03</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Delivery</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We meticulously bake, decorate, and hand-deliver your masterpiece to ensure it arrives perfectly.</p>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-lowest" id="inquiry-form">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="font-display-lg text-headline-md md:text-display-lg text-primary mb-6">Let&apos;s Bake Something Beautiful</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Whether it&apos;s a dreamy tiered wedding cake or a whimsical birthday spread, our team is ready to bring your imagination to life. Fill out the details and we&apos;ll reach out within 48 hours to start the magic.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">call</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Call Us</p>
                      <p className="font-body-md text-on-surface">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Visit the Studio</p>
                      <p className="font-body-md text-on-surface">123 Baker&apos;s Lane, Flourish City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl custom-shadow-1 border border-outline-variant/10">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface mb-2 block">Name</label>
                    <input
                      className="w-full bg-surface-container-low border-outline-variant/50 focus:border-secondary focus:ring-secondary rounded-lg font-body-md text-body-md p-3 transition-colors"
                      placeholder="Your Full Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface mb-2 block">Email</label>
                    <input
                      className="w-full bg-surface-container-low border-outline-variant/50 focus:border-secondary focus:ring-secondary rounded-lg font-body-md text-body-md p-3 transition-colors"
                      placeholder="hello@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface mb-2 block">Event Date</label>
                    <input
                      className="w-full bg-surface-container-low border-outline-variant/50 focus:border-secondary focus:ring-secondary rounded-lg font-body-md text-body-md p-3 transition-colors"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface mb-2 block">Type of Event</label>
                    <select className="w-full bg-surface-container-low border-outline-variant/50 focus:border-secondary focus:ring-secondary rounded-lg font-body-md text-body-md p-3 transition-colors">
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Corporate</option>
                      <option>Other Celebration</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface mb-2 block">Tell us your dream cake details</label>
                  <textarea
                    className="w-full bg-surface-container-low border-outline-variant/50 focus:border-secondary focus:ring-secondary rounded-lg font-body-md text-body-md p-3 transition-colors"
                    placeholder="Share your colors, flavors, and inspiration..."
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-sm text-headline-sm custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-[0.98]"
                  type="submit"
                >
                  Send My Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
