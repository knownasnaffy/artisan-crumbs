# Artisan Crumbs — Full Implementation Plan

## Ground Rules for All Agents

- **Framework**: Next.js (App Router). All new pages go under `app/`.
- **Styling**: Tailwind CSS + shadcn/ui. Follow the existing token system already in the project.
- **Data**: All content lives in a `/data` directory as typed TypeScript constants (`.ts` files). No API calls, no database, no environment variables required.
- **Forms**: UI-only. Forms show a loading state for ~1.5s (simulated with `setTimeout`), then transition to a styled success state. No submission goes anywhere.
- **Images**: Replace all raw `<img>` tags with Next.js `<Image />` from `next/image`. Use `width`, `height`, and `priority` props correctly. Remote image domains must be whitelisted in `next.config.js`.
- **No new paid packages.** Only packages already in the project or freely available on npm.
- **TypeScript everywhere.** No `any` types.
- **Accessibility baseline**: Every interactive element has a visible focus ring, meaningful `aria-label` or visible label, and keyboard operability.
- **Mobile-first.** Every page and component must be fully usable at 375px viewport width before tablet/desktop breakpoints.

---

## Phase 1 — Critical Fixes (Blockers)

These must be resolved before anything else because they actively break the site for users.

---

### Task 1.1 — Fix the mobile navigation

**File to create/edit**: `components/layout/Header.tsx` (or wherever the current nav lives)

**What to do**:
- Add a hamburger menu button (`☰` icon, using a Lucide icon e.g. `Menu` and `X`) that is only visible at `md:hidden`.
- On click, toggle a full-screen or slide-in drawer that lists all nav links: Home, Menu, Special Orders, Gallery, Contact.
- The drawer must trap focus when open (use `dialog` element or a focus-trap pattern).
- Close the drawer when a link is clicked or when the `X` button is pressed or when `Escape` is pressed.
- The hamburger button must have `aria-label="Open navigation menu"` and the close button `aria-label="Close navigation menu"`.
- The brand name / logo in the header must be wrapped in a `<Link href="/">` so it navigates home.

---

### Task 1.2 — Fix all dead-end CTA buttons

**Audit all buttons across every page** and assign each one a real destination. Apply this mapping:

| Button Label | Action |
|---|---|
| `Order Now` | `<Link href="/special-orders">` |
| `Explore Menu` | `<Link href="/menu">` |
| `Learn Our Story` | `<Link href="/about">` |
| `View Sizes` | Smooth-scroll to a sizes/pricing section on the current page, or link to `/menu#sizes` |
| `Follow Us` | Set `href="#"` temporarily and add `aria-disabled="true"` with a tooltip "Coming soon" — do not leave as a broken click |
| `Book a Consultation` | `<Link href="/contact">` |
| `View Pricing` | `<Link href="/menu#pricing">` |
| `Inquire for Customization` | `<Link href="/special-orders">` |

Every button that currently renders as a `<button>` or `<div>` but navigates somewhere must be changed to a `<Link>` (Next.js) or `<a>`. Every button that triggers a form or modal must have a wired handler. No button should be decorative.

---

### Task 1.3 — Fix the Special Orders form

**File**: `app/special-orders/page.tsx` (and any form component it uses)

**What to do**:

Replace the current `action="#"` form with a fully wired React controlled component.

**Fields to add** (beyond what currently exists):
- Event date (date picker or text input `type="date"`)
- Guest / serving count (number input)
- Budget range (select: Under $100 / $100–$300 / $300–$600 / $600+)
- Pickup or Delivery (radio group)
- Dietary restrictions / allergies (checkbox group: Nut-free, Gluten-free, Dairy-free, Vegan, None)
- How did you hear about us? (select)
- Preferred contact method (radio: Email / Phone)

**Form behaviour**:
- All required fields show inline validation errors on blur and on submit attempt.
- `htmlFor` on every `<label>` paired with `id` on every `<input>`.
- On submit: button shows a spinner + "Sending…" for 1500ms, then the entire form is replaced by a success panel.

