## ADDED Requirements

### Requirement: Bodoni Moda as primary font family
Site SHALL use Bodoni Moda from Google Fonts as primary typography.

#### Scenario: Google Fonts import
- **WHEN** CSS is reviewed
- **THEN** it imports Bodoni Moda with weights 400, 500, 600, 700

#### Scenario: Font family configuration
- **WHEN** Tailwind config is reviewed
- **THEN** fontFamily extends with 'display', 'heading', 'body' all set to Bodoni Moda

### Requirement: Typography classes usage
HTML SHALL use Tailwind typography classes with Bodoni Moda.

#### Scenario: Display typography
- **WHEN** hero headings render
- **THEN** they use text-display-lg or text-display-lg-mobile classes

#### Scenario: Headline typography
- **WHEN** section titles render
- **THEN** they use text-headline-lg or text-headline-md classes

#### Scenario: Body typography
- **WHEN** paragraph text renders
- **THEN** it uses text-body-lg or text-body-md classes

### Requirement: Serif elegance aesthetic
Typography SHALL convey premium serif elegance throughout site.

#### Scenario: Consistent font usage
- **WHEN** any page is reviewed
- **THEN** all text uses Bodoni Moda (no Outfit or other fonts)
