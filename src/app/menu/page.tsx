export default function Menu() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Our Handcrafted Menu</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Explore our selection of artisanal treats, baked daily with organic ingredients and a dash of love.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-label-md text-label-md text-primary uppercase">Filter by Flavor:</span>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-label-md font-label-md">All</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary transition-colors text-label-md font-label-md">Chocolate</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary transition-colors text-label-md font-label-md">Fruit</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary transition-colors text-label-md font-label-md">Vanilla</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label-md text-label-md text-primary uppercase">Sort:</span>
          <select className="bg-surface-container-lowest border-outline-variant rounded-lg text-label-md font-label-md text-on-surface-variant focus:ring-secondary focus:border-secondary transition-all px-4 py-2">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <section className="mb-section-gap">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">Signature Cakes</h2>
          <div className="flex-grow h-px bg-outline-variant"></div>
          <span className="material-symbols-outlined text-primary">bakery_dining</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 border border-outline-variant/10 group">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Midnight Cocoa Cake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXTVlOiUJOqr3thJ2qpFM9o0a9FK2RO_Vx9S4y2vHZaXbhk_snoFeHaz-qMUXzGE77U-vFe45KbwqECrCIAvgRePrX6esDMWX1smn5cWf42ZxitkPai9rtqP_rUfNuQvMxcVb1qDgEx414D7nsCeEpdf3h2nzKQ-hipl-rOzJE-w3K8HwkC66S5m-6w2ot1-oOvm0BuU_JzIg75OmhdL0P07XshfAsfk7DL5jnwOyt67Zt_RkVaWv7HO4RE8g4n0ytRclvCCAxav4"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-md font-label-md uppercase tracking-wider">Best Seller</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Midnight Cocoa</h3>
                <span className="text-primary font-bold text-headline-sm">$48.00+</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-4">Deep Belgian chocolate sponge layered with ganache and fresh raspberry coulis.</p>
              <button className="w-full py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-container transition-colors">View Sizes</button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 border border-outline-variant/10 group">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Wildflower Vanilla Cake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7XynceepK4QhoJtdCNGEB3nE03BnKzxEBRgHw7W2IrxUJ5d7oXH8ZY5UaI4AVWxHKEqp9TWBGRmep97uhpsK2E_GO40EYLjMjdLe32hPCpHKDODNqatqLEumLxMKkOaUiTgsLwBcZbXWu2XIIqBcfEa3zT9dGcjjQx1EqxsOArXUPVoIU90H5QYXMkOVmMr0-k0lpuVt3C3PBzfje5flxGQHutrqAdQPeGoIGeNfg1lyDSbAtYQtfjBpV2mt7ZSPcAkZk69UvEa4"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Wildflower Vanilla</h3>
                <span className="text-primary font-bold text-headline-sm">$42.00+</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-4">Madagascar vanilla bean cake with honey-infused cream cheese frosting.</p>
              <button className="w-full py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-container transition-colors">View Sizes</button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl overflow-hidden custom-shadow-1 hover:custom-shadow-2 transition-all duration-300 border border-outline-variant/10 group">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Citrus Bloom Cake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnfIEt-ap6sSqe0CW1pS1MtKin6NxurVYNap4ykNKq3492KH8u8d6y-zz0VquI7uLMH3hxZqjWWKKu5bPyolZv7FHB3xDyhaMtOa04L2t055QZNPtAMOIiNzm42r1tIIXWSkcl1bmqA0U7Z4ztM2oM2cgRhaWjgQ-VoyYAy5flwxGO7UpZrRLhK7ohuIUtwXe0qZN40Dk0ZBAkLhjAi4n8T1Byga3kyrcfj7DZk4M7aC1Uwvoqse42UAPH-2PEpDLS6FILfbAAZH0"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Citrus Bloom</h3>
                <span className="text-primary font-bold text-headline-sm">$45.00+</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-4">Zesty lemon-soaked sponge with a light elderflower meringue frosting.</p>
              <button className="w-full py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-container transition-colors">View Sizes</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-gap">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">Daily Cupcakes</h2>
          <div className="flex-grow h-px bg-outline-variant"></div>
          <span className="material-symbols-outlined text-primary">Cake</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-primary-container/20 rounded-2xl p-8 flex flex-col justify-between border border-primary-container">
            <div>
              <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-label-md font-label-md uppercase mb-4 inline-block">Daily Special</span>
              <h3 className="font-display-lg text-headline-md text-primary mb-4">Salted Caramel Cloud</h3>
              <p className="font-body-lg text-on-surface-variant mb-6">Our most popular daily treat. Fluffy vanilla base with a gooey caramel core and sea salt topping.</p>
              <div className="text-headline-sm font-bold text-primary mb-8">$4.50 each / $48.00 dozen</div>
            </div>
            <div className="h-72 w-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Salted Caramel Cupcake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDeUVHDy5ldKUcfuXLUnhDEp87i-vl4Ju-P1E7duaQNlRLRaieToRojWxZEwQViw3RPFgDsAPFNMi5PajCv-WD1LLjRNxH2o9pprejU8zUvJOUi6krlpSs8Rcr6-bq4ljUQGV6HbN9gJTbtTIeFZ5BnUL3bi3VtqBF_onnvNvvo9SlYtF9LYLD0MreplnuSWTWeHizJhjx9uguAnmhXVHf8gGSfkBajK8VwPkIFfXMSvaytqvEApr5Ph_6l5siNNlnjCB1TH3eT3c"
              />
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container-highest rounded-2xl p-6 flex items-center gap-6 border border-outline-variant/20">
            <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Blueberry Mist Cupcake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKTDemC-LOq033njnFB0VNrmzC0PFwQaqF4n9yIv-hJBpKQhXsIzQ5OVdXd-Rvw_WoKTA07xBt9cO1vELxjMsB-duYJQIvF0DGR5ST-J9gVLf0LqZbBEeobAiciM2NKYrOgy00BrGLUteLAHOSHX-fKCwnd4PMTHSD6dpIG3SwZqlCj-HiCEx8bqe-SFktZ2DVULQXxQwYD2dXn_hoTe8MZL0lWWr5kkcH2P2NZs-CrD1FWoQEai4vKHDRB4eEMri7jcjTKcavt6Q"
              />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Blueberry Mist</h4>
              <p className="text-on-surface-variant font-body-md">Real berries &amp; lavender frosting.</p>
              <span className="text-primary font-bold">$4.25</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-6 flex items-center gap-6 border border-outline-variant/20">
            <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Velvet Rose Cupcake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfSIcPt18CgV7r2Gb9S6JMJck7P_Ji-fASmXwm3B-iSMrjVIvLjzdAnzM87lEHz6wWo_o69_gGGLmkHDlJFe01LDbHs4MOetOKQTynbYR4vSnQg3Nj7awK7MjTs07ev5Z4oIC3jukiTLhog5rEtF1LmCrLmV-lQtXJzx2tcuhoVpw1lEatetSmwLWpNui8yL0OzKu3x5NaRmFXRsLhGTbG1iODHrNGGVw9IhQp8KFdJrxoRtl1bZPIAEoBctv5dfLHCE2KWHBeKQ"
              />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Velvet Rose</h4>
              <p className="text-on-surface-variant font-body-md">Classic red velvet with silk frosting.</p>
              <span className="text-primary font-bold">$4.25</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-gap">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">Seasonal Specials</h2>
          <div className="flex-grow h-px bg-outline-variant"></div>
          <span className="material-symbols-outlined text-primary">eco</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-gutter items-stretch">
          <div className="lg:w-2/5 bg-surface-container-high rounded-3xl overflow-hidden relative min-h-[400px]">
            <img
              className="w-full h-full object-cover"
              alt="Summer Harvest Tarts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4L_55kvePi-N51dUiNK2k4MGBXYhys-FH721Azj-iMlE6LylafDqmz-zLRHb3W_HMBXWtvCVr0xs25dKRht5LRaG7msA9cDYh2zowAPKqJwhO9IN4E7CQ07_BaECEcaGlgXkx7rSgC1SYD6_SweYVGbiT_8DrpELivFI2-AvyCmdaV0EybnYI7YCivw59Rx7tgGWutC2Q_cG-oi0mWHiQPy6PzmXyFDCdHmUAVo0JDiPY29jn3TfNXA7sVoo9EKYrf8rU5BchAmQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-display-lg text-on-primary mb-2">Summer Harvest Tarts</h3>
              <p className="text-white/90 font-body-lg mb-4">Limited time offering featuring local organic berries and stone fruits.</p>
              <span className="text-white font-bold text-headline-sm">$36.00 / Box of 6</span>
            </div>
          </div>
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between custom-shadow-1 hover:custom-shadow-2 transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-primary mb-4">ac_unit</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Spiced Apple Galette</h4>
                <p className="text-on-surface-variant font-body-md">Flaky whole-wheat pastry with honey-roasted apples and cinnamon dust.</p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-primary font-bold text-headline-sm">$18.00</span>
                <button className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full font-label-md text-label-md">Available Now</button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between custom-shadow-1 hover:custom-shadow-2 transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-primary mb-4">local_florist</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Peach &amp; Basil Scones</h4>
                <p className="text-on-surface-variant font-body-md">Buttery scones with fresh peaches and a hint of garden-fresh basil.</p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-primary font-bold text-headline-sm">$5.50</span>
                <button className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full font-label-md text-label-md">Seasonal</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container/30 rounded-[40px] p-12 text-center border-2 border-dashed border-primary/20 mb-section-gap">
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-4">Looking for something unique?</h2>
        <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">We specialize in custom creations for weddings, birthdays, and special events. Let&apos;s design the dessert of your dreams together.</p>
        <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all">
          Inquire for Customization
        </button>
      </section>
    </main>
  );
}
