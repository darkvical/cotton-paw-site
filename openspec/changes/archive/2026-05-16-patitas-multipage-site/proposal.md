## Why

Patitas de Algodón necesita un sitio web de 3 páginas (principal, catálogo, detalle) siguiendo el patrón probado de calvy-landing: páginas HTML completas e independientes, CSS custom detallado y JavaScript modular. Las vistas existentes en `vistas/` proveen el diseño completo que debe implementarse con Bodoni Moda typography y Material Symbols icons.

## What Changes

- Crear index.html con secciones: hero, features, catálogo visual, personalización, galería social, CTA final
- Crear catalogo.html con filtros sidebar y grid de productos
- Crear producto.html con galería, formulario personalización y productos relacionados
- Cada página HTML completa con navegación y footer inline (NO componentes separados)
- CSS custom (css/styles.css) con clases específicas (.nav-link, .btn, .product-card, etc)
- Tailwind config (js/tailwind.config.js) con tokens del DESIGN.md
- JavaScript modular (js/main.js) compartido por las 3 páginas
- Tipografía Bodoni Moda (Google Fonts) - NO Outfit
- Material Symbols icons para toda la iconografía

## Capabilities

### New Capabilities

- `multi-page-structure`: Estructura de 3 archivos HTML independientes sin componentes separados
- `home-page`: Página principal con hero, features "Hecho con Amor", catálogo visual, guía personalización, galería social
- `catalog-page`: Página catálogo con filtros sidebar (categoría, material, mascota) y grid productos
- `product-detail-page`: Página detalle con galería thumbnails, formulario personalización, productos relacionados
- `shared-navigation`: Navegación inline replicada en cada HTML (logo, links, CTA, hamburger mobile)
- `shared-footer`: Footer inline replicado en cada HTML (brand, links, social, copyright)
- `design-system-tokens`: Tailwind config extendido con tokens DESIGN.md (colores, typography, spacing, borderRadius)
- `bodoni-moda-typography`: Sistema tipográfico Bodoni Moda (display-lg, headline, body)
- `custom-css-classes`: CSS custom con clases semánticas específicas por componente
- `javascript-modules`: JS modular con WhatsApp, Navigation, Animations, Interactions
- `organic-blobs-background`: Elementos decorativos background orgánicos con blur
- `whatsapp-integration`: Enlaces WhatsApp conversion en botones CTA
- `material-symbols-icons`: Configuración Material Symbols con font-variation-settings

### Modified Capabilities

<!-- No existing capabilities are being modified -->

## Impact

- **Nuevo código**: Proyecto completo de 3 páginas HTML
- **Estructura**: index.html + catalogo.html + producto.html + assets/images/ + css/styles.css + js/ (NO components/)
- **Basado en**: Diseños completos en vistas/principal/, vistas/catalogo/, vistas/detalle-producto/
- **Tipografía**: Bodoni Moda reemplaza Outfit del DESIGN.md original
- **Assets**: Imágenes generadas por IA de las vistas existentes
- **Dependencias**: Tailwind CSS CDN, Google Fonts (Bodoni Moda), Material Symbols CDN
