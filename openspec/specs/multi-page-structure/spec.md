## ADDED Requirements

### Requirement: Three independent HTML pages
The site SHALL consist of three complete HTML files: index.html, catalogo.html, producto.html.

#### Scenario: All pages exist
- **WHEN** project is built
- **THEN** index.html, catalogo.html, and producto.html exist in root directory

#### Scenario: No component files
- **WHEN** project structure is reviewed
- **THEN** there are NO separate component files (no components/, no header.html, no footer.html)

### Requirement: Each page is complete and independent
Each HTML file SHALL contain complete structure including navigation, main content, and footer inline.

#### Scenario: Index page completeness
- **WHEN** index.html is opened
- **THEN** it contains inline `<nav>`, `<main>` with sections, and `<footer>`

#### Scenario: Catalog page completeness
- **WHEN** catalogo.html is opened
- **THEN** it contains inline `<nav>`, `<main>` with catalog content, and `<footer>`

#### Scenario: Product page completeness
- **WHEN** producto.html is opened
- **THEN** it contains inline `<nav>`, `<main>` with product detail, and `<footer>`

### Requirement: Shared resources structure
The site SHALL use shared CSS and JavaScript files referenced by all pages.

#### Scenario: CSS structure
- **WHEN** project structure is reviewed
- **THEN** css/styles.css exists and is linked in all HTML pages

#### Scenario: JavaScript structure
- **WHEN** project structure is reviewed
- **THEN** js/main.js and js/tailwind.config.js exist and are referenced in all HTML pages

### Requirement: Assets organization
The site SHALL organize images in assets/images/ directory.

#### Scenario: Images directory
- **WHEN** project structure is reviewed
- **THEN** assets/images/ directory contains all site images
