## ADDED Requirements

### Requirement: Hero section with emotional headline
Home page SHALL display hero section with headline "Identidad que late al ritmo de su corazón".

#### Scenario: Hero headline
- **WHEN** index.html loads
- **THEN** hero section displays emotional headline with Bodoni Moda display-lg typography

#### Scenario: Hero dual CTAs
- **WHEN** hero section renders
- **THEN** it contains primary WhatsApp CTA and secondary catalog link

#### Scenario: Hero lifestyle image
- **WHEN** hero section renders
- **THEN** it displays lifestyle photograph with soft shadow

### Requirement: Features section "Hecho con Amor"
Home page SHALL display features section with 5 feature cards in responsive grid.

#### Scenario: Section title
- **WHEN** features section loads
- **THEN** it displays "Hecho con Amor" as headline

#### Scenario: Five feature cards
- **WHEN** features section renders
- **THEN** it displays exactly 5 cards: Grabado Premium, Materiales Resistentes, Personalización Única, Accesorios Duraderos, Envío a todo Perú

#### Scenario: Responsive grid
- **WHEN** viewed on mobile
- **THEN** features display in 2-column grid
- **WHEN** viewed on desktop
- **THEN** features display in 5-column grid

### Requirement: Visual catalog preview
Home page SHALL display catalog preview with 4 category cards.

#### Scenario: Catalog section
- **WHEN** catalog preview section renders
- **THEN** it displays "Nuestro Catálogo" title and 4 category cards

#### Scenario: Category cards with images
- **WHEN** category card renders
- **THEN** it includes full-bleed image, gradient overlay, title, and price/description

### Requirement: Personalization guide section
Home page SHALL display personalization guide with 4 numbered steps.

#### Scenario: Four-step guide
- **WHEN** personalization section loads
- **THEN** it displays 4 steps: Elige diseño, Agrega nombre, Agrega teléfono, Recibe tu accesorio

#### Scenario: Live preview mockup
- **WHEN** personalization section renders
- **THEN** it displays preview mockup with animated elements

### Requirement: Social gallery section
Home page SHALL display community gallery with grid of pet photos.

#### Scenario: Gallery title
- **WHEN** social section loads
- **THEN** it displays "Comunidad Patitas" title and follower count

#### Scenario: Photo grid
- **WHEN** social gallery renders
- **THEN** it displays grid of pet photographs with consistent styling

### Requirement: Final CTA section
Home page SHALL display conversion-focused CTA with primary background.

#### Scenario: CTA background
- **WHEN** CTA section renders
- **THEN** it uses bg-primary (#ba0037) full-width background

#### Scenario: CTA headline
- **WHEN** CTA section loads
- **THEN** it displays "Protección con estilo, identidad con amor" in white text

#### Scenario: Large WhatsApp button
- **WHEN** CTA section renders
- **THEN** it includes prominent WhatsApp button with icon and contextual message
