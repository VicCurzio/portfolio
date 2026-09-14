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
- Pantalla de selección de proyectos: celdas con el perfil al centro, cursor que se mueve con las flechas del teclado y cartel con el nombre abajo. Lleva a la tarjeta del proyecto, que sigue estando en la página. Las filas salen de la cantidad de proyectos, así uno nuevo no se pierde.
- Favicon propio, una V en pixel art. Se genera con `npm run favicon` desde el mismo dibujo que usa el sitio, sin dependencias.
- El CV se descarga desde el sitio: botón en la portada y link en Contacto. El archivo se genera con `npm run cv` a partir del mismo contenido que muestra la página, así el CV y el portfolio no pueden decir cosas distintas.
- El pie de Contacto suma GitHub, que antes no figuraba en ningún lado.
- SGD, el sistema de gestión interno de Grupo DELSUD, en la lista de repositorios donde participo como colaborador.
- Sitemap, robots y datos estructurados (schema.org/Person): los buscadores ahora leen la página como una persona con puesto y lugar, no como texto suelto.
- Verificación automática antes de publicar: el linter y el chequeo de tipos corren en cada push y en cada pull request, y el despliegue depende de que pasen.
- README con puesta en marcha, verificación, despliegue y las decisiones técnicas del proyecto.
- Medición automática con Lighthouse después de cada publicación, con presupuesto de carga y de peso.
- Sección de proyectos: qué es cada uno, qué hice y cómo está resuelto, más una lista de repositorios donde participé como colaborador.
- PWA y Vitest en la lista de habilidades.
- Versión en inglés del sitio en `/en`, con botón para cambiar de idioma que conserva la sección en la que estabas. Cada idioma descarga su CV.
- Tema claro, con botón para cambiarlo; sin elegir nada, sigue la preferencia del sistema.
- CV en tres variantes (completo, Front-end y Back-end) y en dos idiomas: `npm run cv:all` genera los seis.
- Cuadro de diálogo en la selección de proyectos, al estilo de Mega Man X: el resumen del proyecto se escribe letra por letra junto al retrato. Con el sistema pidiendo menos movimiento, aparece entero.
- Imagen para compartir el link en redes y mensajería, una por idioma, generada con `npm run og`.
- Tarjetas de 2winGs y CV Match, y 2winGs como experiencia en el CV.
- "Escribime" y el mail de Contacto, además de abrir el correo, copian la dirección y avisan "Mail copiado": a quien usa el correo desde el navegador el enlace solo no le abría nada.

### Cambiado

- El sitio entero pasa al estilo de 8 bits: ventanas de borde duro, botones que se hunden al apretarlos, menú de contacto con cursor y líneas de barrido sobre toda la página. Antes era una intro linda pegada a un sitio que no tenía nada que ver.
- Tipografía nueva: Press Start 2P para títulos y controles, VT323 para el texto. Se van Bricolage Grotesque y DM Sans.
- El nombre visible del sitio es "Victor R. Curzio".
- Al tocar un ítem del menú, la página se desliza hasta la sección en vez de saltar.
- La tarjeta de Desarrollos Del Sud se corrigió contra los repos: son cinco y no siete, el Sistema de Gestión figura como terminado, el CRM usa TanStack Query y no Redux, y lo de GitLab es un despliegue automático, no integración continua. Se sacó la mención a paquetes compartidos, que no existen.
- Musik actualizado con todo lo que se le sumó: volumen parejo, letras, listas automáticas, integración con el sistema y aviso de novedades. Se corrigió el stack: es JavaScript, no TypeScript.
- Dial Sport y Bot de WhatsApp mencionan su sistema de novedades.
- Experiencia al día: Desarrollos Del Sud contado en pasado y con su entrega en agosto de 2026, y el SGD en presente. Felanix sin "(Pasantía)" y "Full-Stack" escrito igual en todos lados.
- Dashboard Financiero, Landing Grupo DELSUD y Job Alerts pasan de tarjeta a la lista de otros repositorios: arriba quedan ocho proyectos. "Este portfolio" pasa a llamarse "Portfolio".
- La empresa se escribe "Grupo DELSUD" en todos lados, y la tarjeta de Desarrollos Del Sud la nombra.
- Formación con los cursos en su propia tarjeta; habilidades reagrupadas (bases de datos con sus ORMs, infraestructura aparte) y más cortas. En el CV, idiomas y competencias son secciones propias.
- El inicio muestra un resumen de dos frases; el CV sigue con el completo.
- README reescrito contra el estado real del proyecto: qué tiene, requisitos (los scripts que generan archivos piden Node 22.6), archivos generados, cómo actualizar el contenido con sus traducciones y las decisiones técnicas al día.
- Los datos para buscadores suman el perfil de GitHub.
- Los botones muestran un contorno marcado al recibir el foco con el teclado; el anillo por defecto casi no se veía en el tema oscuro.
- Datos al día contra el estado real de cada proyecto: la tarjeta del portfolio describía el sitio de antes del estilo de 8 bits; 2winGs ya tiene el panel y la API desplegados, no solo definidos; CV Match pasó de 282 a más de 300 tests y suma pruebas de punta a punta.
- La ayuda de la selección de proyectos dice "Tocá un proyecto" en pantallas táctiles, donde no hay flechas ni Enter.
- Las bajadas de cada sección entran en una línea en vez de cortarse dejando palabras sueltas, y el pie tiene menos espacio vacío abajo.

### Arreglado

- Se quitó el script `npm run start`: con el sitio exportado como estático, `next start` no funciona.
- La configuración local de Claude Code (`.claude/`) ya no se versiona, y `AGENTS.md` quedó solo con las reglas del proyecto.
- En el tema claro, la selección de proyectos y el diálogo seguían negros, y bordes y sombras usaban el azul del tema oscuro.
- Contraste de texto: algunos grises, el acento y el ámbar del tema claro, y el gris de las ayudas del oscuro, quedaban por debajo de 4,5:1. Ahora todos lo superan sobre cualquier fondo.
- Con el mouse, el primer click en un proyecto no hacía nada (completaba el texto del diálogo); ahora entra directo. Seleccionar texto en el diálogo dejaba ver la parte todavía no escrita.
- La precarga de la página en inglés dejaba un 404 en la consola de cada visita en GitHub Pages.
- El README indicaba abrir `/portfolio` en desarrollo y servir `out/` en la raíz, donde el sitio carga sin estilos.
- En desarrollo, `localhost:3000` devolvía 404: el prefijo `/portfolio`, que existe solo porque GitHub Pages sirve el sitio en un subdirectorio, se aplicaba también en local. Ahora se agrega únicamente al compilar.

## [0.1.0] - 2026-08-06

### Agregado

- Sitio personal: presentación, experiencia, stack y contacto.
- Workflow de GitHub Actions para el deploy automático.
