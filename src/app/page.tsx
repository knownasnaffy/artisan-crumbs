export default function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row items-center gap-gutter">
          <div className="flex-1 space-y-6 z-10">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-xl">
              Handcrafted Sweets for Every Occasion
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Experience the warmth of our ovens. From rustic sourdough to delicate morning pastries, every bite is a celebration of artisanal tradition and organic ingredients.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-95">
                Order Now
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all active:scale-95">
                Explore Menu
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden custom-shadow-2 border border-outline-variant/20">
              <img
                alt="Assorted Pastries"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR_S5drgehk3q-MhUn-FxclAUGsRvL11kXZC5cgIJUl-tUaIrImkB-BvB0uefmxV4ZuizXRBtzg4ldM5AJQYPoLo-kDBBoWfoBoQv970OfqsjWFe17UsaizQkm9rghdJwqhyDYPd04nmIUlX4vYyupjrYjvjnWxPSUGj2KCAJiA2BdPQVrS1nZnKe4mAextlDRJG-0Kp0SFhw-pJ7HBGXwUBDBUO6UF3hFZmf3yohYoVRC-rDYcxeCTfom0zKhrpdoKCZILRyOn4I"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container text-on-secondary-container p-6 rounded-xl hidden md:block custom-shadow-1">
              <span className="font-label-md text-label-md uppercase tracking-widest block mb-1">Daily Fresh</span>
              <span className="font-headline-sm text-headline-sm">Baked at 5:00 AM</span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <span className="material-symbols-outlined text-primary/30 text-4xl">grain</span>
      </div>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Best Sellers</h2>
          <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 border border-outline-variant/10 hover:custom-shadow-2 transition-all">
            <div className="aspect-square overflow-hidden relative">
              <img
                alt="Classic Vanilla Cupcake"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOu0EHJJ6p8S-XmOrdS39znLCeluAQ4CNYdASX5M5tIZW6z8pOaSHRpdx8JYkV4C4D4fkBaeajP9fu5NJ4LN6I7AtE5tbjP_0VltAD7Qywbu28lLTpb4RD6J4eAXdtBYN_ORcxL1pdwk_9TSTHNvx6AVlm8Fh3amaLJ6i-Fk0RKO4f8Qxwp0EISn-XX4D6ioLzAWihUMf5kFfFJkz0tOyWgoBk7XXaGvjpHU6xo5ttHDpUPZOoChx0fU_XC_PKqoLknQGhxRjsSJ4"
              />
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-tighter">Best Seller</div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Classic Vanilla Cupcake</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Madagascar bourbon vanilla sponge with whipped bean frosting.</p>
              <span className="font-label-md text-label-md text-primary font-bold text-lg">$4.50</span>
            </div>
          </div>

          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 border border-outline-variant/10 hover:custom-shadow-2 transition-all md:translate-y-8">
            <div className="aspect-square overflow-hidden relative">
              <img
                alt="Strawberry Dream Cake"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4qojJ1ytQjJZAVeBtiWB35oJbio8QIx3HAk0e1oy4MYxVbcqefO-KQJMLVVgnF3hTkZHI3IFuzM1SF0R6uWGF_t0cgWogOeB-zy4xZicvU71nWcKSB9bX7V3TPe3FfY3eLzCaBPjeEUkEbrJbhT_N4eqKb4OtXIKW0JgsD2Bd4aAvK59p8Hf9-m_jm1L4MFrJPOGnYuJka9XE9IxQsxFHgmkDD5qoLn2utFVDi28qoekT6RKWHdL0kLzwADCeyqiM-flQySi9gNc"
              />
              <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-tighter">Organic</div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Strawberry Dream Cake</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Fresh local strawberries layered with light-as-air chiffon.</p>
              <span className="font-label-md text-label-md text-primary font-bold text-lg">$38.00</span>
            </div>
          </div>

          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 border border-outline-variant/10 hover:custom-shadow-2 transition-all">
            <div className="aspect-square overflow-hidden relative">
              <img
                alt="Velvet Chocolate Bliss"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfvT0cEoFIyfY8iArz7-1wCvT36Yr37KQ-zKFIvjHVhiVbuEO-uDURmI6x4h8DrOv8QhAOhUwi0noJ2Fx5Zhxj3DzP39EkjRMTfAFEnj4xgDfkK4lqLF2-BHHMet_WUc9gL6HEEPd0vT1OoOa4q1Ey5BPertnNJePYmnTpn9RHVtzRW55SmMOll7ohIL9CRWYNfZpjXnnOUWhItxq9eu0_S1YUZD3l2GOWM1jDfIZuZ3kcx-dEwGGP1sqA7-4mIIn7PDME89re9A"
              />
              <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-tighter">Seasonal</div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Velvet Chocolate Bliss</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">70% dark Belgian cocoa with a silky smooth ganache center.</p>
              <span className="font-label-md text-label-md text-primary font-bold text-lg">$6.50</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap mt-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-container rounded-full mix-blend-multiply opacity-30"></div>
              <img
                alt="Our Baker"
                className="w-full rounded-2xl custom-shadow-2 relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRZkQ19tl2h0mYreXxmMcMJpdJOfSvxUBFv3WfsDURRe2JoZFt6Dv3ASgKBM0FNaj6dgmKR_SM3hPiTRS7GD0Tg9RqnFX9yfTiIIkuicvZpehz0BkmxCBgXo5Y28HfUTMbnJxZLg7jYdBGm00nR-bKMzd75aox0UdxwVPsl5obn_dDJj3DoVHkWpKDUVsavn4B0jEnx4pzWynt-27Ztsvkvw14jerwJKHGKbAOVla_3QBu7Fjek3nqvuoa3e_6KW-P8GnZH8T337Q"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined">eco</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">Our Commitment</span>
            </div>
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-primary">Baked with Intent and Organic Love</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              At Artisan Crumbs, we believe the best flavor comes from the simplest, most honest ingredients. We partner with local farmers to source 100% organic flour, pasture-raised eggs, and seasonal fruits.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our slow-fermentation process takes 24 hours, ensuring every loaf and pastry has the complex depth of flavor and airy texture that only time can create. No shortcuts, no artificial additives—just pure, handcrafted joy.
            </p>
            <div className="pt-4">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 transition-all active:scale-95">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="material-symbols-outlined text-primary-container text-6xl opacity-50">format_quote</span>
          <blockquote className="font-headline-md text-headline-md text-on-surface italic leading-relaxed">
            &quot;The Strawberry Dream Cake was the centerpiece of my daughter&apos;s birthday. Not only was it beautiful, but the flavor was light, fresh, and genuinely the best cake we&apos;ve ever tasted. Artisan Crumbs is our new family tradition.&quot;
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden custom-shadow-1 border-2 border-primary-container">
              <img
                alt="Customer Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOLCI0mODXllKGYIuZOZ_9hgsiPL1oA2mb_zA9d-tIR7Mdd7EXNxYQhC6mQAs6GBIao8sDKTngy5j_zNQFJnMl_jdtwuk82pI27CW-q3Y3DDRkeC-IxTeJ8nsaoQ_Ajgqpg8VgYoMqS8p7fh-3M0wRGXpWAM4N3R806hnUzq7FZim1x66WNSTc6Kp5Lhx5ECNJSUXRgPKmCMgROEh3sIv7BlNyLLV3JaY-7YRYQT1BD7GgzBH8279kXWX5g8aCQ3CNSYOO2ettHkk"
              />
            </div>
            <div>
              <cite className="font-label-md text-label-md text-primary font-bold not-italic">Sarah J. Jenkins</cite>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Loyal Customer since 2021</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
