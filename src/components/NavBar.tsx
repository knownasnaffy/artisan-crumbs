import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-surface-container-lowest shadow-sm docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <div className="font-headline-md text-headline-sm md:text-headline-md text-primary">
          Artisan Crumbs
        </div>
        <div className="hidden md:flex items-center gap-gutter">
          <Link
            className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95 transition-transform"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95 transition-transform"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95 transition-transform"
            href="/special-orders"
          >
            Special Orders
          </Link>
          <Link
            className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95 transition-transform"
            href="/gallery"
          >
            Gallery
          </Link>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-md text-label-md custom-shadow-1 hover:custom-shadow-2 hover:opacity-90 transition-all cursor-pointer active:scale-95">
          Order Now
        </button>
      </div>
    </nav>
  );
}
