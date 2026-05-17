---
name: Patitas de Algodón
colors:
  surface: '#fff8f7'
  surface-dim: '#f2d2d3'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9e9'
  surface-container-high: '#ffe1e2'
  surface-container-highest: '#fbdbdb'
  on-surface: '#281718'
  on-surface-variant: '#5c3f41'
  inverse-surface: '#3f2b2c'
  inverse-on-surface: '#ffedec'
  outline: '#916f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0038'
  primary: '#ba0037'
  on-primary: '#ffffff'
  primary-container: '#e41849'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2b6'
  secondary: '#006874'
  on-secondary: '#ffffff'
  secondary-container: '#93eefc'
  on-secondary-container: '#006d79'
  tertiary: '#455e78'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e7791'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#920029'
  secondary-fixed: '#96f0ff'
  secondary-fixed-dim: '#79d4e2'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f57'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#afc9e7'
  on-tertiary-fixed: '#001d33'
  on-tertiary-fixed-variant: '#304961'
  background: '#fff8f7'
  on-background: '#281718'
  surface-variant: '#fbdbdb'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

The design system is crafted to evoke "Luxury Warmth"—a premium, emotional experience that treats pet accessories as high-fashion keepsakes. The target audience is the discerning pet parent who values "Instagrammable" aesthetics and artisanal quality.

The visual style is a fusion of **Soft Minimalism** and **Organic Elegance**. It borrows the structural precision of Apple and the welcoming, lifestyle-centric whitespace of Airbnb. The interface feels light, airy, and "squishy" yet refined, utilizing organic blob shapes to break rigid grids and create a sense of playfulness. Every interaction should feel soft and intentional, prioritizing high-quality photography of pets in lifestyle settings.

## Colors

The palette balances vibrant energy with sophisticated grounding. 

- **Primary (#FF325A):** A "Vibrant Pink" used exclusively for CTAs and moments of high emotional impact. It signifies the love and joy of pet ownership.
- **Deep Turquoise (#087E8B):** A "Premium Accent" used for luxury indicators, price points, or secondary navigation to provide a grounded, high-end contrast.
- **Surface Palette:** The interface primarily utilizes **White** for maximum cleanliness, using **Soft Yellow (#F9F9B5)** for promotional sections or background layers to add warmth.
- **Pastel Blue (#BBD5F3):** Reserved for decorative organic shapes and subtle background blurs.
- **Text (#3C3C3C):** A soft dark grey that maintains high legibility while appearing more "boutique" and less harsh than pure black.

## Typography

The design system utilizes **Outfit** for its geometric yet friendly characteristics. It bridges the gap between technical precision and approachable luxury.

- **Emotional Hierarchy:** Large display sizes use tight tracking and bold weights to create "poster-like" headlines that hero the product photography.
- **Readability:** Body text is set with generous line-height (1.6) to ensure a breezy, effortless reading experience.
- **Labels:** Small labels use uppercase styling and increased letter spacing to denote categories and metadata without cluttering the layout.

## Layout & Spacing

The layout philosophy follows a **Fluid 12-Column Grid** for desktop and a **2-Column Grid** for mobile. 

- **Whitespace as a Feature:** Spacing is intentionally oversized to create a "luxury gallery" feel. Section vertical gaps are significant to allow each product or story to breathe.
- **Asymmetric Elements:** While the core grid is structured, organic blobs are placed off-grid in the background layers to create a sense of depth and movement.
- **Margins:** Desktop margins are generous (80px+) to keep content centered and focused, while mobile uses a 20px safe area to maximize screen real estate for imagery.

## Elevation & Depth

Depth in the design system is achieved through **Ambient Shadows** and **Tonal Layering**.

- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `0px 20px 40px rgba(0,0,0,0.04)`). The shadows should feel like a soft glow rather than a hard drop.
- **Tonal Layers:** High-priority cards sit on pure white surfaces with subtle shadows. Lower-priority background elements utilize the Soft Yellow or Pastel Blue tones to create a natural hierarchy of information.
- **Backdrop Blurs:** Use subtle glassmorphism (12px blur) on navigation bars and floating overlays to maintain the "light and airy" brand feeling while providing functional legibility over complex background blobs.

## Shapes

The shape language is fundamentally **Pill-shaped and Organic**.

- **UI Elements:** Buttons and input fields use `rounded-full` (pill) styling to emphasize the "cotton" (algodón) aspect of the brand name.
- **Containers:** Cards and image containers use `2xl` (1.5rem) or `3xl` (2rem) corner radii to appear soft, safe, and friendly.
- **Decorative Blobs:** Background shapes are non-geometric, hand-drawn organic paths with soft fills and no strokes. They should always appear behind text and interactive elements.

## Components

- **Buttons:** Primary buttons are pill-shaped, using the Vibrant Pink background with white text. They feature a `scale(1.05)` transform on hover to provide tactile feedback.
- **Product Cards:** Feature a high image-to-text ratio (approx 4:1). Images should have a large border radius (24px+). Price and title are centered or left-aligned using Deep Turquoise for the price to signal premium quality.
- **Chips/Badges:** Small, pill-shaped tags used for "New" or "Limited Edition," utilizing Pastel Blue with the Deep Turquoise text.
- **Input Fields:** Minimalist with a soft background color (F9F9B5 at 30% opacity) and no border, focusing on the pill-shaped container and clear Outfit labels.
- **Icons:** 1.5pt stroke width, minimal and linear. Icons are never filled; they remain light and skeletal to match the typography.
- **Micro-Interactions:** All transitions (hover, tap, page load) should use a "soft-spring" easing to reinforce the premium, tactile feel of the brand.