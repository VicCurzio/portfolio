# Changelog

Historial de cambios del portfolio.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/);
las versiones siguen [SemVer](https://semver.org/lang/es/).

Este repo no muestra las novedades en pantalla — es un sitio de presentación,
no una herramienta con usuarios que vuelven. El changelog es para llevar la
cuenta de qué se tocó y cuándo. Se cierra una versión con `npm run release`.

## [Sin publicar]

### Agregado

- Intro animada al arrancar, en el estilo de la pantalla de presentación de una consola de 8 bits: ciudad de noche con los créditos subiendo, paneo por una torre y pantalla de título. Dura nueve segundos, se saltea con el botón de la esquina y no aparece si el sistema pide menos movimiento. Queda un botón en la barra de arriba para volver a verla.
- Pantalla de selección de proyectos: nueve celdas con el perfil al centro, cursor que se mueve con las flechas del teclado y cartel con el nombre abajo. Lleva a la tarjeta del proyecto, que sigue estando en la página.
- Favicon propio, una V en pixel art. Se genera con `npm run favicon` desde el mismo dibujo que usa el sitio, sin dependencias.
- El CV se descarga desde el sitio: botón en la portada y link en Contacto. El archivo se genera con `npm run cv` a partir del mismo contenido que muestra la página, así el CV y el portfolio no pueden decir cosas distintas.
- El pie de Contacto suma GitHub, que antes no figuraba en ningún lado.
- SGD, el sistema de gestión interno de Grupo Delsud, en la lista de repositorios donde participo como colaborador.
- Sitemap, robots y datos estructurados (schema.org/Person): los buscadores ahora leen la página como una persona con puesto y lugar, no como texto suelto.
- Verificación automática antes de publicar: el linter y el chequeo de tipos corren en cada push y en cada pull request, y el despliegue depende de que pasen.
- README con puesta en marcha, verificación, despliegue y las decisiones técnicas del proyecto.
- Medición automática con Lighthouse después de cada publicación, con presupuesto de carga y de peso.
- Sección de proyectos: qué es cada uno, qué hice y cómo está resuelto, más una lista de repositorios donde participé como colaborador.
- PWA y Vitest en la lista de habilidades.

### Cambiado

- El sitio entero pasa al estilo de 8 bits: ventanas de borde duro, botones que se hunden al apretarlos, menú de contacto con cursor y líneas de barrido sobre toda la página. Antes era una intro linda pegada a un sitio que no tenía nada que ver.
- Tipografía nueva: Press Start 2P para títulos y controles, VT323 para el texto. Se van Bricolage Grotesque y DM Sans.
- El nombre visible del sitio es "Victor R. Curzio".
- Al tocar un ítem del menú, la página se desliza hasta la sección en vez de saltar.
- La tarjeta de Desarrollos Del Sud se corrigió contra los repos: son cinco y no siete, el Sistema de Gestión figura como terminado, el CRM usa TanStack Query y no Redux, y lo de GitLab es un despliegue automático, no integración continua. Se sacó la mención a paquetes compartidos, que no existen.
- Musik actualizado con todo lo que se le sumó: volumen parejo, letras, listas automáticas, integración con el sistema y aviso de novedades. Se corrigió el stack: es JavaScript, no TypeScript.
- Dial Sport y Bot de WhatsApp mencionan su sistema de novedades.

### Arreglado

- En desarrollo, `localhost:3000` devolvía 404: el prefijo `/portfolio`, que existe solo porque GitHub Pages sirve el sitio en un subdirectorio, se aplicaba también en local. Ahora se agrega únicamente al compilar.

## [0.1.0] - 2026-08-06

### Agregado

- Sitio personal: presentación, experiencia, stack y contacto.
- Workflow de GitHub Actions para el deploy automático.
