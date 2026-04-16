# Portfolio — Víctor Roberto Curzio

Sitio personal pensado como carta de presentación: una sola página clara, rápida y fácil de mantener. El foco está en **experiencia real en producción**, stack actual y forma de contacto directo.

## Por qué este proyecto

- **Next.js (App Router)** para HTML estático, buen SEO y despliegue simple.
- **Tailwind CSS** para un diseño consistente sin acumular CSS suelto.
- **Contenido desacoplado** del layout: actualizás CV y portfolio en el mismo lugar (`src/content/portfolio.ts`).

Si llegaste desde GitHub: el código está organizado para que se entienda en minutos, no solo para “verse bien en el navegador”.

## Stack

| Área        | Tecnología                          |
| ----------- | ----------------------------------- |
| Framework   | [Next.js](https://nextjs.org/) 16   |
| UI          | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Lenguaje    | TypeScript                          |
| Tipografía  | Bricolage Grotesque + DM Sans (Google Fonts) |

## Cómo correrlo en local

Requisitos: **Node.js** LTS y **npm**.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Para compilar como en producción:

```bash
npm run build
npm start
```

## Estructura del código

```text
src/
  app/                 # Rutas y estilos globales (layout, page, globals.css)
  content/
    portfolio.ts       # Datos y textos del sitio (única fuente de verdad)
  components/
    home/              # Composición de la página principal
    layout/            # Shell visual y navegación
    sections/          # Bloques: hero, experiencia, skills, formación, contacto
    index.ts           # Re-exports opcionales
public/                # Assets estáticos (favicon, OG image, etc.)
```

- **`HomePage`** arma la pantalla: `PageShell` + `Nav` + secciones.
- **`PageShell`** concentra fondo y capas decorativas; las secciones solo se preocupan por su contenido.
- **`portfolio.ts`** concentra perfil, experiencia, skills y formación para que los cambios sean mecánicos y revisables en diff.

## Personalización rápida

1. Editá **`src/content/portfolio.ts`** (textos, fechas, tecnologías, links).
2. Ajustes visuales globales: **`src/app/globals.css`** y tokens en el `layout`.
3. Para **favicon** u **imagen Open Graph**, colocá archivos en **`public/`** y referenciá según la [documentación de metadata de Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

## Licencia

El código de este repositorio es de uso personal del autor. Si reutilizás partes del proyecto, un crédito o enlace al repo es bienvenido.

---

**Víctor Roberto Curzio** — Desarrollador Full Stack · La Plata, Argentina
