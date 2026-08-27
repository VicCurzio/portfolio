<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project memory

La memoria de este proyecto vive en el vault memory-ia:

    C:\Users\Vic\Downloads\memory-ia\IT\Projects\Portfolio\00 Overview.md

Empezá ahí; seguí los links y abrí solo lo que necesites. Nunca leas el vault
entero ni le hagas grep global.

Al terminar: registrá el trabajo en `IT/Projects/Portfolio/Worklog/YYYY-MM-DD.md`
y promové los cambios durables a las notas del hub (ver `AGENTS.md` del vault).

## Estilo de trabajo

Priorizá el bajo consumo de tokens. Hacé el cambio pedido y nada más — no corras
tests, no levantes el server, no verifiques en browser salvo que se pida
explícitamente. Eso lo prueba viku.

Nunca uses emojis (ni en código, comentarios, notas o commits). No agregues
líneas de co-autoría en los commits.

## Estándares del repo

Piso mínimo y entrega, definidos en el vault:

- `Templates\Repo-Standards.md` — README de cinco minutos, `.env.example` con
  validación al arrancar, verificación automática antes de que el código entre,
  logs útiles, fechas en UTC.
- `Templates\Release-and-Changelog.md` — Conventional Commits, versión
  semántica con etiqueta de git, `CHANGELOG.md` escrito para quien lo usa.

Qué NO aplica acá y por qué: es un sitio estático sin backend ni variables de
entorno, así que no van `/health`, identificador de pedido ni tabla de errores.
Meter un patrón sin el problema que lo justifica es el error que la nota de
kickoff manda evitar.
