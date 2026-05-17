# Patitas de Algodón - Contexto del Proyecto

> **Este proyecto usa OpenSpec para gestión de cambios y especificaciones.**
> Ver `openspec/` para specs, cambios archivados y configuración.

## Descripción General

E-commerce de accesorios premium personalizados para mascotas. Placas grabadas, collares de cuero, dijes y sets completos con grabado de nombre y teléfono.

**Gestión del proyecto:**
- Especificaciones: `openspec/specs/`
- Cambios activos: `openspec/changes/`
- Cambios archivados: `openspec/changes/archive/`
- Configuración: `openspec/config.yaml`

## Stack Tecnológico

- **HTML5**: Páginas completas e independientes
- **Tailwind CSS CDN**: Framework CSS con configuración custom en `js/tailwind.config.js`
- **Bodoni Moda**: Tipografía serif elegante de Google Fonts (NO usar Outfit)
- **Material Symbols Outlined**: Iconografía de Google (NO usar otros icon sets)
- **Vanilla JavaScript**: Código modular en `js/main.js`

## ⚠️ REGLA CRÍTICA: Responsive Design Obligatorio

**TODA implementación, ajuste o desarrollo DEBE considerar diseño responsive desde el inicio.**

### Breakpoints del Proyecto

```css
/* Mobile First Approach */
/* Default: 0-639px (Mobile) */

@media (min-width: 640px)  /* sm - Tablet pequeña */
@media (min-width: 768px)  /* md - Tablet */
@media (min-width: 1024px) /* lg - Desktop */
@media (min-width: 1280px) /* xl - Desktop grande */
```

### Reglas de Responsive

1. **Mobile First**: Diseñar primero para móvil, luego escalar hacia arriba
2. **Testear en múltiples tamaños**: 320px (móvil pequeño), 640px, 768px, 1024px, 1440px
3. **Spacing adaptable**: Padding, margin, gaps deben tener versiones móvil y desktop
4. **Typography responsive**: Tamaños de fuente deben ajustarse por breakpoint
5. **Grid responsive**: Siempre usar grid con columnas adaptables

### Ejemplo de Implementación Correcta

```html
<!-- Grid adaptable -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

<!-- Padding adaptable -->
<section class="px-4 md:px-8 lg:px-20">

<!-- Typography adaptable -->
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
```

### ❌ NO Hacer
- **NO** usar tamaños fijos sin media queries
- **NO** asumir que todos usan desktop
- **NO** olvidar testear en móvil
- **NO** usar solo `md:` breakpoint (usar mobile first)

### ✅ SÍ Hacer
- **SÍ** testear SIEMPRE en móvil primero
- **SÍ** usar múltiples breakpoints (sm, md, lg)
- **SÍ** hacer spacing adaptable
- **SÍ** considerar touch targets en móvil (mínimo 44px)

---

## ⚠️ REGLA CRÍTICA: Arquitectura de Componentes Compartidos

### Componentes Centralizados

```
/components
├── header.html     # Navegación compartida
└── footer.html     # Footer + WhatsApp FAB compartidos
```

### Patrón Obligatorio para TODAS las Vistas HTML

**TODA nueva vista HTML DEBE seguir esta estructura:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título | Patitas de Algodón</title>

  <!-- Google Fonts - Bodoni Moda -->
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,500;1,6..96,600;1,6..96,700&display=swap" rel="stylesheet">

  <!-- Material Symbols -->
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">

  <!-- Tailwind Config (ANTES del CDN) -->
  <script src="js/tailwind.config.js"></script>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

  <!-- Custom Styles -->
  <link rel="stylesheet" href="css/styles.css">
</head>

<body class="bg-surface font-body text-on-surface">

  <!-- Header Component (OBLIGATORIO) -->
  <div id="header-placeholder"></div>

  <!-- Main Content -->
  <main>
    <!-- Contenido de la página -->
  </main>

  <!-- Footer Component (OBLIGATORIO) -->
  <div id="footer-placeholder"></div>

  <!-- JavaScript (OBLIGATORIO al final) -->
  <script src="js/main.js"></script>

