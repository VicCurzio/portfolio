export const profile = {
  name: "Victor Roberto Curzio",
  shortName: "Victor R. Curzio",
  title: "Desarrollador Full-Stack",
  subtitle: "Arquitectura de Software",
  // `intro` es lo que dice el inicio del sitio: dos frases. `tagline` es el
  // resumen completo y lo usa el CV.
  intro:
    "Arquitectura de software e integridad de datos. Llevé a producción un sistema de gestión en Grupo DELSUD y hoy soy líder técnico de 2winGs.",
  tagline:
    "Foco en arquitectura de software e integridad de datos. En Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero un sistema de gestión administrativo-contable, lo conecté con un CRM existente mediante una arquitectura dual-DB y lo llevé a producción. En paralelo, líder técnico de 2winGs, una plataforma B2B de talento que construyo de punta a punta: arquitectura, infraestructura, seguridad y diseño.",
  location: "La Plata, Argentina",
  email: "victor.curzio@hotmail.com",
  phone: "+54 221 542 4585",
  linkedin: "https://linkedin.com/in/victor-roberto-curzio/",
  github: "https://github.com/VicCurzio",
  website: "https://viccurzio.github.io/portfolio/",
  // Lo genera `npm run cv` y lo deja en public/. La ruta va sin prefijo: se lo
  // agrega asset() de content/site.ts, que sabe si estamos en desarrollo o en
  // GitHub Pages.
  cv: "/CV_Victor_Curzio.pdf",
} as const;

export const experience = [
  {
    company: "Grupo DELSUD",
    role: "Desarrollador Full-Stack",
    period: "Ene 2026 — Actualidad",
    location: "La Plata, Argentina",
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "MySQL",
      "PostgreSQL",
      "Sequelize",
      "Drizzle",
      "Socket.io",
      "Sass",
      "Material UI",
      "GitLab",
      "GitLab CI",
      "Amazon S3",
      "Google Drive API",
      "Trello",
    ],
    highlights: [
      "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket, versionado en un GitLab self-hosted y desplegado por sus pipelines de GitLab CI.",
      "Ahí desarrollo el ERP de Direcciones y el tablero de tareas de Producto y Tecnología (React 19, micro-frontends embebidos por iframe con postMessage), tomando reportes de QA hasta cerrarlos verificados en la app.",
      "Construí de punta a punta el módulo de trackeo de jornada: 14 endpoints, registro inmutable append-only, permisos por rol, actualización en vivo por sockets y un control flotante que opera la jornada desde cualquier pantalla del ERP, con el tramo colgando del proyecto y la tarea opcional.",
      "Cerré una auditoría transversal del ecosistema de microservicios: cada hallazgo abierto re-verificado uno por uno, y tres cerrados decidiendo que no se hacen, porque lo que necesita acceso a infraestructura o tocar producción no lo decide este equipo.",
      "Preparé cinco backends para la entrega a producción: chequeo de documentación exigido en cada uno, un diagrama de schema por base, colecciones de API, READMEs y ejemplos de entorno completos, y una base muerta y una variable muerta borradas.",
      "Cuando el proveedor de archivos dejó de estar disponible, pasé las subidas a un segundo proveedor detrás de un driver de almacenamiento que se elige con una sola variable de entorno, sin cambios de código para volver atrás.",
      "Diseñé desde cero la arquitectura del Sistema de Gestión de Desarrollos Del Sud (20 módulos: contratos, cobranza, flujo de caja, IPC, reportes) y lo llevé a producción en agosto de 2026: dual-DB que conecta el CRM existente (Sequelize, ~25 modelos) con el nuevo sistema (Drizzle ORM), con sincronización bidireccional automática. Hoy lo operan 15 personas entre asesores, administración y cobranza, sobre más de 200 contratos.",
      "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave. Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación concurrente de registros, y bajé las consultas más pesadas de 3 segundos a 0,6.",
    ],
  },
  {
    company: "2winGs International Group LLC",
    role: "Desarrollador Full-Stack y Líder Técnico (Freelance)",
    period: "Ago 2026 — Actualidad",
    location: "Remoto",
    stack: [
      "TypeScript",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "Drizzle",
      "Redis",
      "BullMQ",
      "React",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Pages",
      "Cloudflare R2",
      "Cloudflare Access",
      "PM2",
      "nginx",
      "GitHub Actions",
      "Playwright",
    ],
    highlights: [
      "Diseñé la arquitectura y el orden de construcción de una red profesional B2B de talento creativo, del modelo de datos al contrato de la API, y la entregué de punta a punta: registro e ingreso con verificación de correo y recuperación de contraseña; el perfil del talento; un flujo de validación con cola de revisión, niveles y avisos por correo; reputación y XP con ranking semanal, configurable en base de datos; y un espacio donde las empresas publican retos.",
      "Back office para el equipo interno, desplegado detrás de Cloudflare Access: autentica con la identidad que firma Access y no tiene formulario de login propio.",
      "Infraestructura y despliegue automático: panel en Cloudflare Pages y API en un servidor propio bajo PM2 detrás de nginx, con un pipeline en GitHub Actions que compila fuera del servidor, copia el artefacto por SSH, corre las migraciones y recién después reinicia. Staging se publica solo y producción se pide: el último paso de un release lo da una persona, por diseño. La base se copia a diario hacia otro proveedor, sellada contra una clave pública, y la copia se restauró contra una base descartable para comprobar que sirve.",
      "Dos auditorías de seguridad completas con todos los hallazgos cerrados y verificados en vivo: límite de intentos en Redis, política de contenido y cabeceras en los dos fronts, SSH endurecido a solo claves y autenticación de correo (SPF, DKIM y DMARC) verificada en producción. La privacidad se impone en la capa de datos, no en la interfaz.",
      "End-to-end en Playwright contra el build como suite principal, con piso de cobertura exigido en cada workspace dentro del gate, un linter de capas propio que rompe el build cuando un módulo cruza su frontera, y la etiqueta WCAG 2.2 AA en las suites de accesibilidad.",
      "Sistema de diseño del front: tokens nombrados por función en un único archivo, mobile-first. Cuando el cliente definió la identidad de marca, entró cambiando tokens: 52 literales de color colapsados en una sola variable.",
    ],
  },
  {
    company: "Cognitive Link — Consulting & IT Solutions",
    role: "Desarrollador Full-Stack",
    period: "Mar 2025 — May 2026",
    location: "La Plata, Argentina",
    stack: ["Next.js 14", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    highlights: [
      "Construí desde cero una plataforma SaaS multi-tenant (comercial y clínica), extendiendo el modelo relacional base a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles. Llegó a producción con 5 negocios operando en paralelo sobre la misma instancia.",
      "Integraciones con el SDK de Mercado Pago y la API de Google Calendar (OAuth 2.0) para la gestión automática de turnos y pagos.",
      "Tareas programadas (cron jobs) para el envío automático de notificaciones y recordatorios a los usuarios.",
      "Despliegue continuo: configuración y gestión autónoma de los entornos productivos en Vercel.",
    ],
  },
  {
    company: "Cicaré",
    role: "Desarrollador Full-Stack (Freelance)",
    period: "Mar 2025 — Ago 2025",
    location: "Saladillo, Argentina",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    highlights: [
      "Diseño e implementación de una arquitectura escalable con autenticación y gestión de permisos para una plataforma con información confidencial.",
      "Full stack end-to-end: persistencia en Supabase, endpoints y flujos de aprobación administrativa.",
      "Estructura jerárquica de contenidos con filtros de búsqueda avanzados y personalizables.",
      "Automatización de notificaciones clave y mejoras de interfaz para una navegación más eficiente.",
    ],
  },
  {
    company: "Felanix Construcciones",
    role: "Desarrollador Full-Stack",
    period: "Sep 2023 — Sep 2024",
    location: "La Plata, Argentina",
    stack: ["Ruby on Rails", "Active Record", "PostgreSQL", "Docker", "JavaScript", "Bootstrap", "Trello"],
    highlights: [
      "Automaticé procesos clave de un sistema de gestión de obras que antes se hacían a mano, acortando el tiempo de procesamiento de tareas.",
      "Desarrollé la lógica de negocio central aplicando Scrum para la coordinación de tiempos y requisitos.",
      "Gestión de tiempos y requisitos, asegurando el cumplimiento de los plazos del proyecto.",
      "Soporte técnico integral: incidencias de hardware y software para garantizar la continuidad operativa.",
    ],
  },
] as const;