**Success panel content**:
```
✅ We've received your inquiry!
We'll get back to you within 1–2 business days.
Our consultations are free — we'll reach out to schedule a time that works for you.
[Start a New Inquiry] button — resets the form state
```

**Supporting copy to add above the form**:
```
How It Works
1. Submit your inquiry below.
2. We'll contact you within 1–2 business days.
3. Schedule a free consultation call or in-person tasting.
4. Confirm your order with a 50% deposit.
Lead times: at least 2 weeks for custom cakes, 4+ weeks for weddings.
```

---

### Task 1.4 — Remove or fix broken footer links

**File**: `components/layout/Footer.tsx`

- Remove the `/shipping` link entirely from the footer. Do not replace it yet.
- Change `/contact` in the footer to `<Link href="/contact">` — this will work once Task 2.1 creates that page.
- Fix the copyright year: change `© 2024` to `© {new Date().getFullYear()}`.
- Any icon-only spans in the footer that look like social links must either: (a) become real `<a>` elements with `href`, `target="_blank"`, `rel="noopener noreferrer"`, and `aria-label`, or (b) be removed entirely. Do not leave non-interactive spans styled as interactive elements.

---

## Phase 2 — High Priority (Missing Pages & Trust)

---

### Task 2.1 — Build the `/contact` page

**File**: `app/contact/page.tsx`

**Page metadata**:
```ts
export const metadata = {
  title: "Contact Us | Artisan Crumbs",
  description: "Get in touch with Artisan Crumbs for custom cake orders, wedding consultations, and general enquiries. We respond within 1–2 business days.",
}
```

**Page sections**:

**Hero**: "Let's Create Something Sweet Together" — short intro copy.

**Contact Details block** (use dummy data from `/data/business.ts` — see Task 2.7):
- Phone: (555) 012-3456
- Email: hello@artisancrumbs.com
- Address: 42 Maple Lane, Brookside, CA 94102
- Hours: Mon–Fri 8am–6pm, Sat 9am–4pm, Closed Sunday

**Contact form** (same wired behaviour as Task 1.3):
Fields: Name (required), Email (required), Phone (optional), Subject (select: General Inquiry / Custom Order / Wedding Cake / Corporate Order / Other), Message (required textarea).

Same submit → loading → success state pattern. Success message: "Thanks for reaching out! We'll reply to [email] within 1–2 business days."

**Map placeholder**: A styled `<div>` with a bakery pin icon and the address text, styled to look like a map card. Do NOT embed a real Google Maps iframe (requires API key). A decorative illustrated map-style block is fine.

**FAQ teaser**: Link to `/faq` with 2–3 preview questions.

---

### Task 2.2 — Build the `/about` page

**File**: `app/about/page.tsx`

**Page metadata**:
```ts
export const metadata = {
  title: "Our Story | Artisan Crumbs",
  description: "Meet the team behind Artisan Crumbs — a family-run bakery committed to organic ingredients, handcrafted technique, and unforgettable celebration cakes.",
}
```

**Dummy data to add to `/data/about.ts`**:

```ts
export const founderStory = {
  name: "Clara Mendez",
  title: "Founder & Head Pastry Chef",
  bio: `Clara started Artisan Crumbs in 2017 out of a 200-square-foot home kitchen and a single stand mixer.
  After a decade of professional pastry training in San Francisco and Lyon, she returned to Brookside
  determined to bring honest, seasonal, handcrafted baking to her community. Today, Artisan Crumbs
  operates out of a full commercial kitchen and has served over 1,200 custom orders — from intimate
  birthday cakes to 500-guest wedding dessert tables.`,
  image: "/images/founder.jpg", // placeholder image path
}

export const milestones = [
  { year: "2017", label: "Founded in a home kitchen" },
  { year: "2019", label: "Moved to commercial kitchen space" },
  { year: "2021", label: "500th custom order milestone" },
  { year: "2023", label: "Launched wedding & events division" },
  { year: "2024", label: "1,200+ orders fulfilled" },
]

export const values = [
  { title: "Organic Ingredients", description: "We source seasonal, locally grown produce and certified organic dairy wherever possible." },
  { title: "Made to Order", description: "Nothing sits on a shelf. Every item is baked fresh to your timeline." },
  { title: "Inclusive Baking", description: "We accommodate nut-free, gluten-free, dairy-free, and vegan requests without compromise on flavour." },
  { title: "Community First", description: "We partner with local farms, event planners, and small venues to keep business close to home." },
]
```

