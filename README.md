# Portfolio — Victor Roberto Curzio

Sitio personal pensado como carta de presentación: una sola página clara, rápida
y fácil de mantener. El foco está en experiencia real en producción, stack actual
y forma de contacto directo.

En producción: <https://viccurzio.github.io/portfolio/>

## Requisitos

| | |
|---|---|
| Node | 20 o superior |
| Base de datos | no usa |
| Servicios externos | ninguno (no hay variables de entorno) |

## Puesta en marcha (local, en cinco minutos)

```bash
git clone https://github.com/VicCurzio/portfolio.git && cd portfolio
npm install
npm run dev
```

Abre en <http://localhost:3000/portfolio> — la ruta lleva el prefijo `/portfolio`
porque es la carpeta bajo la que se publica en GitHub Pages.

Para ver el resultado tal como sale publicado:

```bash
npm run build     # genera el HTML estático en out/
npx serve out     # o cualquier servidor de archivos
```

## Verificación

No hay suite de tests: es una página estática sin lógica: lo que puede romperse
es el tipado o el build, y de eso se ocupan estos dos comandos.

```bash
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Los dos corren en GitHub Actions en cada push y en cada pull request, y el
despliegue depende de que pasen: un commit que no compila no se publica.

## Cómo se despliega

Automático. Al pushear a `main`, el workflow `.github/workflows/deploy.yml`
verifica, compila el sitio estático y lo sube a GitHub Pages. No hay paso manual.

Después de cada publicación, `.github/workflows/lighthouse.yml` mide el sitio ya
publicado (rendimiento, accesibilidad, buenas prácticas y SEO) contra el
presupuesto de `.github/lighthouse-budget.json`. Es una medición, no una
barrera: el sitio se publica igual. Sirve para tener el número por escrito y
enterarse si un día se cae, en vez de descubrirlo cuando alguien se queja de que
carga lento.

## Decisiones

- **Next.js con `output: export`.** Es un sitio estático, no una SPA: el HTML se
  genera en el build y llega listo al navegador. Eso da el mejor tiempo de carga
  posible y, sobre todo, contenido indexable — para una carta de presentación,
  que el buscador lea el texto sin ejecutar JavaScript no es un detalle. A cambio
  se pierden las partes de Next que necesitan servidor (rutas de API, imágenes
  optimizadas al vuelo), y ninguna hace falta acá.
- **Tailwind CSS** para no acumular CSS suelto que nadie vuelve a tocar.
- **Contenido separado del layout.** Todo el texto vive en `src/content/`, así
  actualizar el CV es editar datos y no perseguir strings dentro del JSX. Al ser
  archivos TypeScript, un campo mal escrito lo agarra el chequeo de tipos.
- **Datos estructurados (`schema.org/Person`)** en el layout: es lo que le dice
  al buscador que esta página es una persona con un puesto y un lugar.

## Estructura del código

```text
src/
  app/                 # rutas, estilos globales, sitemap y robots
  content/
    portfolio.ts       # perfil, experiencia, skills, formación
    projects.ts        # proyectos mostrados
    site.ts            # dirección pública del sitio
  components/
    home/              # composición de la página
    layout/            # shell visual y navegación
    sections/          # hero, experiencia, skills, formación, proyectos, contacto
public/                # assets estáticos
```

`HomePage` arma la pantalla; `PageShell` concentra fondo y capas decorativas, así
las secciones solo se ocupan de su contenido.

## Para actualizar el contenido

1. Editá `src/content/portfolio.ts` y `src/content/projects.ts`.
2. Ajustes visuales globales: `src/app/globals.css`.
3. Anotá el cambio en `CHANGELOG.md`, bajo "Sin publicar".

## Entrega y versiones

Mensajes de commit con [Conventional Commits](https://www.conventionalcommits.org/es/)
(`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`) y versiones semánticas.
Para cerrar una versión:

```bash
npm run release -- minor --tag   # sube package.json, fecha el CHANGELOG y crea el tag
```

## Pendiente

- Imagen para compartir (Open Graph): falta un PNG de 1200x630 en `public/`.
  Hasta que exista, al compartir el link se ve el título y la descripción, sin
  imagen.

## Project memory

La memoria de este proyecto vive en el vault memory-ia:

    C:\Users\Vic\Downloads\memory-ia\IT\Projects\Portfolio\00 Overview.md

Empezá ahí; seguí los links y abrí solo lo que necesites. Al terminar: registrá
el trabajo en `Worklog/YYYY-MM-DD.md` y promové los cambios durables a las notas
del hub (ver `AGENTS.md` del vault).

---

**Victor Roberto Curzio** — Desarrollador Full Stack · La Plata, Argentina
· [victor.curzio@hotmail.com](mailto:victor.curzio@hotmail.com)
