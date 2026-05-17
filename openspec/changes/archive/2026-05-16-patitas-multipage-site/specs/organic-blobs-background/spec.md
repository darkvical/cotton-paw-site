## ADDED Requirements

### Requirement: Organic blob elements
Pages SHALL include decorative organic blob elements as background.

#### Scenario: Blob styling
- **WHEN** organic blobs are reviewed
- **THEN** they use position: absolute, filter: blur(80px), opacity: 0.3-0.4

#### Scenario: Blob colors
- **WHEN** blobs render
- **THEN** they use colors from surface palette (surface-container-highest, secondary-container, primary-fixed)

### Requirement: Blobs positioned behind content
Organic blobs SHALL appear behind text and interactive elements.

#### Scenario: Z-index layering
- **WHEN** blob elements render
- **THEN** they have z-index: -1 or are positioned before content in DOM

#### Scenario: Non-interactive
- **WHEN** user interacts with page
- **THEN** blobs do not respond to pointer events (pointer-events: none)

### Requirement: Responsive blob placement
Blob elements SHALL be positioned appropriately for different screen sizes.

#### Scenario: Desktop blob placement
- **WHEN** page renders on desktop
- **THEN** blobs use large sizes (400-600px) and negative positioning

#### Scenario: Mobile blob adjustment
- **WHEN** page renders on mobile
- **THEN** blobs may be hidden or resized to avoid layout issues
