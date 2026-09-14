<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Estándares del repo

- README que deja el proyecto andando en cinco minutos.
- Verificación automática antes de publicar: lint y chequeo de tipos.
- Versión semántica con etiqueta de git y `CHANGELOG.md` escrito para quien lo
  lee, con los cambios bajo "Sin publicar" hasta cerrar la versión.

Qué NO aplica acá y por qué: es un sitio estático sin backend ni variables de
entorno, así que no van `/health`, identificador de pedido ni tabla de errores.
Meter un patrón sin el problema que lo justifica solo agrega código que mantener.
