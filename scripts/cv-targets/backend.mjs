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
      stack: ["Node.js", "TypeScript", "Express.js", "MySQL", "PostgreSQL", "Sequelize", "Drizzle", "Socket.io", "Amazon S3", "React"],
      highlights: [
        "Desarrollos Del Sud: llevé a producción la plataforma de venta de lotes en cuotas (CRM, Sistema de Gestión y web institucional), con entrega en agosto de 2026.",
        "Diseñé desde cero la arquitectura del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes, entre otros).",
        "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
        "Saneé el código heredado del CRM para reutilizarlo en un producto nuevo: consultas SQL (N+1 y selects sin lista de campos), variables de entorno, dependencias sin uso y código muerto.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
        "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Cloudflare R2", "PM2", "React"],
      highlights: [
        "Diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
        "API en NestJS sobre Fastify con Drizzle y PostgreSQL, y trabajos en segundo plano con BullMQ y Redis: primera etapa entregada de punta a punta (registro, ingreso, verificación de correo y recuperación de contraseña).",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Seguridad: archivos privados con URLs firmadas de vida corta, e identificador de operación en toda escritura para que un reintento no duplique el efecto.",
        "Planes, precios, límites, permisos y pesos del índice de reputación viven en base de datos, sin valores fijos en el código.",
        "Infraestructura: API y worker en un servidor propio bajo PM2, front estático en Cloudflare Pages y el build siempre fuera de la máquina de producción.",
        "Análisis técnico y regulatorio de la custodia de fondos del roadmap: se resuelve sobre un procesador licenciado y el dinero se modela como asientos que no se editan desde el primer esquema.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Arquitectura", items: ["Dual-DB", "APIs REST", "Microservicios", "RBAC", "Migraciones", "Clean Code"] },
    { title: "Infraestructura", items: ["Docker", "PM2", "BullMQ", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Herramientas", items: ["Git", "GitHub", "Postman", "Vitest", "DBeaver"] },
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
      stack: ["Node.js", "TypeScript", "Express.js", "MySQL", "PostgreSQL", "Sequelize", "Drizzle", "Socket.io", "Amazon S3", "React"],
      highlights: [
        "Desarrollos Del Sud: took the platform for selling plots in instalments to production (CRM, Management System and public website), delivered in August 2026.",
        "Designed the architecture of the Management System from scratch, with 20 functional modules (contracts, collections, cash flow, inflation indexing, reporting, among others).",
        "Dual-database architecture: connected the existing CRM (Sequelize, ~25 models) with the new Management System (Drizzle ORM), with automatic two-way data synchronisation.",
        "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between systems.",
        "Access control (RBAC): token verification and role authorisation middlewares, protecting every endpoint according to the user profile.",
        "Cleaned up the inherited CRM code so it could be reused in a new product: SQL queries (N+1 and selects without a field list), environment variables, unused dependencies and dead code.",
        "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions together with the tech lead.",
        "Currently on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Cloudflare R2", "PM2", "React"],
      highlights: [
        "Designed the architecture and build order of the product, from the data model to the API contract, written down as technical decisions before any code.",
        "API in NestJS on Fastify with Drizzle and PostgreSQL, and background jobs with BullMQ and Redis: first stage delivered end to end (sign-up, sign-in, email verification and password recovery).",
        "Privacy rules enforced in the data layer instead of the interface: a company reaches a full profile only for someone who applied to its opening.",
        "Security: private files behind short-lived signed URLs, and an operation id on every write so a retry cannot duplicate its effect.",
        "Plans, prices, limits, permissions and reputation index weights live in the database, with no hard-coded values.",
        "Infrastructure: API and worker on a dedicated server under PM2, static front end on Cloudflare Pages, and the build always outside the production machine.",
        "Technical and regulatory analysis of the fund custody in the roadmap: built on top of a licensed processor, with money modelled as entries that are never edited from the very first schema.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Architecture", items: ["Dual-DB", "REST APIs", "Microservices", "RBAC", "Migrations", "Clean Code"] },
    { title: "Infrastructure", items: ["Docker", "PM2", "BullMQ", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Tools", items: ["Git", "GitHub", "Postman", "Vitest", "DBeaver"] },
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
