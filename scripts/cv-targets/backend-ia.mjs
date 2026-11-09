// Variante del CV orientada a busquedas de Backend Node.js con IA aplicada:
// arquitecturas escalables mas trabajo real con LLM (RAG, embeddings, agentes)
// y con agentes de codificacion.
//
//   npm run cv -- backend-ia   ->   cv/CV_Victor_Curzio_Backend_IA.pdf
//
// Nace del aviso de Backend Engineer de octubre de 2026: +4 anios de back,
// Node.js solido, arquitecturas escalables, herramientas de IA / LLMs / agentes
// para automatizar procesos, y autonomia. Sin ingles requerido, asi que la
// variante es solo en espanol.
//
// Esta escrita para que la lea una persona apurada, no un filtro automatico:
//
//   - El estudio de seguimiento ocular de TheLadders (30 reclutadores) encontro
//     que cerca del 80% del tiempo de la primera pasada se va en nombre, puesto
//     y empresa (actual y anterior), fechas y formacion. Por eso el puesto dice
//     "Referente Tecnico" ahi mismo y no enterrado en un bullet.
//   - Formula X-Y-Z de Laszlo Bock (Google, 2014): logro, medida del logro y
//     como se consiguio, con una linea de base que de escala al numero. De ahi
//     que diga "de 3 segundos a 0,6" y no "mejore el rendimiento".
//   - Cada bullet que tiene numero arranca con el numero.
//
// Nota de honestidad, para quien edite esta variante (misma regla que ai.mjs):
// el grupo de skills "IA aplicada" NO sale de un trabajo pago, sale de un
// proyecto propio, y por eso el proyecto esta nombrado en el resumen con todas
// las letras. Los agentes de IA de Grupo DELSUD no los armo Victor y no se
// mencionan aca. La cuenta de anios es la real (Sep 2023 en adelante): el aviso
// pide mas, y eso se habla en el correo, no se arregla inflando el CV. Todo
// numero de aca sale de algo contable; si alguno deja de ser cierto, se saca.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Backend",
    subtitle: "Node.js · TypeScript · Arquitecturas escalables · IA aplicada",
    tagline:
      "Tres años construyendo backend en producción con Node.js y TypeScript, con foco en arquitectura e integridad de datos. En Grupo DELSUD soy referente técnico de un equipo de 5 personas: diseñé desde cero un sistema de gestión de 20 módulos, lo conecté con un CRM de ~25 modelos que ya estaba en producción y lo puse en marcha sin ventana de corte; hoy lo operan 15 personas sobre más de 200 contratos, y bajé sus consultas más pesadas de 3 segundos a 0,6. En paralelo soy líder técnico de 2winGs, una plataforma B2B donde las decisiones de arquitectura son mías: NestJS sobre Fastify, PostgreSQL, colas con Redis y despliegue automatizado. En proyecto propio construí un sistema de preguntas sobre documentación privada (RAG con PostgreSQL y pgvector) sobre 340 notas y 5.338 fragmentos, con una evaluación automática de 34 preguntas que hoy da 89% de acierto y 100% de rechazo correcto cuando la respuesta no está en los documentos. Trabajo todos los días con agentes de codificación, con la especificación escrita antes del código.",
  },

  experience: {
    "Grupo DELSUD": {
      role: "Desarrollador Full-Stack · Referente Técnico",
      stack: ["Node.js", "TypeScript", "Express.js", "NestJS", "PostgreSQL", "MySQL", "Drizzle", "Sequelize", "Socket.io", "GitLab", "GitLab CI", "Docker", "Amazon S3", "React"],
      highlights: [
        "20 módulos funcionales (contratos, cobranza, flujo de caja, indexación por IPC, reportes): diseñé desde cero la arquitectura de un sistema de gestión administrativo-contable y lo llevé a producción. Hoy lo operan 15 personas entre asesores, administración y cobranza, sobre más de 200 contratos.",
        "De 3 segundos a 0,6 las consultas más pesadas del sistema, cinco veces más rápidas: las indexé a partir de la medición y no de la intuición.",
        "Dos bases en un solo producto: conecté el CRM existente (Sequelize, ~25 modelos) con el sistema nuevo (Drizzle ORM) mediante una arquitectura dual-DB con sincronización bidireccional automática, sin ventana de corte para el usuario.",
        "Construí de punta a punta el módulo de trackeo de jornada: 14 endpoints y un registro inmutable append-only que nadie puede editar después del hecho, con permisos por rol.",
        "Equipo de 5 personas (2 devs, UX, QA, PM) del que soy referente técnico: definí los estándares de código, reviso los cambios y participo en las decisiones técnicas clave junto al tech lead.",
        "Arquitectura de microservicios en el ERP interno del grupo: un servicio Node/PostgreSQL por departamento, con notificaciones en tiempo real por WebSocket entre ellos.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre los dos sistemas.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo cada endpoint según el perfil de usuario.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Docker", "nginx", "PM2", "GitHub Actions", "Cloudflare R2"],
      highlights: [
        "Diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado como decisiones técnicas antes de escribir una línea de código.",
        "API en NestJS sobre Fastify con Drizzle y PostgreSQL, y trabajo pesado movido a segundo plano con BullMQ y Redis para que la petición del usuario no espere por él.",
        "Despliegue automatizado con GitHub Actions: compila fuera del servidor, copia el artefacto por SSH, corre las migraciones y recién después reinicia, con nginx de reverse proxy delante de la API y dos entornos separados bajo HTTPS.",
        "Copia de seguridad diaria de la base hacia un proveedor distinto del que aloja el servidor, restaurada contra una base descartable para comprobar que sirve: una copia que nadie restauró no es una copia.",
        "Flujo de trabajo asistido por agentes de codificación: la especificación vive en el repositorio como fuente de verdad, y validaciones automáticas propias rechazan cualquier cambio que no cumpla los estándares del repo.",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Planes, precios, límites y permisos viven en base de datos, sin valores fijos en el código, para que un cambio comercial no sea un despliegue.",
        "Cada funcionalidad se entrega con su suite de pruebas automatizadas, escritas contra la clase de error que cuidan y verificadas fallando antes de darlas por buenas.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "5 negocios operando en paralelo sobre una misma instancia: construí desde cero una plataforma SaaS multi-tenant con Next.js, TypeScript y Supabase, con más de 24 tablas, aislamiento de datos por cliente y control de acceso por roles.",
        "Integraciones con el SDK de Mercado Pago y la API de Google Calendar (OAuth 2.0) para automatizar la gestión de turnos y pagos.",
        "Tareas programadas para el envío automático de notificaciones y recordatorios.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "APIs REST", "WebSocket", "Python"] },
    { title: "IA aplicada", items: ["RAG", "pgvector", "Embeddings", "Búsqueda híbrida", "Evaluación de recuperación", "SDK de Anthropic", "Agentes con herramientas", "Agentes de codificación"] },
    { title: "Arquitectura", items: ["Microservicios", "Dual-DB", "Colas de trabajo", "RBAC", "Migraciones", "Clean Code"] },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "Redis", "SQLite", "Supabase", "Drizzle", "Sequelize"] },
    { title: "Infraestructura", items: ["Docker", "Linux", "nginx", "PM2", "GitHub Actions", "CI/CD", "DigitalOcean", "Cloudflare", "Amazon S3"] },
    { title: "Herramientas", items: ["Git", "GitLab", "GitHub", "Postman", "Vitest", "Playwright", "DBeaver", "Trello"] },
  ],

  softSkills: [
    "Autonomía",
    "Pensamiento analítico",
    "Curiosidad técnica",
    "Comunicación clara",
    "Iniciativa",
  ],

  courses: [
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

// Bloque en ingles para el aviso de Jobgether (2026-10-19): Senior Full-Stack
// Product Engineer, Node.js, AI-Native, remoto. Primer filtro automatico, asi que
// las palabras del aviso que Victor si cumple van tal cual: REST API design,
// query optimization, system design, CI/CD, unit / integration / end-to-end
// tests, agentic coding tools. AWS no va: no lo usa (Cloudflare mas servidor
// propio), y por eso tampoco Amazon S3 en el stack. Docker va en Felanix y en
// 2winGs (Redis en contenedor, dicho por Victor), no en DELSUD.
//
//   npm run cv -- backend-ia en  ->  cv/CV_Victor_Curzio_Backend_IA_EN.pdf
const en = {
  profile: {
    title: "Full-Stack Engineer",
    subtitle: "Node.js · TypeScript · Backend Architecture · AI-Native Development",
    tagline:
      "Three years building backend systems in production with Node.js and TypeScript, focused on system design and data integrity. At Grupo DELSUD I am the technical reference for a team of 5: I designed a 20-module management system from scratch, connected it to a ~25-model CRM already in production and launched it with no cutover window. Fifteen people operate it today over more than 200 contracts, and I brought its heaviest queries down from 3 seconds to 0.6 through query optimization. In parallel I am tech lead at 2winGs, an early-stage B2B product where I own the architecture: I defined the system design and the build order before writing any code, on NestJS with Fastify, PostgreSQL, Redis queues and automated CI/CD. On a personal project I built a question-answering system over private documentation (RAG on PostgreSQL and pgvector) covering 340 notes and 5,338 chunks, with an automated 34-question evaluation that scores 89% correct answers and 100% correct refusals when the answer is not in the documents. I work every day with agentic coding tools, with the specification written before the code.",
  },

  experience: {
    "Grupo DELSUD": {
      role: "Full-Stack Developer · Technical Reference",
      stack: ["Node.js", "TypeScript", "Express.js", "NestJS", "PostgreSQL", "MySQL", "Drizzle", "Sequelize", "Socket.io", "GitLab", "GitLab CI", "React"],
      highlights: [
        "20 functional modules (contracts, collections, cash flow, inflation indexing, reporting): I designed the architecture of an administrative and accounting management system from scratch and took it to production. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
        "From 3 seconds to 0.6 on the system's heaviest queries, five times faster: query optimization and indexing driven by measurement, not by intuition.",
        "Two databases in one product: I connected the existing CRM (Sequelize, ~25 models) with the new system (Drizzle ORM) through a dual-database architecture with automatic two-way synchronisation, and no cutover window for users.",
        "I built the workday time-tracking module end to end: 14 REST endpoints and an immutable append-only log that nobody can edit after the fact, with role-based permissions.",
        "Technical reference for a team of 5 (2 devs, UX, QA, PM): I set the code standards, review changes and take part in the key technical decisions together with the tech lead.",
        "Microservices architecture in the group's internal ERP: one Node/PostgreSQL service per department, with real-time notifications over WebSocket between them.",
        "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between the two systems.",
        "Access control (RBAC): token verification and role authorisation middlewares protecting every endpoint according to the user profile.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "Docker", "nginx", "PM2", "GitHub Actions", "Playwright", "Cloudflare R2"],
      highlights: [
        "Early-stage product: I defined the system design and the build order, from the data model to the REST API contract, written down as technical decisions before writing a line of code.",
        "REST API in NestJS on Fastify with Drizzle and PostgreSQL, and heavy work moved to background jobs with BullMQ and Redis (run in Docker) so the user's request does not wait for it.",
        "CI/CD on GitHub Actions: it builds off the server, copies the artifact over SSH, runs the migrations and only then restarts the process, with nginx as a reverse proxy in front of the API and two separate environments over HTTPS.",
        "Daily database backup to a provider other than the one hosting the server, restored against a throwaway database to prove it works: a backup nobody has restored is not a backup.",
        "Workflow built around agentic coding tools: the specification lives in the repository as the source of truth, and custom automated checks reject any change that does not meet the repo's standards.",
        "Privacy rules enforced in the data layer instead of the interface: a company reaches a full profile only for someone who applied to its opening.",
        "Plans, prices, limits and permissions live in the database, with no hard-coded values, so a commercial change is not a deployment.",
        "Every feature ships with automated tests: unit, integration and end-to-end (Playwright against the build), written against the class of error they guard and seen failing before being trusted.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "5 businesses running in parallel on a single instance: I built a multi-tenant SaaS platform from scratch with Next.js, TypeScript and Supabase, with more than 24 tables, per-client data isolation and role-based access control.",
        "Integrations with the Mercado Pago SDK and the Google Calendar API (OAuth 2.0) to automate appointment and payment handling.",
        "Scheduled jobs to send notifications and reminders automatically.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "REST API design", "WebSocket", "Python"] },
    { title: "Applied AI", items: ["Agentic coding tools", "RAG", "pgvector", "Embeddings", "Hybrid search", "Retrieval evaluation", "Anthropic SDK", "Tool-using agents"] },
    { title: "Architecture", items: ["System design", "Microservices", "Dual-DB", "Job queues", "RBAC", "Migrations", "Clean Code"] },
    { title: "Databases", items: ["PostgreSQL", "Redis", "Query optimization", "MySQL", "SQLite", "Supabase", "Drizzle", "Sequelize"] },
    { title: "Infrastructure", items: ["CI/CD", "Docker", "Linux", "nginx", "PM2", "GitHub Actions", "DigitalOcean", "Cloudflare"] },
    { title: "Testing & Tools", items: ["Unit / integration / end-to-end tests", "Vitest", "Playwright", "Git", "GitLab", "GitHub", "Postman", "DBeaver"] },
  ],

  softSkills: [
    "Autonomy",
    "Analytical thinking",
    "Technical curiosity",
    "Clear communication",
    "Initiative",
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

const target = { suffix: "Backend_IA", es, en };

export default target;
