## ADDED Requirements

### Requirement: Catalog hero banner
Catalog page SHALL display hero banner with collection title and description.

#### Scenario: Hero title
- **WHEN** catalogo.html loads
- **THEN** hero displays "Nuestra Colección" title with primary color

#### Scenario: Hero lifestyle image
- **WHEN** catalog hero renders
- **THEN** it displays rotated lifestyle image with hover effect

### Requirement: Filters sidebar
Catalog page SHALL provide filters sidebar with category, material, and pet type options.

#### Scenario: Category filter
- **WHEN** filters sidebar renders
- **THEN** it displays category filter with options: Placas, Collares, Dijes, Sets

#### Scenario: Material filter
- **WHEN** filters sidebar renders
- **THEN** it displays material filter with pill buttons: Acero, Cuero, Oro

#### Scenario: Pet type filter
- **WHEN** filters sidebar renders
- **THEN** it displays pet type filter with icon buttons: Perro, Gato

### Requirement: Product grid layout
Catalog page SHALL display products in responsive grid with cards.

#### Scenario: Desktop grid
- **WHEN** viewed on desktop
- **THEN** products display in 3-column grid

#### Scenario: Mobile grid
- **WHEN** viewed on mobile
- **THEN** products display in 1-column stacked layout

### Requirement: Product cards with badges
Each product card SHALL display image, title, price, and badge.

#### Scenario: Product card structure
- **WHEN** product card renders
- **THEN** it contains image with aspect-[4/5], title, price in secondary color, and badge

#### Scenario: Badge types
- **WHEN** product card renders
- **THEN** badge can be "Personalizable", "Edición Limitada", "Best Seller", or "New"

#### Scenario: Hover effect
- **WHEN** user hovers product card
- **THEN** card lifts with shadow and image scales
