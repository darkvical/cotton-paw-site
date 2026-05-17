## Context

Patitas de Algodón requiere un sitio web de 3 páginas siguiendo el patrón arquitectónico probado de calvy-landing: páginas HTML completas e independientes, CSS custom detallado y JavaScript modular compartido. Las vistas en `vistas/` proveen diseños completos con Tailwind CDN y tipografía Outfit que debe reemplazarse con Bodoni Moda.

**Stakeholders**: Dueño del negocio (conversión WhatsApp), usuarios finales (dueños de mascotas premium)

**Restricciones**:
- Seguir estructura exacta de calvy-landing (NO componentes separados)
- Hosting estático simple
- Mobile-first responsive
- Performance óptimo < 2s carga

## Goals / Non-Goals

**Goals:**
- Sitio de 3 páginas HTML independientes siguiendo patrón calvy-landing
- Cada página completa con nav + footer inline
- Sistema de diseño "Luxury Warmth" con Bodoni Moda
- CSS custom con clases específicas por componente
- JavaScript modular compartido (WhatsApp, Nav, Animations, Interactions)
- Performance óptimo con lazy loading
- Conversión vía WhatsApp

**Non-Goals:**
- Single Page Application (SPA) o framework JS
- Componentes separados (header.html, footer.html) o fetch/import
- Build process complejo o bundler
- Backend o CMS
- Modo oscuro
- E-commerce funcional completo
- Autenticación de usuarios

## Decisions

### D1: Páginas HTML independientes (calvy-landing pattern)

**Decisión**: Cada página (index, catalogo, producto) es un archivo HTML completo con nav + footer inline

**Rationale**:
- **Probado**: calvy-landing usa este patrón exitosamente (525 líneas por página)
- **Simplicidad**: No requiere fetch/import de componentes
- **Performance**: Sin JavaScript para cargar estructura
- **SEO**: Contenido completo en primer renderizado
- **Hosting**: Funciona en cualquier servidor estático

**Alternativas descartadas**:
- Componentes separados: Complejidad innecesaria, requiere JavaScript
- SPA con React/Vue: Overkill para sitio de 3 páginas estático

### D2: Nav + Footer inline replicado

**Decisión**: Navegación y footer se replican completos en cada archivo HTML

**Rationale**:
- **Consistencia**: Patrón calvy-landing verificado
- **Mantenibilidad**: Solo 3 páginas, fácil mantener sincronizado
- **Performance**: No fetch adicionales, renderiza instantáneo
- **Simplicidad**: Código predecible y fácil de debuggear

**Trade-off**: Duplicación de código (nav ~50 líneas, footer ~40 líneas por archivo)

### D3: CSS Custom detallado (no solo Tailwind utilities)

**Decisión**: Archivo css/styles.css con clases específicas siguiendo patrón calvy

**Rationale**:
- **Semántica**: Clases como `.hero-badge`, `.btn-primary`, `.product-card`, `.glass-card`
- **Mantenibilidad**: Cambios visuales centralizados en CSS
- **Reutilización**: Estilos complejos no repetidos en HTML
- **Patrón calvy**: Archivo styles.css de ~600 líneas con secciones específicas

**Estructura CSS**:
```css
/* Design Tokens (:root variables) */
/* Reset / Base */
/* Material Symbols configuration */
/* Navigation (.nav-link, .hamburger, #mobile-menu) */
/* Buttons (.btn, .btn-primary, .btn-outline) */
/* Hero (.hero-badge, .hero-image-wrap, .soft-shadow) */
/* Cards (.product-card, .feature-card, .glass-card) */
/* Organic blobs (.organic-blob, .bg-blob) */
/* Animations (.reveal, .scale-hover, transitions) */
/* Footer */
```

### D4: Tailwind Config con tokens DESIGN.md

**Decisión**: js/tailwind.config.js carga ANTES del CDN con tokens custom

**Rationale**:
- Calvy-landing usa mismo patrón (137 líneas de config)
- Extiende Tailwind con colores, typography, spacing del DESIGN.md
- Permite usar utilidades como `bg-primary`, `text-headline-lg`, `py-section-gap-desktop`
- Mantiene diseño consistente entre páginas

### D5: Bodoni Moda Typography

