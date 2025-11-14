# D7GO APP

## Tecnologías

- ⚡️ **Astro 5** - Fast, static site generation
- 🎨 **Tailwind CSS 4** - Modern styling with CSS-first config
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - Semantic HTML & ARIA compliant
- 🎭 **Smooth Animations** - Scroll-triggered effects
- 🎯 **SEO Ready** - Meta tags & Open Graph
- 🧩 **Modular Components** - Easy to customize

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

Edit content in:

- `src/config.ts` - Site configuration
- `src/content/*.ts` - Features, testimonials, FAQ
- `src/styles/globals.css` - Colors & animations

## Deploy

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

Works on Replit, Vercel, Netlify, and GitHub Pages.

## License

[MIT](LICENSE)

## Sobre D7GO App

D7GO App es una aplicación que permite la negociación directa entre pasajero y conductor para acordar el precio del servicio. Este repositorio contiene la interfaz pública (landing) construida con Astro, componentes modulares y archivos de configuración que representan la experiencia del producto (páginas informativas, secciones de características, precios y contacto).

Este proyecto se usa principalmente como demo/landing y como base visual para la futura implementación de funcionalidades back-end (registro de usuarios, emparejamiento de viajes, y sistema de negociación de tarifas).

### Objetivos principales

- Presentar la propuesta de valor de D7GO App (viajes seguros, precios negociables, y servicios adicionales como envíos y fletes).
- Proveer componentes reutilizables para la UI (hero, features, pricing, FAQ, contacto).
- Servir como referencia para una implementación posterior del flujo de negocio tipo InDrive.

## Qué hay en este repositorio

- Landing / sitio estático construido con Astro 5.
- Componentes en `src/components/` para las secciones principales: `Hero`, `Features`, `HowItWorks`, `Pricing`, `Testimonials`, `FAQ`, `Contact`, `Navigation`, `Footer`.
- Contenido estructurado en `src/content/` y `src/config.ts` donde se define la mayoría de los textos, enlaces y planes de precios.
- Estilos globales en `src/styles/globals.css` (Tailwind CSS v4 configurado en el proyecto).

## Características principales (visuales / de producto mostradas)

- Sección Hero con CTA para descarga/contacto.
- Listado de características y beneficios del servicio.
- Sección "Cómo funciona" explicando el flujo básico.
- Planes de precios (Gratuito, Pro para conductores y Empresas).
- Formularios de contacto para captar leads.
- Efectos de animación por scroll y optimizaciones SEO (meta tags Open Graph y Twitter).

## Relación con el modelo de negocio InDrive

D7GO App replica la idea principal de InDrive: en lugar de fijar un precio rígido, permite que pasajeros y conductores negocien y acuerden un precio para el servicio. En esta demo se muestran las piezas visuales y de producto que soportan ese modelo (posibilidad de distintos planes, foco en conductores y empresas, y comunicación a través del formulario de contacto). La lógica de negociación, gestión de usuarios y pagos no está implementada aquí y requerirá un back-end y APIs adicionales.

## Dependencias y herramientas

- Astro ^5 (sitio estático con componentes).
- Tailwind CSS v4 para estilos.
- `astro-icon` y paquetes de iconos para la UI.
- Prettier y plugins para formato.

Información extra (desde `package.json`):

- Scripts disponibles: `dev`, `build`, `preview`, `format`.

## Estructura del proyecto (resumen)

- `astro.config.ts` — Configuración de Astro e integraciones.
- `src/config.ts` — Configuración del sitio (textos, navegación, secciones, precios, contacto).
- `src/components/` — Componentes visuales reutilizables.
- `src/content/` — Contenido estructurado (features, FAQ, etc.).
- `public/` — Activos públicos (imágenes, favicon, etc.).

## Cómo ejecutar (local)

1. Instala dependencias:

```bash
npm install
```

1. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

1. Construye para producción:

```bash
npm run build
npm run preview
```

## Cómo contribuir

- Si quieres mejorar la UI, crear componentes nuevos o añadir documentación, abre un issue o un pull request.
- Sugerencias concretas: añadir ejemplos de flujo de negociación, integrar un back-end (API REST/GraphQL), añadir autenticación y pruebas E2E.

## Notas para desarrolladores

- Gran parte del contenido se gestiona desde `src/config.ts`. Para cambiar textos, CTA o planes de precios, edita ese archivo.
- El sitio está preparado para desplegarse en plataformas estáticas como Vercel, Netlify o GitHub Pages.

## Contacto

Si necesitas más información o quieres colaborar, usa el email de contacto en `src/config.ts` o abre un issue en el repositorio.

---
