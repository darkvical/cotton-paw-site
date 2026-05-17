# Patitas de Algodón

E-commerce de accesorios premium personalizados para mascotas.

## 🚀 Inicio Rápido

```bash
# Servidor de desarrollo local (requerido para componentes compartidos)
python3 -m http.server 8000

# Abrir en navegador
open http://localhost:8000/index.html
```

## 📁 Estructura del Proyecto

```
/
├── CLAUDE.md              # 📖 Contexto completo del proyecto (leer primero)
├── README.md              # Este archivo
├── index.html             # Página principal
├── catalogo.html          # Catálogo de productos
├── producto.html          # Detalle de producto
├── components/            # Componentes compartidos (header, footer)
├── css/                   # Estilos
├── js/                    # JavaScript modular
├── assets/                # Imágenes y recursos
└── openspec/              # Gestión con OpenSpec
    ├── config.yaml        # Configuración
    ├── specs/             # Especificaciones del sistema
    └── changes/           # Cambios activos y archivados
```

## 🛠️ Stack Tecnológico

- **HTML5** - Páginas completas
- **Tailwind CSS** - Framework CSS (vía CDN)
- **Bodoni Moda** - Tipografía (Google Fonts)
- **Material Symbols** - Iconografía
- **Vanilla JavaScript** - Sin frameworks

## ⚠️ Regla Importante

**Todas las vistas usan componentes compartidos:**
- `components/header.html` - Navegación
- `components/footer.html` - Footer + WhatsApp

Ver `CLAUDE.md` para detalles completos.

## 📋 Gestión del Proyecto

Este proyecto usa [OpenSpec](https://github.com/ckreiling/openspec) para gestión de cambios y especificaciones.

### Crear un nuevo cambio

```bash
openspec new change "nombre-del-cambio"
```

### Ver especificaciones

Las especificaciones del sistema están en `openspec/specs/`:
- `multi-page-structure/` - Arquitectura de 3 páginas
- `home-page/` - Especificación de la página principal
- `catalog-page/` - Especificación del catálogo
- `shared-navigation/` - Navegación compartida
- Y más...

### Ver cambios archivados

Los cambios completados están en `openspec/changes/archive/`

## 🎨 Sistema de Diseño

- **Primary**: `#ba0037` (rosa intenso)
- **Secondary**: `#006874` (turquesa)
- **Surface**: `#fff8f7` (crema claro)
- **Tipografía**: Bodoni Moda (serif elegante)

## 📞 Conversión

El sitio está optimizado para conversión vía WhatsApp:
- Botón en navegación
- CTA en secciones
- FAB flotante
- Links en productos

**Nota**: Actualizar `https://wa.me/yournumber` con número real.

## 📚 Documentación

Para documentación completa, arquitectura, convenciones y guías de desarrollo:

👉 **Ver `CLAUDE.md`**

## 🧑‍💻 Desarrollo

1. Siempre usar servidor HTTP local (no `file://`)
2. Nuevas vistas deben incluir placeholders de header/footer
3. Seguir convenciones en `CLAUDE.md`
4. Modificar `components/` para cambios globales

## 📄 Licencia

© 2024 Patitas de Algodón
