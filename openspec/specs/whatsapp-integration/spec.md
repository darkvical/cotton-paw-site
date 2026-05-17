## ADDED Requirements

### Requirement: WhatsApp conversion links
CTA buttons SHALL open WhatsApp with pre-filled messages.

#### Scenario: WhatsApp URL pattern
- **WHEN** WhatsApp button is clicked
- **THEN** it opens https://wa.me/NUMBER?text=ENCODED_MESSAGE

#### Scenario: Data attribute pattern
- **WHEN** button with data-whatsapp attribute exists
- **THEN** JavaScript attaches click handler to generate WhatsApp URL

### Requirement: Contextual WhatsApp messages
WhatsApp messages SHALL vary based on button location.

#### Scenario: Hero CTA message
- **WHEN** hero WhatsApp button is clicked
- **THEN** message includes context about personalizing pet accessories

#### Scenario: Product detail message
- **WHEN** product detail WhatsApp button is clicked
- **THEN** message includes product name and customization details

#### Scenario: Navigation CTA message
- **WHEN** navigation WhatsApp button is clicked
- **THEN** message includes general inquiry context

### Requirement: WhatsApp number configuration
WhatsApp phone number SHALL be configurable in JavaScript constant.

#### Scenario: WA_NUMBER constant
- **WHEN** main.js is reviewed
- **THEN** WA_NUMBER constant exists at top of WhatsApp module

#### Scenario: Easy number update
- **WHEN** number needs changing
- **THEN** updating WA_NUMBER updates all WhatsApp links