**Decisión**: Bodoni Moda de Google Fonts como fuente principal (reemplaza Outfit de vistas/)

**Rationale**:
- **Elegancia**: Serif clásica que comunica lujo premium
- **Contraste**: Difiere de tipografías geométricas comunes
- **Performance**: Google Fonts CDN optimizado con `display=swap`
- **Versatilidad**: Pesos 400-700 para jerarquía tipográfica
- **Coherencia**: Se usa en todo el sitio (display, headline, body)

**Configuración**:
```javascript
fontFamily: {
  'display': ['"Bodoni Moda"', 'serif'],
  'heading': ['"Bodoni Moda"', 'serif'],
  'body': ['"Bodoni Moda"', 'serif'],
}
```

### D6: JavaScript Modular compartido

**Decisión**: js/main.js único compartido por las 3 páginas

**Rationale**:
- **DRY**: Funcionalidad compartida en un solo lugar
- **Cache**: Navegación entre páginas reutiliza JS cacheado
- **Modular**: Secciones claramente delimitadas con comentarios
- **Patrón calvy**: main.js de ~250 líneas con módulos

**Módulos**:
1. **WhatsApp**: URLs y handlers para conversión
2. **Navigation**: Mobile menu + scroll effects + active links
3. **Animations**: IntersectionObserver scroll-reveal
4. **Interactions**: Material selection, thumbnail gallery
5. **Footer**: Año dinámico

### D7: WhatsApp Conversion

**Decisión**: `https://wa.me/NUMBER?text=MESSAGE` pattern con data-attributes

**Rationale**:
- Calvy-landing usa data-whatsapp attributes
- No backend requerido, conversión directa
- Mensajes contextuales por ubicación (CTA diferente en cada página)

### D8: Material Symbols Icons

**Decisión**: Material Symbols Outlined con font-variation-settings

**Rationale**:
- Vistas existentes usan Material Symbols
- Iconografía moderna y consistente
- CDN optimizado
- Configuración CSS global

### D9: Organic Blobs Background

**Decisión**: Elementos decorativos con position absolute, blur y opacidad

**Rationale**:
- Estética "Luxury Warmth" del DESIGN.md
- Agregan profundidad sin afectar legibilidad
- Fácil implementar con CSS puro

### D10: Image Strategy

**Decisión**: Usar imágenes de vistas/ (data-alt con URLs de lh3.googleusercontent.com)

**Rationale**:
- Diseños completos ya tienen imágenes generadas
- Alta calidad y coherencia visual
- Temporales para desarrollo, reemplazar con fotografía profesional en producción

## Risks / Trade-offs

### R1: Duplicación Nav/Footer

**Risk**: Cambios en nav/footer requieren actualizar 3 archivos

**Mitigation**:
- Solo 3 páginas, mantenimiento razonable
- Documentar estructura clara
- Considerar script de sincronización futuro si crece

### R2: Tailwind CDN size

**Risk**: ~350KB CDN impacta carga inicial

**Mitigation**:
- Cache headers CDN (navegación subsecuente rápida)
- Lazy load imágenes below-fold
- Considerar build custom Tailwind futuro

### R3: Imágenes grandes

**Risk**: Imágenes generadas pueden ser pesadas

**Mitigation**:
- Comprimir con TinyPNG/Squoosh
- Lazy loading con `loading="lazy"`
- Responsive images con srcset (futuro)

### R4: CSS Custom mantenimiento

**Risk**: CSS de 600+ líneas puede ser difícil navegar

**Mitigation**:
- Secciones claramente comentadas
- Naming conventions consistentes BEM-like
- Agrupar por componente/página

### R5: Sin versionado dependencias

**Risk**: CDNs pueden cambiar

**Mitigation**:
- Pinear versiones cuando posible
- Documentar versiones usadas
- Considerar self-hosting futuro

## Open Questions

1. **Número WhatsApp**: ¿Número final para links de conversión?
2. **Imágenes finales**: ¿Usar screenshots de vistas o fotografías profesionales?
3. **Analytics**: ¿Google Analytics u otra herramienta?
4. **Dominio**: ¿Dominio de deployment final?
5. **Formulario personalización**: ¿Integrar con sistema de pedidos real o solo WhatsApp?
