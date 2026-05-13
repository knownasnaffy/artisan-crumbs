---
name: Artisanal Bakery System
colors:
  surface: '#fff8f7'
  surface-dim: '#dfd8d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2f1'
  surface-container: '#f3ecec'
  surface-container-high: '#eee7e6'
  surface-container-highest: '#e8e1e0'
  on-surface: '#1e1b1b'
  on-surface-variant: '#4f4445'
  inverse-surface: '#333030'
  inverse-on-surface: '#f6efef'
  outline: '#817475'
  outline-variant: '#d2c3c4'
  surface-tint: '#71585b'
  primary: '#71585b'
  on-primary: '#ffffff'
  primary-container: '#f8d7da'
  on-primary-container: '#755c5f'
  inverse-primary: '#debfc2'
  secondary: '#4f635b'
  on-secondary: '#ffffff'
  secondary-container: '#d1e7dd'
  on-secondary-container: '#556961'
  tertiary: '#5b5f62'
  on-tertiary: '#ffffff'
  tertiary-container: '#dcdfe2'
  on-tertiary-container: '#5f6365'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fcdbde'
  primary-fixed-dim: '#debfc2'
  on-primary-fixed: '#281719'
  on-primary-fixed-variant: '#584144'
  secondary-fixed: '#d1e7dd'
  secondary-fixed-dim: '#b6cbc2'
  on-secondary-fixed: '#0c1f19'
  on-secondary-fixed-variant: '#374b44'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
  background: '#fff8f7'
  on-background: '#1e1b1b'
  surface-variant: '#e8e1e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The design system is centered on a "Warm Artisanal" aesthetic, evoking the comforting aroma of a local bakery. It balances high-end premium cues with a welcoming, accessible personality. The goal is to create a digital environment that feels as tactile and handcrafted as a fresh loaf of sourdough.

The style leverages a mix of **Soft Minimalism** and **Tactile surfaces**. By utilizing a generous amount of whitespace—referred to in this system as "Breathing Room"—the UI avoids clutter, ensuring that photography of golden pastries remains the focal point. Subtle depth is achieved through soft, tinted shadows and layered pastel surfaces, moving away from flat design toward a more inviting, touchable interface.

## Colors

This color palette is designed to feel edible and soothing. The **Buttery Cream** background provides a warmer, more sophisticated foundation than pure white, reducing eye strain and reinforcing the artisanal theme. 

**Blush Pink** serves as the primary brand carrier, used for key calls-to-action and highlights. **Soft Mint Green** acts as a refreshing secondary accent, ideal for success states, badges, or "organic" callouts. The **Deep Cocoa** text ensures maximum legibility while maintaining a softer, more organic feel than standard black or charcoal. Use low-opacity tints of Deep Cocoa for decorative borders or secondary metadata to keep the interface light.

## Typography

The typography strategy relies on the contrast between the sophisticated, high-contrast strokes of **Playfair Display** and the approachable, rounded terminals of **Quicksand**. 

- **Headlines:** Use Playfair Display for all editorial headings. The slight italic variant can be used sparingly for emphasis in subheaders to add a "chef's signature" feel.
- **Body Copy:** Quicksand is utilized for its high legibility and friendly nature. Its rounded shapes mirror the physical roundness of the UI components.
- **Hierarchy:** Ensure a clear vertical rhythm. Display sizes should have tight line heights to maintain a cohesive block feel, while body copy requires generous line-spacing (1.6) to support the "airy" brand pillar.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a premium, editorial feel that mimics a high-end cookbook. 

- **Grid:** Use a 12-column grid for desktop with wide 24px gutters. This allows for asymmetrical layouts where images can "break" the grid or sit in large white containers.
- **Mobile:** Transition to a single-column flow with 16px side margins. 
- **Vertical Rhythm:** Use an 8px base unit. Section spacing should be aggressive (80px+) to ensure the "airy" feel is preserved. Elements should never feel cramped; when in doubt, increase the padding.

## Elevation & Depth

Elevation in this design system is achieved through **Ambient Shadows** rather than stark borders. Shadows should be soft and tinted with the Deep Cocoa color to avoid a "dirty" gray appearance.

- **Level 1 (Cards/Buttons):** A very subtle 4px blur with 5% opacity of Deep Cocoa.
- **Level 2 (Hover states/Modals):** A 12px blur with 8% opacity.
- **Tonal Depth:** Use the Buttery Cream background as the base, and use Blush Pink or Soft Mint as floating "plates" for content. Surfaces should feel like they are softly resting on one another, not floating at high altitudes.

## Shapes

The shape language is consistently **Rounded**. There are no sharp corners in the design system, reflecting the soft nature of dough and baked goods. 

- **Standard Elements:** Buttons and small input fields use a 0.5rem (8px) radius.
- **Large Containers:** Product cards and image containers use a 1rem (16px) radius to create a "pillowy" effect.
- **Buttons:** Primary buttons may occasionally use a fully pill-shaped (rounded-full) treatment to stand out against rectangular card content.

## Components

### Buttons
Primary buttons use the Blush Pink background with Deep Cocoa text. They should have a subtle Level 1 shadow. On hover, the shadow deepens slightly and the background color shifts to a slightly darker tint of pink.

### Cards
Cards are the primary content vehicle. They must have a Buttery Cream or white background, a Level 1 shadow, and a 1px border using a 10% opacity of Deep Cocoa to define edges against the cream background.

### Input Fields
Inputs should be clean with a 0.5rem corner radius. Use a light "accent_warm" border. On focus, the border should transition to Soft Mint Green to provide a gentle, non-aggressive feedback loop.

### Chips & Badges
Use Soft Mint Green for "Freshly Baked" or "Organic" badges. Use the primary Blush Pink for "Best Seller" or "Seasonal" tags. Typography in chips should always be the uppercase Label-md style.

### Additional Components
- **Menu Toppers:** Small, decorative icons (like a grain of wheat or a rolling pin) used as dividers between sections.
- **Product Tiles:** Featured products should have high-resolution photography with rounded corners and a subtle "zoom-in" effect on hover.