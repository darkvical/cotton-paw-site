## ADDED Requirements

### Requirement: Breadcrumb navigation
Product detail page SHALL display breadcrumb navigation path.

#### Scenario: Breadcrumb structure
- **WHEN** producto.html loads
- **THEN** breadcrumb displays: Inicio > Catálogo > Placas > Placa Circular Premium

#### Scenario: Breadcrumb links
- **WHEN** breadcrumb renders
- **THEN** each level except current is clickable link

### Requirement: Product gallery with thumbnails
Product detail SHALL display main image with thumbnail selector grid.

#### Scenario: Main image display
- **WHEN** product gallery renders
- **THEN** it displays large square image with hover zoom effect

#### Scenario: Thumbnail grid
- **WHEN** gallery renders
- **THEN** it displays 4 thumbnail images in grid below main image

#### Scenario: Thumbnail selection
- **WHEN** user clicks thumbnail
- **THEN** main image updates to selected thumbnail

### Requirement: Product information section
Product detail SHALL display title, price, material badge, and description.

#### Scenario: Product title and price
- **WHEN** product detail renders
- **THEN** it displays title with headline-lg and price with secondary color

#### Scenario: Material badge
- **WHEN** product info renders
- **THEN** it displays material badge (e.g., "Acero Quirúrgico") with secondary-container background

### Requirement: Personalization form
Product detail SHALL provide form for customizing product with name, phone, and material selection.

#### Scenario: Name input
- **WHEN** personalization form renders
- **THEN** it displays text input for pet name with placeholder

#### Scenario: Phone input
- **WHEN** personalization form renders
- **THEN** it displays tel input for contact phone

#### Scenario: Material selection
- **WHEN** material selector renders
- **THEN** it displays 3 pill buttons: Oro, Plata, Rosé with color swatches

#### Scenario: WhatsApp submit
- **WHEN** personalization form renders
- **THEN** it includes large WhatsApp button for ordering

### Requirement: Trust badges
Product detail SHALL display trust badges for handmade, lifetime engraving, and national shipping.

#### Scenario: Three trust badges
- **WHEN** product detail renders
- **THEN** it displays 3 badges with icons and labels

### Requirement: Related products section
Product detail SHALL display 4 related products in grid.

#### Scenario: Section title
- **WHEN** related products section renders
- **THEN** it displays "También te podría encantar" title

#### Scenario: Four product cards
- **WHEN** related products render
- **THEN** it displays exactly 4 product cards in responsive grid
