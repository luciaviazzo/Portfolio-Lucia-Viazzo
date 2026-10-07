# Portfolio — Lucía Viazzo

**[lucia-viazzo.vercel.app](https://lucia-viazzo.vercel.app)**

Portfolio personal desarrollado con React, TypeScript y Vite. Incluye proyectos, tecnologías, sección sobre mí y formulario de contacto. Soporte para español e inglés.

## Stack

- React 18 + TypeScript
- Vite
- CSS custom properties (sin framework de estilos)
- i18n propio (ES / EN)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:5500
npm run build    # typecheck + build de producción en dist/
npm run preview  # servir el build localmente
```

## Estructura

```
src/
  components/   # Header, Hero, Projects, About, Technologies, Footer…
  data/         # content.ts — proyectos y tecnologías
  i18n/         # es.ts / en.ts
  styles.css
public/
  assets/       # imágenes (no trackeadas en git)
```