export const education = {
  degree: "Licenciatura en Sistemas",
  school: "Universidad Nacional de La Plata (UNLP)",
  period: "Dic 2023 — Actualidad",
  location: "La Plata, Argentina",
  // `detail` sale solo en la pagina; el CV imprime la linea corta de arriba.
  detail:
    "Carrera de cinco años en la Facultad de Informática (plan 2021): 37 materias y tesina final. La curso en paralelo al trabajo full time. Lo que busco ahí es la base que el día a día no da: algoritmos, concurrencia, sistemas operativos y bases de datos.",
} as const;

export const skills = {
  frontend: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Material UI", "Sass", "Bootstrap", "PWA"],
  backend: ["Node.js", "Express.js", "NestJS", "TypeScript", "Ruby on Rails", "Python"],
  databases: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"],
  architecture: ["Dual-DB", "RBAC", "Microservicios", "CI/CD (GitLab CI, GitHub Actions)", "Migraciones", "Clean Code"],
  infrastructure: ["Docker", "PM2", "nginx", "Linux", "GitLab CI", "GitHub Actions", "DigitalOcean", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"],
  tools: ["Git", "GitLab", "GitHub", "Trello", "Postman", "Playwright", "Vitest", "DBeaver"],
} as const;

export const skillGroups = [
  { title: "Front-end", items: skills.frontend },
  { title: "Back-end", items: skills.backend },
  { title: "Bases de datos", items: skills.databases },
  { title: "Arquitectura", items: skills.architecture },
  { title: "Infraestructura", items: skills.infrastructure },
  { title: "Herramientas", items: skills.tools },
] as const;

export const softSkills = [
  "Pensamiento analítico",
  "Comunicación clara",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Iniciativa",
] as const;

export const languages = [
  { name: "Español", level: "Nativo", detail: "", note: "" },
  // `level` es el titulo en la pagina; el CV lo imprime seguido de `detail`.
  // `note` sale solo en la pagina, despues del detalle.
  { name: "Inglés", level: "Intermedio (B1)", detail: "lectura y escritura técnica a diario", note: "conversación en mejora" },
] as const;

export const courses = [
  "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
  "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
  "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
  "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
  "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
  "Git y GitHub — Alura Latam (Abr. 2023)",
] as const;
