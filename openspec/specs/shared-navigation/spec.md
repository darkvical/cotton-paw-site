## ADDED Requirements

### Requirement: Navigation inline in each HTML page
Navigation SHALL be implemented inline in the HTML of each page (index, catalogo, producto).

#### Scenario: Nav in index.html
- **WHEN** index.html is opened
- **THEN** `<nav id="main-nav">` exists inline within the body

#### Scenario: Nav in catalogo.html
- **WHEN** catalogo.html is opened
- **THEN** `<nav id="main-nav">` exists inline within the body

#### Scenario: Nav in producto.html
- **WHEN** producto.html is opened
- **THEN** `<nav id="main-nav">` exists inline within the body

### Requirement: Navigation structure consistency
Navigation SHALL have consistent structure across all pages with logo, links, and CTA.

#### Scenario: Logo link
- **WHEN** navigation renders
- **THEN** it displays logo image with link to index.html

#### Scenario: Desktop navigation links
- **WHEN** navigation renders on desktop
- **THEN** it displays links: Catálogo, Personalizar, Nosotros

#### Scenario: WhatsApp CTA button
- **WHEN** navigation renders
- **THEN** it includes WhatsApp CTA button with data-whatsapp attribute

### Requirement: Mobile hamburger menu
Navigation SHALL provide collapsible mobile menu with hamburger icon.

#### Scenario: Hamburger button
- **WHEN** navigation renders on mobile
- **THEN** it displays hamburger button with 3 span elements

#### Scenario: Mobile menu dropdown
- **WHEN** navigation includes mobile menu
- **THEN** #mobile-menu element exists with nav links and CTA

### Requirement: Sticky navigation with scroll effect
Navigation SHALL stick to top and add visual effects on scroll.

#### Scenario: Sticky positioning
- **WHEN** page scrolls
- **THEN** navigation remains fixed at top

#### Scenario: Scrolled state styling
- **WHEN** page scrolls > 50px
- **THEN** navigation adds backdrop blur and shadow via .scrolled-header class
