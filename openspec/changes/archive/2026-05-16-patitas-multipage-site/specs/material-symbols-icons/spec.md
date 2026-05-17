## ADDED Requirements

### Requirement: Material Symbols CDN integration
Site SHALL use Material Symbols Outlined from Google Fonts CDN.

#### Scenario: CDN link
- **WHEN** HTML head is reviewed
- **THEN** it includes Material Symbols font link with outlined variant

#### Scenario: Icon class usage
- **WHEN** icons are used in HTML
- **THEN** they use .material-symbols-outlined class

### Requirement: Material Symbols CSS configuration
CSS SHALL configure Material Symbols font-variation-settings.

#### Scenario: Font variation settings
- **WHEN** styles.css is reviewed
- **THEN** .material-symbols-outlined has font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24

### Requirement: Icon usage across site
Icons SHALL be used consistently for actions, features, and navigation.

#### Scenario: Navigation icons
- **WHEN** navigation renders
- **THEN** it uses icons like 'menu', 'chat', 'shopping_bag'

#### Scenario: Feature icons
- **WHEN** feature cards render
- **THEN** they use icons like 'edit_square', 'shield', 'auto_fix_high', 'favorite', 'local_shipping'

#### Scenario: Product icons
- **WHEN** product pages render
- **THEN** they use icons like 'front_hand', 'verified', 'chevron_right', 'check_circle'
