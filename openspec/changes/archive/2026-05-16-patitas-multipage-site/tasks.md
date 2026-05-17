## 1. Project Setup

- [ ] 1.1 Create directory structure (assets/images/, css/, js/)
- [ ] 1.2 Verify vistas/ directory with principal/code.html, catalogo/code.html, detalle-producto/code.html
- [ ] 1.3 Extract and save images from vistas HTML files to assets/images/
- [ ] 1.4 Read vistas/DESIGN.md for complete design system tokens

## 2. Tailwind Configuration

- [ ] 2.1 Create js/tailwind.config.js with base structure
- [ ] 2.2 Add all color tokens from DESIGN.md (primary, secondary, surface palette, etc)
- [ ] 2.3 Configure Bodoni Moda font family (display, heading, body)
- [ ] 2.4 Add fontSize config (display-lg: 56px, headline-lg: 32px, body-lg: 18px, etc)
- [ ] 2.5 Add spacing tokens (section-gap-desktop: 120px, section-gap-mobile: 64px, gutter, container-max)
- [ ] 2.6 Add borderRadius tokens (sm: 0.5rem, md: 1.5rem, lg: 2rem, xl: 3rem, full: 9999px)

## 3. Custom CSS Styles

- [ ] 3.1 Create css/styles.css with section comments structure
- [ ] 3.2 Add Google Fonts import for Bodoni Moda (weights: 400, 500, 600, 700)
- [ ] 3.3 Add Material Symbols font import (Outlined variant)
- [ ] 3.4 Define :root CSS variables (--c-primary, --c-secondary, --shadow-ambient, --transition-smooth)
- [ ] 3.5 Add base/reset styles (*, html, body, img)
- [ ] 3.6 Add Material Symbols configuration (.material-symbols-outlined font-variation-settings)
- [ ] 3.7 Create navigation styles (.nav-link, .nav-link::after, .nav-link.active, .hamburger, .hamburger.open, #mobile-menu)
- [ ] 3.8 Create button styles (.btn, .btn-primary, .btn-outline, .btn-secondary with hover/active states)
- [ ] 3.9 Create hero styles (.hero-badge, .hero-image-wrap)
- [ ] 3.10 Create card styles (.feature-card, .product-card, .product-overlay, .glass-card)
- [ ] 3.11 Create organic blob styles (.organic-blob, .bg-blob with blur and opacity)
- [ ] 3.12 Create shadow utilities (.soft-shadow with ambient shadow values)
- [ ] 3.13 Create reveal animation styles (.reveal, .reveal.visible, .reveal-delay-1/2/3)
- [ ] 3.14 Add scroll behavior and transitions (smooth scroll, hover scales)

## 4. Home Page (index.html)

- [ ] 4.1 Create index.html with HTML5 doctype and meta tags (viewport, SEO, Open Graph)
- [ ] 4.2 Add Material Symbols CDN link in head
- [ ] 4.3 Add tailwind.config.js script BEFORE Tailwind CDN
- [ ] 4.4 Add Tailwind CDN script tag
- [ ] 4.5 Link css/styles.css in head
- [ ] 4.6 Link js/main.js at end of body
- [ ] 4.7 Add organic blob background elements
- [ ] 4.8 Create inline <nav id="main-nav"> with logo, desktop links, mobile hamburger, WhatsApp CTA
- [ ] 4.9 Create mobile menu dropdown structure inside nav
- [ ] 4.10 Create hero section with badge, headline "Identidad que late al ritmo de su corazón", description, dual CTAs, lifestyle image
- [ ] 4.11 Create features section "Hecho con Amor" with 5 cards (Grabado Premium, Materiales, Personalización, Accesorios, Envío)
- [ ] 4.12 Create visual catalog section with 4 category cards (Placas Grabadas, Collares, Dijes Premium, Pet Lovers)
- [ ] 4.13 Create personalization guide section with 4 numbered steps and preview mockup
- [ ] 4.14 Create social gallery section "Comunidad Patitas" with photo grid
- [ ] 4.15 Create final CTA section with bg-primary, headline, WhatsApp button
- [ ] 4.16 Create inline <footer> with 4 columns (brand, Comprar links, Nosotros links, Síguenos + newsletter)
- [ ] 4.17 Add copyright with <span id="footer-year"> for dynamic year
- [ ] 4.18 Add floating WhatsApp FAB button
- [ ] 4.19 Add .reveal classes to sections for scroll animations

## 5. Catalog Page (catalogo.html)

- [ ] 5.1 Create catalogo.html with HTML5 doctype and complete meta tags
- [ ] 5.2 Add same head structure as index.html (fonts, Tailwind config/CDN, CSS link)
- [ ] 5.3 Link js/main.js at end of body
- [ ] 5.4 Add organic blob background elements
- [ ] 5.5 Replicate inline <nav> from index.html with active state on "Catálogo" link
- [ ] 5.6 Create catalog hero banner section with title "Nuestra Colección", description, rotated lifestyle image
- [ ] 5.7 Create main container with flex layout (sidebar + product grid)
- [ ] 5.8 Create filters sidebar with Categoría list (Placas, Collares, Dijes, Sets)
- [ ] 5.9 Add Material filter pills (Acero, Cuero, Oro) in sidebar
- [ ] 5.10 Add Mascota filter icons (Perro, Gato) in sidebar
- [ ] 5.11 Create product grid container (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- [ ] 5.12 Add 6 product cards with image (aspect-[4/5]), badge, title, price
- [ ] 5.13 Implement hover effects on product cards (lift, scale image)
- [ ] 5.14 Replicate inline <footer> from index.html
- [ ] 5.15 Add floating WhatsApp FAB button

## 6. Product Detail Page (producto.html)

- [ ] 6.1 Create producto.html with HTML5 doctype and complete meta tags
- [ ] 6.2 Add same head structure as other pages (fonts, Tailwind config/CDN, CSS link)
- [ ] 6.3 Link js/main.js at end of body
- [ ] 6.4 Add organic blob background elements
- [ ] 6.5 Replicate inline <nav> from other pages
- [ ] 6.6 Create breadcrumb navigation (Inicio > Catálogo > Placas > Placa Circular Premium)
- [ ] 6.7 Create product hero grid (7 cols gallery, 5 cols details)
- [ ] 6.8 Create main product image container with aspect-square and hover zoom
- [ ] 6.9 Create thumbnail grid (4 thumbnails) with click handlers
- [ ] 6.10 Create product info section (category badge, title, price, material badge, description)
- [ ] 6.11 Create personalization form with glass-card styling
- [ ] 6.12 Add form inputs (pet name text, phone tel) with pill styling
- [ ] 6.13 Create material selector with 3 pill buttons (Oro, Plata, Rosé) and color swatches
- [ ] 6.14 Add large WhatsApp CTA button in form
- [ ] 6.15 Create trust badges section (3 badges: Hecho a mano, Grabado de por vida, Envío nacional)
- [ ] 6.16 Create related products section with title "También te podría encantar"
- [ ] 6.17 Add 4 related product cards in responsive grid
- [ ] 6.18 Replicate inline <footer> from other pages

## 7. JavaScript Modules

- [ ] 7.1 Create js/main.js with 'use strict'
- [ ] 7.2 Add WhatsApp module comment header
- [ ] 7.3 Define WA_NUMBER constant (placeholder for now)
- [ ] 7.4 Create waUrl(message) function
- [ ] 7.5 Create openWhatsApp(message) function
- [ ] 7.6 Create initWhatsApp() to attach [data-whatsapp] click handlers
- [ ] 7.7 Add Navigation module comment header
- [ ] 7.8 Create initMobileMenu() function with hamburger toggle logic
- [ ] 7.9 Implement mobile menu close on link click
- [ ] 7.10 Implement mobile menu close on outside click
- [ ] 7.11 Implement mobile menu close on Escape key
- [ ] 7.12 Create initScrollNav() for adding .scrolled-header class on scroll
- [ ] 7.13 Create active link highlighting based on scroll position (for index.html)
- [ ] 7.14 Add Animations module comment header
- [ ] 7.15 Create initScrollReveal() function with IntersectionObserver
- [ ] 7.16 Configure observer options (threshold: 0.1, rootMargin)
- [ ] 7.17 Add Interactions module comment header
- [ ] 7.18 Create selectMaterial(element) function for material pill selection
- [ ] 7.19 Create thumbnail gallery click handler for producto.html
- [ ] 7.20 Add Footer module comment header
- [ ] 7.21 Create updateFooterYear() function to set current year
- [ ] 7.22 Add Initialization comment header
- [ ] 7.23 Create init() function that calls all module inits
- [ ] 7.24 Add DOMContentLoaded event listener calling init()
- [ ] 7.25 Test init() logs in console

## 8. Testing & Polish

- [ ] 8.1 Test index.html in browser - verify all sections render
- [ ] 8.2 Test catalogo.html in browser - verify filters and product grid
- [ ] 8.3 Test producto.html in browser - verify gallery, form, related products
- [ ] 8.4 Test mobile menu open/close on all 3 pages
- [ ] 8.5 Test scroll reveal animations on index.html
- [ ] 8.6 Test navigation scroll effects on all pages
- [ ] 8.7 Test material selection interaction on producto.html
- [ ] 8.8 Test thumbnail gallery click on producto.html
- [ ] 8.9 Verify Bodoni Moda font loads correctly on all pages
- [ ] 8.10 Verify Material Symbols icons render correctly
- [ ] 8.11 Test WhatsApp links open with correct messages (requires updating WA_NUMBER)
- [ ] 8.12 Test responsive layouts at 320px, 768px, 1024px, 1920px
- [ ] 8.13 Verify footer year updates dynamically
- [ ] 8.14 Check console for JavaScript errors
- [ ] 8.15 Validate HTML5 for all 3 pages
- [ ] 8.16 Test cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] 8.17 Optimize images if needed (compress large files)
- [ ] 8.18 Verify organic blobs don't interfere with content legibility