</body>
</html>
```

### ❌ NO Hacer

- **NO** escribir código de navegación inline
- **NO** escribir código de footer inline
- **NO** duplicar el header/footer en cada página
- **NO** crear archivos separados como `nav.html` o `footer-alt.html`

### ✅ SÍ Hacer

- **SÍ** usar `<div id="header-placeholder"></div>` en todas las vistas
- **SÍ** usar `<div id="footer-placeholder"></div>` en todas las vistas
- **SÍ** incluir `<script src="js/main.js"></script>` al final del body
- **SÍ** modificar `components/header.html` o `components/footer.html` para cambios globales

### Cómo Funciona

El archivo `js/main.js` contiene el módulo `Components`:

```javascript
const Components = {
  async init() {
    await this.loadHeader();
    await this.loadFooter();
    this.setActiveNavLink();
  },
  // ... carga automática vía fetch()
}
```

**Los componentes se cargan automáticamente. No requiere código adicional.**

## Sistema de Diseño

### Paleta de Colores

```css
--c-primary: #ba0037      /* Rosa intenso - Acciones principales */
--c-secondary: #006874    /* Turquesa - Precios, badges */
--c-surface: #fff8f7      /* Crema claro - Fondo */
--c-on-surface: #281718   /* Texto principal */
```

**Usar siempre las clases de Tailwind configuradas:**
- `bg-primary`, `text-primary`
- `bg-secondary`, `text-secondary`
- `bg-surface`, `text-on-surface`

### ⚠️ REGLA CRÍTICA: Uso Exclusivo de Colores del Proyecto

**TODA implementación DEBE usar ÚNICAMENTE los colores definidos en `js/tailwind.config.js`.**

#### ❌ PROHIBIDO
- **NO** usar colores hex personalizados (ej: `#8B1538`, `#ff0000`, etc.)
- **NO** inventar colores fuera de la paleta
- **NO** crear clases CSS custom con colores arbitrarios

#### ✅ OBLIGATORIO
- **SÍ** usar las clases de Tailwind del proyecto (ej: `text-primary`, `bg-secondary`, `text-on-primary-fixed-variant`)
- **SÍ** consultar `js/tailwind.config.js` para ver TODOS los colores disponibles
- **SÍ** elegir el color más cercano de la paleta existente si es necesario

**La paleta completa está en `js/tailwind.config.js` e incluye:**
- Primary (7 variantes): `primary`, `on-primary`, `primary-container`, `on-primary-container`, `inverse-primary`, `primary-fixed`, `primary-fixed-dim`, `on-primary-fixed`, `on-primary-fixed-variant`
- Secondary (7 variantes): `secondary`, `on-secondary`, `secondary-container`, etc.
- Tertiary (7 variantes): `tertiary`, `on-tertiary`, `tertiary-container`, etc.
- Surface (11 variantes): `surface`, `surface-dim`, `surface-bright`, `surface-container-lowest`, etc.
- Outline (2 variantes): `outline`, `outline-variant`
- Error (4 variantes): `error`, `on-error`, `error-container`, `on-error-container`

### Tipografía - Bodoni Moda

**Familia:** Bodoni Moda (serif elegante)
**Pesos:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Clases disponibles:**
- `text-display-lg` / `text-display-lg-mobile` - Headlines principales
- `text-headline-lg` / `text-headline-lg-mobile` - Subtítulos grandes
- `text-headline-md` - Subtítulos medianos
- `text-body-lg` - Párrafos destacados
- `text-body-md` - Párrafos normales
- `text-label-md` - Labels, badges

### Iconografía - Material Symbols

### ⚠️ REGLA CRÍTICA: Uso Exclusivo de Material Symbols

**El proyecto SOLO utiliza Material Symbols de Google Fonts para iconos.**

#### ❌ PROHIBIDO
- **NO** usar Font Awesome, Feather Icons, Heroicons u otros icon sets
- **NO** usar SVG inline personalizados para iconos estándar
- **NO** usar imágenes PNG/JPG para iconos
- **NO** usar ninguna otra biblioteca de iconos

#### ✅ OBLIGATORIO
- **SÍ** usar ÚNICAMENTE Material Symbols de Google Fonts
- **SÍ** usar la clase `.material-symbols-outlined`
- **SÍ** buscar iconos en: https://fonts.google.com/icons o https://mui.com/material-ui/material-icons/

**Sintaxis estándar:**

```html
<span class="material-symbols-outlined">verified</span>
```

**Cómo agregar un icono:**

1. **Buscar** el nombre del icono en https://fonts.google.com/icons
2. **Copiar** el nombre (ej: "verified", "pets", "favorite")
3. **Usar** con la clase `.material-symbols-outlined`:
   ```html
   <span class="material-symbols-outlined">nombre_del_icono</span>
   ```

**Variaciones de estilo:**

```html
<!-- Icono outlined (default) -->
<span class="material-symbols-outlined">favorite</span>

<!-- Icono filled -->
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
```

**Iconos comunes en el proyecto:**
- `pets` - Mascotas, huella
- `verified` - Verificado, calidad
- `edit_square` - Personalización
- `shield` - Seguridad
- `local_shipping` - Envío
- `chat` - WhatsApp
- `photo_camera` - Redes sociales
- `favorite` - Me gusta, favorito
- `star` - Calificación, destacado
- `auto_awesome` - Personalización única, magic wand
- `pan_tool` - Hecho a mano, hand raised
- `qr_code_scanner` - Escanear QR
- `arrow_forward` - Flecha siguiente
- `chevron_right` - Chevron derecha
- `share` - Compartir
- `send` - Enviar

### Espaciado y Layout