**Page sections**:
1. Hero with founder image and name/title
2. Founder story narrative block
3. Values grid (4 cards)
4. Timeline / milestones
5. CTA: "Ready to work with us?" → links to `/contact` and `/special-orders`

---

### Task 2.3 — Build the `/faq` page

**File**: `app/faq/page.tsx`

**Page metadata**:
```ts
export const metadata = {
  title: "FAQ | Artisan Crumbs",
  description: "Answers to the most common questions about ordering custom cakes, lead times, dietary accommodations, delivery, and more.",
}
```

**Dummy data in `/data/faq.ts`** — implement as an accordion (shadcn/ui `Accordion` component):

```ts
export const faqs = [
  {
    question: "How far in advance do I need to order?",
    answer: "For standard custom cakes, we ask for at least 2 weeks' notice. For wedding or large event orders, we recommend booking 4–8 weeks ahead. We occasionally accommodate rush orders — contact us to check availability."
  },
  {
    question: "Do you offer tastings?",
    answer: "Yes! We offer complimentary 30-minute tasting consultations for wedding and large event orders. For smaller orders, tasting boxes are available for purchase. Contact us to schedule."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Orders cancelled more than 7 days before the event receive a full refund minus the 50% deposit. Orders cancelled within 7 days are non-refundable. We will always try to reschedule where possible."
  },
  {
    question: "Do you deliver?",
    answer: "We offer local delivery within a 25-mile radius of Brookside, CA. Delivery fees are calculated at checkout based on distance. We also offer contactless pickup from our kitchen by appointment."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes — we regularly produce nut-free, gluten-free, dairy-free, and fully vegan items. Please note our kitchen does handle nuts and gluten, so we cannot guarantee a fully allergen-free environment. Always disclose severe allergies at the time of inquiry."
  },
  {
    question: "How does pricing work for custom orders?",
    answer: "Custom cake pricing depends on size, tier count, design complexity, and flavour. Our starting price for a custom single-tier celebration cake is $85. Multi-tier wedding cakes start at $350. We provide a full written quote after your consultation."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfer, credit/debit card, and cash. A 50% deposit is required to confirm your booking, with the remaining balance due 48 hours before delivery or pickup."
  },
  {
    question: "Can I see more examples of your work?",
    answer: "Our Gallery page showcases recent projects. You can also follow us on Instagram for behind-the-scenes content and new designs."
  },
]
```

Page layout: hero heading + subheading, then full accordion. End with a CTA block: "Still have questions? [Contact Us]".

---

### Task 2.4 — Improve the Gallery page

**File**: `app/gallery/page.tsx`

**What to change**:

- Replace the flat image wall with a filterable grid. Filter categories (stored in `/data/gallery.ts`): All, Weddings, Birthdays, Corporate, Seasonal, Dessert Tables.
- Each image card should show on hover (or below on mobile): item name, event type badge, and a short flavour/design note.
- Remove all fake social engagement numbers (likes/comments counts) entirely — they erode trust.
- Remove all fake social links. If there are "Follow Us on Instagram" style elements pointing nowhere, either remove them or replace with `aria-disabled` + tooltip.
- Add a lightbox: clicking a gallery card opens a modal with a larger image, the item name, event type, and a short description. Use a simple custom modal or shadcn/ui `Dialog`. The modal must close on `Escape` and clicking the backdrop.
- At the bottom of the page, add a CTA: "Inspired? Let's build your order" → `/special-orders`.

**Dummy data shape in `/data/gallery.ts`**:
```ts
export type GalleryItem = {
  id: string
  src: string
  alt: string
  title: string
  category: "wedding" | "birthday" | "corporate" | "seasonal" | "dessert-table"
  description: string
  flavorNote?: string
}
```

