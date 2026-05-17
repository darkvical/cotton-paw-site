## ADDED Requirements

### Requirement: Semantic CSS classes file
Project SHALL have css/styles.css with semantic component classes.

#### Scenario: CSS file structure
- **WHEN** styles.css is reviewed
- **THEN** it contains sections: Design Tokens, Reset, Material Symbols, Navigation, Buttons, Cards, Animations

### Requirement: Navigation CSS classes
CSS SHALL provide specific classes for navigation components.

#### Scenario: Nav link styles
- **WHEN** styles.css is reviewed
- **THEN** .nav-link class exists with hover and active states

#### Scenario: Hamburger styles
- **WHEN** styles.css is reviewed
- **THEN** .hamburger class exists with open state animations

#### Scenario: Mobile menu styles
- **WHEN** styles.css is reviewed
- **THEN** #mobile-menu styles exist with max-height transition

### Requirement: Button CSS classes
CSS SHALL provide button component classes.

#### Scenario: Base button
- **WHEN** styles.css is reviewed
- **THEN** .btn class exists with pill shape and transition

#### Scenario: Button variants
- **WHEN** styles.css is reviewed
- **THEN** .btn-primary, .btn-outline, .btn-secondary classes exist

### Requirement: Card CSS classes
CSS SHALL provide card component classes for products and features.

#### Scenario: Product card
- **WHEN** styles.css is reviewed
- **THEN** .product-card class exists with hover effects

#### Scenario: Feature card
- **WHEN** styles.css is reviewed
- **THEN** .feature-card class exists with lift hover

#### Scenario: Glass card
- **WHEN** styles.css is reviewed
- **THEN** .glass-card class exists with backdrop-filter blur

### Requirement: Animation CSS classes
CSS SHALL provide animation utility classes.

#### Scenario: Scroll reveal
- **WHEN** styles.css is reviewed
- **THEN** .reveal and .reveal.visible classes exist for scroll animations

#### Scenario: Soft shadow
- **WHEN** styles.css is reviewed
- **THEN** .soft-shadow class exists with ambient shadow values