```
section-gap-desktop: 120px   /* Espaciado entre secciones desktop */
section-gap-mobile: 64px     /* Espaciado entre secciones mobile */
gutter: 24px                 /* Espaciado interno de grid */
container-max: 1280px        /* Ancho máximo del contenedor */
```

Usar clases:
- `py-section-gap-desktop` / `py-section-gap-mobile`
- `gap-gutter`
- `max-w-container-max`

## Estructura de Archivos del Proyecto

```
/
├── index.html              # Página principal
├── catalogo.html           # Catálogo con filtros
├── producto.html           # Detalle de producto
├── components/             # ⭐ Componentes compartidos
│   ├── header.html        # Navegación
│   └── footer.html        # Footer + WhatsApp FAB
├── css/
│   └── styles.css         # CSS custom (clases semánticas)
├── js/
│   ├── tailwind.config.js # Tokens de diseño
│   └── main.js            # JavaScript modular
├── assets/
│   └── images/            # Imágenes
└── openspec/
    ├── config.yaml
    ├── CLAUDE.md          # Este archivo
    └── specs/             # Especificaciones del proyecto
```

## Vistas Existentes

### 1. index.html - Página Principal
- Hero con headline emocional
- Features "Hecho con Amor" (5 cards)
- Catálogo visual (4 categorías)
- Guía de personalización (4 pasos)
- Galería social "Comunidad Patitas"
- CTA final con bg-primary

### 2. catalogo.html - Catálogo
- Hero banner
- Sidebar con filtros (Categoría, Material, Mascota)
- Grid de productos (3 cols desktop, 1 col mobile)
- Cards con badges (Personalizable, Edición Limitada, etc.)

### 3. producto.html - Detalle de Producto
- Breadcrumbs
- Galería con thumbnails clickeables
- Form de personalización (nombre, teléfono, material)
- Trust badges (3 iconos)
- Productos relacionados (4 items)

## Módulos JavaScript (js/main.js)

### Components
- Carga header.html y footer.html
- Detecta página activa
- Oculta búsqueda en páginas que no son catálogo

### Navigation
- Mobile menu toggle
- Scroll header (agrega clase `.scrolled-header`)
- Smooth scroll para anchors

### Animations
- Scroll reveal con IntersectionObserver
- Clases `.reveal` y `.reveal.visible`

### Product
- Gallery thumbnails (cambio de imagen principal)
- Material selector (pills)

### WhatsApp
- Link tracking
- Generación de mensajes personalizados

### Footer
- Newsletter validation
- Email validation

## Convenciones de Código

### CSS
- Usar clases de Tailwind siempre que sea posible
- CSS custom solo para patrones repetitivos (`.nav-link`, `.btn`, `.feature-card`, etc.)
- Prefijo semántico para clases custom (`.hero-badge`, `.product-card`, `.organic-blob`)

### HTML
- Semantic HTML5 tags (`<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- Attributes `data-*` para JavaScript hooks
- Alt text descriptivo en todas las imágenes

### JavaScript
- Módulos con patrón de objeto literal
- `init()` para cada módulo
- Event delegation cuando sea posible
- Async/await para fetch

## Conversión y WhatsApp

### Estrategia de Conversión
- Botones WhatsApp destacados (primary color)
- CTA en navegación, hero, final de página
- FAB flotante siempre visible
- Mensajes contextuales según la página

### Número de WhatsApp
Placeholder: `https://wa.me/yournumber`
**Debe ser reemplazado con número real en producción**

## Desarrollo Local

**Importante:** Los componentes requieren un servidor HTTP (no funciona con `file://` por CORS).

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Abrir: `http://localhost:8000/index.html`

## Testing

Al crear nuevas vistas, verificar:
- [ ] Header se carga correctamente
- [ ] Footer se carga correctamente
- [ ] Link activo se marca automáticamente
- [ ] Mobile menu funciona
- [ ] WhatsApp FAB visible
- [ ] Responsive (320px, 768px, 1024px, 1920px)
- [ ] Tipografía Bodoni Moda se carga
- [ ] Material Symbols se muestran correctamente

## Notas de Implementación

1. **Organic Blobs**: Elementos decorativos de fondo, opcionales en nuevas vistas
2. **Reveal Animations**: Agregar clase `.reveal` a sections para animación de scroll
3. **Search Bar**: Solo visible en `catalogo.html` (controlado por JavaScript)
4. **Active Link**: Se detecta automáticamente por `data-page` attribute

## Recursos Externos

- Google Fonts: Bodoni Moda
- Google Fonts: Material Symbols Outlined
- Tailwind CSS: CDN v3.x
- WhatsApp SVG icon: Inline en footer.html

## Próximas Extensiones Posibles

Si se agregan nuevas páginas, seguir el mismo patrón:
- Página de checkout
- Página de carrito
- Página "Sobre Nosotros"
- Blog de cuidado de mascotas
- Galería de clientes

**Recordar siempre usar los placeholders de header y footer.**