Populate with at minimum 12 items using whatever images already exist in the project, assigning them realistic dummy titles, categories and descriptions.

---

### Task 2.5 — Improve the Menu page

**File**: `app/menu/page.tsx`

**What to fix**:

- Wire up the existing filter/sort UI so it actually filters the displayed products. If the filters currently exist in the DOM but don't change the list, connect them to React state.
- Each product card must show: name, short description, allergen tags (e.g. "Contains: Gluten, Dairy"), dietary badges (GF / Vegan / Nut-free where applicable), price, and serving size.
- Add a "Request This Item" button on each card that links to `/special-orders` with a query param: `/special-orders?item=chocolate-ganache-cake`. The Special Orders form should read this param and pre-fill the message field.
- Add an `id="pricing"` anchor near the pricing section so `View Pricing` CTA links work.
- Add a menu intro block with lead time notice: "All items are made to order. Standard lead time is 48–72 hours for everyday items and 2+ weeks for custom cakes."

**Dummy data shape in `/data/menu.ts`**:
```ts
export type MenuItem = {
  id: string
  name: string
  category: "cakes" | "cupcakes" | "cookies" | "pastries" | "seasonal"
  description: string
  price: number
  servingSize: string
  dietaryTags: ("gluten-free" | "vegan" | "nut-free" | "dairy-free")[]
  allergens: string[]
  available: boolean
  image: string
}
```

Populate with at minimum 16 items across all categories.

---

### Task 2.6 — Improve the Home page

**File**: `app/page.tsx`

**Changes**:

- **Hero**: The hero CTA buttons (`Order Now`, `Explore Menu`) must be wired (see Task 1.2). Add a subheading that is specific: "Custom celebration cakes, wedding desserts, and handcrafted pastries — baked fresh in Brookside, CA."
- **Best-sellers section**: Each best-seller card must link to the menu item or `/menu`. No dead-end cards.
- **Process / How It Works section**: If this section exists, each step must be purely informational (no fake buttons). Add a final step CTA: "Ready? [Start Your Order]" → `/special-orders`.
- **Testimonials section**: Replace or supplement the existing single testimonial with at least 3 from `/data/testimonials.ts`. See Task 2.7.
- **About teaser**: Add a brief 2-sentence "Who We Are" block with a photo and a real "Learn Our Story" button → `/about`.
- **FAQ teaser**: Add 3 collapsed FAQ items (use the data from Task 2.3) with a "See All FAQs" link → `/faq`.

---

### Task 2.7 — Create the central data directory

Create all data files under `/data/`. This is the single source of truth for all dummy content.

**Files to create**:

`/data/business.ts` — business identity constants:
```ts
export const business = {
  name: "Artisan Crumbs",
  tagline: "Handcrafted Sweets, Baked with Intent",
  phone: "(555) 012-3456",
  email: "hello@artisancrumbs.com",
  address: {
    street: "42 Maple Lane",
    city: "Brookside",
    state: "CA",
    zip: "94102",
    full: "42 Maple Lane, Brookside, CA 94102",
  },
  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  serviceRadius: "25 miles from Brookside, CA",
  social: {
    instagram: "#",
    facebook: "#",
  },
  founded: 2017,
  ordersServed: 1200,
}
```

`/data/testimonials.ts` — at least 5 entries:
```ts
export type Testimonial = {
  id: string
  name: string
  occasion: string
  date: string
  rating: 5 | 4
  quote: string
}
```

`/data/about.ts` — founder + values + milestones (from Task 2.2)

`/data/faq.ts` — FAQ entries (from Task 2.3)

`/data/gallery.ts` — gallery items (from Task 2.4)

`/data/menu.ts` — menu items (from Task 2.5)

---

## Phase 3 — Medium Priority (SEO, Accessibility, Legal)

---

### Task 3.1 — Add page-specific metadata to every route

Every page file must export a `metadata` object. Use this pattern:

