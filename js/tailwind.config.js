// Tailwind CSS Configuration for Patitas de Algodón
// Loaded BEFORE Tailwind CDN to extend with design tokens from DESIGN.md

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      // ========== COLORS FROM DESIGN.MD ==========
      colors: {
        // Primary
        'primary': '#ba0037',
        'on-primary': '#ffffff',
        'primary-container': '#e41849',
        'on-primary-container': '#fffbff',
        'inverse-primary': '#ffb2b6',
        'primary-fixed': '#ffdadb',
        'primary-fixed-dim': '#ffb2b6',
        'on-primary-fixed': '#40000d',
        'on-primary-fixed-variant': '#920029',

        // Secondary
        'secondary': '#006874',
        'on-secondary': '#ffffff',
        'secondary-container': '#93eefc',
        'on-secondary-container': '#006d79',
        'secondary-fixed': '#96f0ff',
        'secondary-fixed-dim': '#79d4e2',
        'on-secondary-fixed': '#001f24',
        'on-secondary-fixed-variant': '#004f57',

        // Tertiary
        'tertiary': '#455e78',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#5e7791',
        'on-tertiary-container': '#fdfcff',
        'tertiary-fixed': '#cfe5ff',
        'tertiary-fixed-dim': '#afc9e7',
        'on-tertiary-fixed': '#001d33',
        'on-tertiary-fixed-variant': '#304961',

        // Surface
        'surface': '#fff8f7',
        'surface-dim': '#f2d2d3',
        'surface-bright': '#fff8f7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fff0f0',
        'surface-container': '#ffe9e9',
        'surface-container-high': '#ffe1e2',
        'surface-container-highest': '#fbdbdb',
        'surface-features': '#F9F9B5',
        'on-surface': '#281718',
        'on-surface-variant': '#5c3f41',
        'surface-variant': '#fbdbdb',
        'surface-tint': '#be0038',

        // Inverse
        'inverse-surface': '#3f2b2c',
        'inverse-on-surface': '#ffedec',

        // Outline
        'outline': '#916f70',
        'outline-variant': '#e5bdbe',

        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Background
        'background': '#fff8f7',
        'on-background': '#281718',
      },

      // ========== TYPOGRAPHY - BODONI MODA ==========
      fontFamily: {
        'display': ['"Bodoni Moda"', 'serif'],
        'heading': ['"Bodoni Moda"', 'serif'],
        'body': ['"Bodoni Moda"', 'serif'],
        'sans': ['"Bodoni Moda"', 'serif'],
        'display-lg': ['"Bodoni Moda"', 'serif'],
        'display-lg-mobile': ['"Bodoni Moda"', 'serif'],
        'headline-lg': ['"Bodoni Moda"', 'serif'],
        'headline-lg-mobile': ['"Bodoni Moda"', 'serif'],
        'headline-md': ['"Bodoni Moda"', 'serif'],
        'body-lg': ['"Bodoni Moda"', 'serif'],
        'body-md': ['"Bodoni Moda"', 'serif'],
        'label-md': ['"Bodoni Moda"', 'serif'],
      },

      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
      },

      // ========== SPACING FROM DESIGN.MD ==========
      spacing: {
        'base': '8px',
        'section-gap-desktop': '120px',
        'section-gap-mobile': '64px',
        'container-max': '1280px',
        'gutter': '24px',
        'margin-mobile': '20px',
      },

      // ========== BORDER RADIUS FROM DESIGN.MD ==========
      borderRadius: {
        'sm': '0.5rem',     // 8px
        'DEFAULT': '1rem',   // 16px
        'md': '1.5rem',     // 24px
        'lg': '2rem',       // 32px
        'xl': '3rem',       // 48px
        'full': '9999px',   // Pill shape
      },

      // ========== MAX WIDTH ==========
      maxWidth: {
        'container': '1280px',
        'container-max': '1280px',
      },

      // ========== BOX SHADOW (Ambient) ==========
      boxShadow: {
        'ambient': '0px 20px 40px rgba(0, 0, 0, 0.04)',
        'ambient-lg': '0px 30px 60px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
