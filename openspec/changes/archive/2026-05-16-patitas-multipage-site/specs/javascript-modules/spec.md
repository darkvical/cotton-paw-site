## ADDED Requirements

### Requirement: Modular JavaScript structure
JavaScript SHALL be organized in main.js with clearly delimited module sections.

#### Scenario: Module sections
- **WHEN** main.js is reviewed
- **THEN** it has commented sections: WhatsApp Module, Navigation Module, Animations Module, Interactions Module, Footer Module, Initialization

### Requirement: WhatsApp module
JavaScript SHALL provide WhatsApp URL generation and click handlers.

#### Scenario: WhatsApp URL function
- **WHEN** WhatsApp module is reviewed
- **THEN** waUrl(message) function exists

#### Scenario: WhatsApp click handlers
- **WHEN** page loads
- **THEN** initWhatsApp() attaches click handlers to all [data-whatsapp] elements

### Requirement: Navigation module
JavaScript SHALL handle mobile menu and scroll effects.

#### Scenario: Mobile menu toggle
- **WHEN** hamburger is clicked
- **THEN** initMobileMenu() toggles .open class and aria-expanded

#### Scenario: Scroll navigation effect
- **WHEN** page scrolls > 50px
- **THEN** initScrollNav() adds .scrolled-header class to navigation

### Requirement: Animations module
JavaScript SHALL use IntersectionObserver for scroll reveals.

#### Scenario: Scroll reveal observer
- **WHEN** .reveal elements enter viewport
- **THEN** initScrollReveal() adds .visible class

### Requirement: Interactions module
JavaScript SHALL handle interactive elements like material selection and thumbnails.

#### Scenario: Material selection
- **WHEN** material button is clicked
- **THEN** selectMaterial() updates border and background of selected button

#### Scenario: Thumbnail gallery
- **WHEN** thumbnail is clicked
- **THEN** main image updates to selected thumbnail source

### Requirement: Footer module
JavaScript SHALL update copyright year dynamically.

#### Scenario: Dynamic year
- **WHEN** page loads
- **THEN** updateFooterYear() sets footer year element to current year

### Requirement: Initialization system
JavaScript SHALL initialize all modules on DOM ready.

#### Scenario: Init function
- **WHEN** main.js is reviewed
- **THEN** init() function calls all module initialization functions

#### Scenario: DOM ready listener
- **WHEN** DOM is ready
- **THEN** DOMContentLoaded event listener calls init()