```ts
// app/menu/page.tsx
export const metadata: Metadata = {
  title: "Our Menu | Artisan Crumbs — Custom Cakes & Pastries in Brookside, CA",
  description: "Browse our full menu of custom celebration cakes, wedding desserts, cupcakes, cookies, and seasonal pastries. All made to order in Brookside, CA.",
  openGraph: {
    title: "Our Menu | Artisan Crumbs",
    description: "...",
    type: "website",
  },
}
```

Apply this to: `/` (home), `/menu`, `/special-orders`, `/gallery`, `/about`, `/contact`, `/faq`.

The root `layout.tsx` should define base `metadataBase`:
```ts
metadataBase: new URL("https://artisancrumbs.com"),
```

---

### Task 3.2 — Add `sitemap.ts` and `robots.ts`

**File**: `app/sitemap.ts`
```ts
export default function sitemap() {
  return [
    { url: "https://artisancrumbs.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://artisancrumbs.com/menu", ... },
    { url: "https://artisancrumbs.com/special-orders", ... },
    { url: "https://artisancrumbs.com/gallery", ... },
    { url: "https://artisancrumbs.com/about", ... },
    { url: "https://artisancrumbs.com/contact", ... },
    { url: "https://artisancrumbs.com/faq", ... },
  ]
}
```

**File**: `app/robots.ts`
```ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://artisancrumbs.com/sitemap.xml",
  }
}
```

---

### Task 3.3 — Accessibility pass

Apply to all existing and new components:

- Every `<label>` must have `htmlFor` matching the `id` of its input.
- Every icon-only button must have `aria-label`.
- All images must have descriptive `alt` text. Decorative images use `alt=""`.
- Add `<main id="main-content">` wrapper to every page layout.
- Add a skip-nav link at the very top of the layout: `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>`.
- Ensure all interactive elements (buttons, links, inputs) have visible `:focus-visible` outlines. If Tailwind's `ring` utility is used, make sure it's not overridden.
- Ensure modals/dialogs (gallery lightbox, mobile nav) trap focus and restore focus on close.
- Fix the copyright year inconsistency (Task 1.4 already covers this).

---

### Task 3.4 — Replace `<img>` tags with Next.js `<Image />`

- Audit all `<img>` usage across the codebase.
- Replace every instance with `next/image`'s `<Image />`.
- Add `width` and `height` props (or use `fill` with a positioned container).
- Add `priority` to all above-the-fold images (hero, founder photo).
- Add all remote image hostnames to `next.config.js` under `images.remotePatterns`.
- For Google-hosted images, add the pattern for `lh3.googleusercontent.com` or whatever domains are in use.

---

### Task 3.5 — Add legal / policy pages

**File**: `app/terms/page.tsx` — Terms of Service (dummy content covering: use of site, order terms, deposit policy, cancellation, limitation of liability).

**File**: `app/refund-policy/page.tsx` — Cancellation & Refund Policy (matching the FAQ answer from Task 2.3, expanded).

Both pages should be linked in the footer under a "Legal" section. Content can be clearly marked "Last updated: [date]" and be realistic dummy text.

Add an allergen disclaimer to the footer and the menu page:
```
⚠️ Allergen Notice: Our kitchen handles nuts, gluten, dairy, and eggs. While we accommodate many dietary needs, we cannot guarantee a fully allergen-free environment. Always inform us of severe allergies at the time of ordering.
```

---

### Task 3.6 — Fix the privacy policy date inconsistency

**File**: `app/privacy-policy/page.tsx` (or wherever the effective date is hardcoded)

Change the effective date to match the current year and remove any conflicting `© 2024` references. All copyright footers should use `{new Date().getFullYear()}`.

---

## Phase 4 — Navigation & Information Architecture Cleanup

---

### Task 4.1 — Update the footer structure

The footer should be reorganised into clear columns:

**Column 1 — Artisan Crumbs**
Brand name, tagline, address, phone, email (all from `/data/business.ts`).

**Column 2 — Explore**
Home, Menu, Special Orders, Gallery, About

**Column 3 — Help**
Contact, FAQ, Refund Policy, Terms of Service

**Column 4 — Follow Us**
Instagram (href="#", aria-disabled, tooltip: "Coming soon"), Facebook (same)

