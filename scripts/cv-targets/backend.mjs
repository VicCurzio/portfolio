// Variante del CV orientada a busquedas de Backend (Node.js + TypeScript).
//
//   npm run cv:backend        ->   cv/CV_Victor_Curzio_Backend.pdf
//   npm run cv -- backend en  ->   cv/CV_Victor_Curzio_Backend_EN.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: el resto
// (contacto, formacion, fechas y las experiencias que ya se leen como back)
// sale del mismo contenido que el sitio. Los `highlights` estan reordenados y
// recortados, no inventados: empiezan por lo que le importa a quien busca un back.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Backend",
    subtitle: "Node.js · TypeScript · Arquitectura",
    tagline:
      "Tres años de experiencia construyendo APIs y sistemas de datos en producción con Node.js y TypeScript, con foco en arquitectura e integridad de datos. En Grupo DELSUD fui referente técnico de un equipo de 5 personas y llevé a producción un sistema de gestión administrativo-contable conectado a un CRM existente mediante una arquitectura dual-DB. En paralelo, líder técnico de 2winGs, una plataforma B2B que construyo de punta a punta: API, infraestructura y seguridad.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: ["Node.js", "TypeScript", "Express.js", "MySQL", "PostgreSQL", "Sequelize", "Drizzle", "Socket.io", "GitLab", "GitLab CI", "Amazon S3", "React", "Trello"],
      highlights: [
        "Desarrollos Del Sud: diseñé desde cero la arquitectura del Sistema de Gestión (20 módulos: contratos, cobranza, flujo de caja, IPC, reportes) y llevé la plataforma de venta de lotes en cuotas a producción en agosto de 2026. Hoy la operan 15 personas entre asesores, administración y cobranza, sobre más de 200 contratos.",
        "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
        "Saneé el código heredado del CRM para reutilizarlo en un producto nuevo: consultas SQL (N+1 y selects sin lista de campos), variables de entorno, dependencias sin uso y código muerto.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
        "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket, versionados en un GitLab self-hosted y desplegados por sus pipelines de GitLab CI.",
        "Ahí construí de punta a punta el módulo de trackeo de jornada: 14 endpoints y un registro inmutable append-only en el backend, con permisos por rol y actualización en vivo por sockets; además bajé de 3 segundos a 0,6 las consultas más pesadas, indexándolas.",
        "Cerré una auditoría transversal del ecosistema de microservicios, con cada hallazgo abierto re-verificado uno por uno, y preparé cinco backends para la entrega a producción: chequeo de documentación exigido en cada uno, un diagrama de schema por base, colecciones de API y ejemplos de entorno completos.",
        "Cuando el proveedor de archivos dejó de estar disponible, pasé las subidas a un segundo proveedor detrás de un driver de almacenamiento que se elige con una sola variable de entorno, sin cambios de código para volver atrás.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Cloudflare R2", "PM2", "React"],
      highlights: [
        "Diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
        "API en NestJS sobre Fastify con Drizzle y PostgreSQL, y trabajos en segundo plano con BullMQ y Redis: entregados de punta a punta el registro e ingreso con verificación de correo y recuperación de contraseña, el perfil del talento, la validación con cola de revisión y niveles, la reputación con ranking semanal y el espacio de empresa, más un back office interno detrás de Cloudflare Access.",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Seguridad: archivos privados con URLs firmadas de vida corta, e identificador de operación en toda escritura para que un reintento no duplique el efecto.",
        "Planes, precios, límites, permisos y pesos del índice de reputación viven en base de datos, sin valores fijos en el código.",
        "Infraestructura y despliegue automático: API y worker en producción en un servidor propio bajo PM2, panel en Cloudflare Pages y el build siempre fuera de la máquina de producción.",
        "Despliegue automatizado en GitHub Actions: compila fuera del servidor, copia el artefacto por SSH, corre las migraciones y recién después reinicia, con nginx de reverse proxy delante de la API y dos entornos separados con HTTPS. La base se copia a diario hacia otro proveedor, y la copia se restauró contra una base descartable para comprobar que sirve.",
        "Dos auditorías de seguridad completas con todos los hallazgos cerrados y verificados en vivo: límite de intentos en Redis, SSH endurecido a solo claves y autenticación de correo (SPF, DKIM y DMARC) verificada en producción.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Arquitectura", items: ["Dual-DB", "APIs REST", "Microservicios", "RBAC", "CI/CD (GitLab CI, GitHub Actions)", "Migraciones", "Clean Code"] },
    { title: "Infraestructura", items: ["Linux", "Docker", "PM2", "nginx", "GitHub Actions", "BullMQ", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Herramientas", items: ["Git", "GitLab", "GitHub", "Trello", "Postman", "Playwright", "Vitest", "DBeaver"] },
  ],

  // Mismo listado del CV general, con los de back primero.
  courses: [
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const en = {
  profile: {
    title: "Back-end Developer",
    subtitle: "Node.js · TypeScript · Architecture",
    tagline:
      "Three years of experience building APIs and data systems in production with Node.js and TypeScript, focused on architecture and data integrity. At Grupo DELSUD I was the technical reference for a team of 5 and took to production an administrative and accounting management system connected to an existing CRM through a dual-database architecture. In parallel, tech lead of 2winGs, a B2B platform I build end to end: API, infrastructure and security.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: ["Node.js", "TypeScript", "Express.js", "MySQL", "PostgreSQL", "Sequelize", "Drizzle", "Socket.io", "GitLab", "GitLab CI", "Amazon S3", "React", "Trello"],
      highlights: [
        "Desarrollos Del Sud: designed the architecture of the Management System from scratch (20 modules: contracts, collections, cash flow, inflation indexing, reporting) and took the platform for selling plots in instalments to production in August 2026. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
        "Dual-database architecture: connected the existing CRM (Sequelize, ~25 models) with the new Management System (Drizzle ORM), with automatic two-way data synchronisation.",
        "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between systems.",
        "Access control (RBAC): token verification and role authorisation middlewares, protecting every endpoint according to the user profile.",
        "Cleaned up the inherited CRM code so it could be reused in a new product: SQL queries (N+1 and selects without a field list), environment variables, unused dependencies and dead code.",
        "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions together with the tech lead.",
        "Currently on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket, versioned in a self-hosted GitLab and deployed by its GitLab CI pipelines.",
        "There I built the workday time-tracking module end to end: 14 endpoints and an immutable append-only log on the backend, with role-based permissions and live updates over sockets; I also took the heaviest queries from 3 seconds down to 0.6 by indexing them.",
        "Closed out a system-wide audit across the microservice ecosystem, with every open finding re-verified one by one, and prepared five backends for the production handover: a documentation check enforced in each one, a schema diagram per database, API collections and complete environment examples.",
        "When the file storage provider became unavailable, moved uploads to a second provider behind a storage driver selected by a single environment variable, with no code changes to switch back.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Cloudflare R2", "PM2", "React"],
      highlights: [
        "Designed the architecture and build order of the product, from the data model to the API contract, written down as technical decisions before any code.",
        "API in NestJS on Fastify with Drizzle and PostgreSQL, and background jobs with BullMQ and Redis: delivered end to end sign-up and sign-in with email verification and password recovery, the talent profile, validation with a review queue and levels, reputation with a weekly ranking and the company space, plus an internal back office behind Cloudflare Access.",
        "Privacy rules enforced in the data layer instead of the interface: a company reaches a full profile only for someone who applied to its opening.",
        "Security: private files behind short-lived signed URLs, and an operation id on every write so a retry cannot duplicate its effect.",
        "Plans, prices, limits, permissions and reputation index weights live in the database, with no hard-coded values.",
        "Infrastructure and automated deployment: API and worker live on a dedicated server under PM2, dashboard on Cloudflare Pages, and the build always outside the production machine.",
        "Automated deployment on GitHub Actions: it builds off the server, copies the artifact over SSH, runs the migrations and only then restarts, with nginx as a reverse proxy in front of the API and two separate environments over HTTPS. The database is dumped daily to another provider, and the dump was restored against a throwaway database to prove it works.",
        "Two full security audits with every finding closed and verified live: rate limiting moved to Redis, SSH hardened to keys only, and mail authentication (SPF, DKIM and DMARC) verified in production.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Architecture", items: ["Dual-DB", "REST APIs", "Microservices", "RBAC", "CI/CD (GitLab CI, GitHub Actions)", "Migrations", "Clean Code"] },
    { title: "Infrastructure", items: ["Linux", "Docker", "PM2", "nginx", "GitHub Actions", "BullMQ", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Tools", items: ["Git", "GitLab", "GitHub", "Trello", "Postman", "Playwright", "Vitest", "DBeaver"] },
  ],

  courses: [
    "Database Administration (MySQL) — Buenos Aires Ministry of Education (Nov. 2023)",
    "GNU/Linux Server Administration (Security) — Buenos Aires Ministry of Education (Dec. 2023)",
    "Professional Ruby on Rails Course — Código Facilito (Nov. 2023)",
    "Java OOP Bootcamp — Alkemy (Apr. 2024)",
    "React Front-end Development Track — Coderhouse (Feb.–Jul. 2023)",
    "Git and GitHub — Alura Latam (Apr. 2023)",
  ],
};

const target = { suffix: "Backend", es, en };

export default target;
