## ADDED Requirements

### Requirement: Footer inline in each HTML page
Footer SHALL be implemented inline in the HTML of each page (index, catalogo, producto).

#### Scenario: Footer in index.html
- **WHEN** index.html is opened
- **THEN** `<footer>` element exists inline at end of body

#### Scenario: Footer in catalogo.html
- **WHEN** catalogo.html is opened
- **THEN** `<footer>` element exists inline at end of body

#### Scenario: Footer in producto.html
- **WHEN** producto.html is opened
- **THEN** `<footer>` element exists inline at end of body

### Requirement: Footer structure consistency
Footer SHALL have consistent multi-column structure across all pages.

#### Scenario: Brand column
- **WHEN** footer renders
- **THEN** it displays brand logo, tagline, and social icons in first column

#### Scenario: Links columns
- **WHEN** footer renders
- **THEN** it displays organized link columns: Comprar, Nosotros

#### Scenario: Newsletter column
- **WHEN** footer renders
- **THEN** it displays newsletter signup with email input and submit button

### Requirement: Footer copyright with dynamic year
Footer SHALL display copyright notice with current year.

#### Scenario: Copyright text
- **WHEN** footer renders
- **THEN** it displays "© [YEAR] Patitas de Algodón"

#### Scenario: Dynamic year update
- **WHEN** page loads
- **THEN** JavaScript updates #footer-year or similar element to current year