**Bottom bar**: `© {year} Artisan Crumbs. All rights reserved.` | Privacy Policy

Remove the `/shipping` link entirely.

---

### Task 4.2 — Add nav links for new pages

The main header navigation must include links to all live pages. Suggested nav structure:

- Home
- Menu
- Special Orders
- Gallery
- About
- Contact

FAQs, Terms, Refund Policy live in the footer only (no need in main nav).

---

### Task 4.3 — Add a 404 page

**File**: `app/not-found.tsx`

A branded 404 page with the site header/footer, a friendly message ("We couldn't find that page"), and links back to Home, Menu, and Contact.

---

## Phase 5 — Lower Priority (Nice-to-Have Enhancements)

These should be done last, only after Phases 1–4 are complete.

---

### Task 5.1 — Add a Testimonials section/page

Either add a `/testimonials` page or a rich testimonials section on the homepage (preferred). Use the 5 entries from `/data/testimonials.ts`. Each testimonial card should show: star rating, quote, name, occasion (e.g. "Wedding, June 2024"). Use a horizontal scrollable carousel on mobile, grid on desktop.

---

### Task 5.2 — Add a Pricing / Packages section to Menu

Add a `#pricing` anchor section to the Menu page with a simple pricing table:

| Category | Starting Price | Notes |
|---|---|---|
| Custom Celebration Cake | From $85 | Single tier, up to 10 servings |
| Multi-Tier Cake | From $220 | 2–3 tiers |
| Wedding Cake | From $350 | Includes consultation |
| Dessert Table | From $500 | 50+ servings, mixed items |
| Cupcakes (dozen) | From $48 | Minimum 1 dozen |
| Cookie Boxes | From $36 | Box of 12 |

Add note: "All prices are starting prices. Final quote provided after consultation."

---

### Task 5.3 — Add downloadable menu PDF stub

Add a "Download Our Menu (PDF)" button on the Menu page. For the demo, this button links to a static PDF file placed at `public/artisan-crumbs-menu.pdf`. The PDF does not need to be a real document — a one-page summary with the bakery name, categories, and starting prices is sufficient. Generate it programmatically using a simple Node script if needed, or place a placeholder file.

---

### Task 5.4 — Improve the Special Orders page service segmentation

Add a section above the form on the Special Orders page titled "What We Can Create For You" with service cards:

- Celebration Cakes (birthdays, graduations, milestones)
- Wedding Cakes & Dessert Tables
- Corporate Orders (office events, branded desserts, bulk orders)
- Seasonal & Holiday Preorders
- Cookie & Pastry Boxes (gifting, favours)

Each card is informational only with a short description and an icon. They scroll the user down to the form on click.

---

### Task 5.5 — Strengthen homepage value proposition

In the hero or just below it, add a concise "Why Artisan Crumbs?" strip with 4 icons + labels:

- 🌿 Organic Ingredients
- 🎂 100% Made to Order
- 📍 Serving Brookside & Surrounding Areas
- ⭐ 1,200+ Happy Customers

These should pull from `/data/business.ts` so the number is maintained in one place.

---

## Summary of All New Files to Create

```
app/
  about/page.tsx
  contact/page.tsx
  faq/page.tsx
  terms/page.tsx
  refund-policy/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts

data/
  business.ts
  testimonials.ts
  about.ts
  faq.ts
  gallery.ts
  menu.ts

public/
  artisan-crumbs-menu.pdf   ← Phase 5 only
```

## Summary of All Files to Modify

```
app/layout.tsx              ← metadataBase, skip nav, footer restructure
app/page.tsx                ← hero CTAs, testimonials, about teaser, FAQ teaser
app/menu/page.tsx           ← wire filters, product cards, pricing anchor
app/gallery/page.tsx        ← filters, lightbox, remove fake social proof
app/special-orders/page.tsx ← form overhaul, supporting copy
app/privacy-policy/page.tsx ← fix date

components/layout/Header.tsx ← mobile nav, logo as home link
components/layout/Footer.tsx ← restructure, remove /shipping, fix year, fix social spans

next.config.js              ← images.remotePatterns
```
