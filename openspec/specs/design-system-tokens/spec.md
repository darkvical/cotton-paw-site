## ADDED Requirements

### Requirement: Tailwind config extends design tokens
Tailwind configuration SHALL extend theme with all tokens from DESIGN.md.

#### Scenario: Color tokens
- **WHEN** tailwind.config.js is reviewed
- **THEN** it extends colors with primary (#ba0037), secondary (#006874), and full surface palette

#### Scenario: Spacing tokens
- **WHEN** tailwind.config.js is reviewed
- **THEN** it extends spacing with section-gap-desktop (120px), section-gap-mobile (64px), gutter (24px), container-max (1280px)

#### Scenario: Border radius tokens
- **WHEN** tailwind.config.js is reviewed
- **THEN** it extends borderRadius with values from DESIGN.md (sm: 0.5rem, md: 1.5rem, lg: 2rem, xl: 3rem, full: 9999px)

### Requirement: Typography scale configuration
Tailwind configuration SHALL define custom fontSize values for typography scale.

#### Scenario: Display sizes
- **WHEN** fontSize config is reviewed
- **THEN** display-lg (56px) and display-lg-mobile (40px) are defined with lineHeight and letterSpacing

#### Scenario: Headline sizes
- **WHEN** fontSize config is reviewed
- **THEN** headline-lg, headline-lg-mobile, headline-md are defined

#### Scenario: Body sizes
- **WHEN** fontSize config is reviewed
- **THEN** body-lg (18px) and body-md (16px) are defined with lineHeight 1.6

### Requirement: Config loads before Tailwind CDN
Tailwind config script SHALL load before Tailwind CDN script in HTML.

#### Scenario: Script order
- **WHEN** HTML head is parsed
- **THEN** tailwind.config.js script tag appears before cdn.tailwindcss.com script tag
