// Variante del CV orientada a busquedas de Ruby on Rails. Nacio del contacto de
// TCS Uruguay del 2026-11-05: Rails hands-on, React, JavaScript, HTML, CSS,
// Python, contenedores, nube, GitLab y CI/CD.
//
//   npm run cv -- rails en   ->   cv/CV_Victor_Curzio_Rails_EN.pdf
//   npm run cv -- rails      ->   cv/CV_Victor_Curzio_Rails.pdf
//
// Esta en los dos idiomas porque el aviso pide el CV en ingles.
//
// Que mueve, y por que:
//
// 1. Rails sube al resumen. En el CV general aparece recien en la pagina dos,
//    dentro del stack de Felanix, asi que un filtro para un puesto de Rails
//    descarta antes de llegar.
// 2. Habilidades reordenadas: Back-end abre con Rails y Active Record, Front-end
//    declara HTML y CSS como palabra (el aviso los pide y se inferian de
//    Tailwind y Bootstrap), y CI/CD nombra GitLab CI.
// 3. El curso profesional de Rails pasa a primero de Cursos: es el unico del
//    listado que el aviso nombra.
// 4. Grupo DELSUD y 2winGs bajan a seis highlights cada uno. El CV general sale
//    en tres paginas con 12 y 13; recortado entra en dos.
// 5. Los highlights de esos dos puestos estan actualizados a noviembre de 2026.
//    El contenido base describe agosto: dice que de 2winGs solo esta entregada
//    la primera etapa y que la marca la define el cliente mas adelante, y las
//    dos cosas ya no son ciertas. Esta variante lo corrige en su propio archivo;
//    arreglarlo en portfolio.ts y portfolio.en.ts queda pendiente aparte.
// 6. GitLab y GitLab CI entran al stack de Grupo DELSUD: se usan a diario y el
//    CV no los declaraba, aunque la tarjeta del sitio ya dice que el despliegue
//    sale de un GitLab self-hosted.
//
// Lo que NO dice, a proposito: el nombre del producto de 2winGs ni su dominio.
// El cliente autorizo nombrar el empleo, no el producto, hasta que salga.
//
// Felanix va con los bullets ampliados: es el puesto relevante del aviso.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "Ruby on Rails · React · Contenedores y CI/CD",
    tagline:
      "Desarrollador full-stack con experiencia en producción en Ruby on Rails: Rails con Active Record y PostgreSQL sobre Docker en Felanix Construcciones, donde automaticé procesos manuales de un sistema de gestión de obras y desarrollé su lógica de negocio central. Desde entonces trabajo sobre el mismo stack que pide esta búsqueda: React y Next.js en el front, Node.js, TypeScript y Python en el back, aplicaciones en contenedores, entornos de nube y pipelines de CI/CD en GitLab CI y GitHub Actions. En Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero un sistema de gestión administrativo-contable y lo llevé a producción conectado a un CRM existente. En paralelo, líder técnico de 2winGs, una plataforma B2B que construyo de punta a punta: arquitectura, infraestructura, seguridad y diseño.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Microservicios",
        "React",
        "Next.js",
        "PostgreSQL",
        "MySQL",
        "Drizzle",
        "Sequelize",
        "Socket.io",
        "GitLab",
        "GitLab CI",
        "Amazon S3",
        "Trello",
      ],
      highlights: [
        "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket, versionado en un GitLab self-hosted y desplegado por sus pipelines de GitLab CI.",
        "Ahí construí de punta a punta el módulo de trackeo de jornada: 14 endpoints y un registro inmutable append-only en el backend, el control de jornada y la vista de reporte en el front, con permisos por rol y actualización en vivo por sockets. Después lo amplié con un control flotante que opera la jornada desde cualquier pantalla del ERP y pregunta sobre qué se trackea, con el tramo colgando del proyecto y la tarea opcional.",
        "Cerré una auditoría transversal del ecosistema de microservicios: cada hallazgo abierto re-verificado uno por uno, y tres cerrados decidiendo que no se hacen, porque lo que necesita acceso a infraestructura o tocar producción no lo decide este equipo.",
        "Cuando el proveedor de archivos dejó de estar disponible, pasé las subidas a un segundo proveedor detrás de un driver de almacenamiento que se elige con una sola variable de entorno, sin cambios de código para volver atrás, y con el borrado resuelto desde la URL guardada, así que los archivos subidos antes siguen andando.",
        "Diseñé desde cero la arquitectura del Sistema de Gestión de Desarrollos Del Sud, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes), y lo llevé a producción en agosto de 2026: arquitectura dual-DB que conecta el CRM existente (Sequelize, ~25 modelos) con el nuevo sistema (Drizzle ORM) y sincronización bidireccional automática. Hoy lo operan 15 personas entre asesores, administración y cobranza, sobre más de 200 contratos.",
        "Resolví bugs críticos de integridad de datos, incluidas condiciones de carrera en la creación concurrente de registros y en la sincronización entre sistemas. Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
      ],
    },

    "2winGs International Group LLC": {
      stack: [
        "TypeScript",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "BullMQ",
        "React",
        "Docker",
        "nginx",
        "GitHub Actions",
        "Playwright",
      ],
      highlights: [
        "Diseñé la arquitectura y el orden de construcción de la plataforma, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
        "Entregado de punta a punta: registro e ingreso con verificación de correo y recuperación de contraseña; el perfil del talento con habilidades, links, experiencia y CV; un flujo de validación de talento con cola de revisión, niveles y avisos por correo; un sistema de reputación y XP con ranking semanal; y un espacio de empresa donde las empresas publican retos.",
        "Back office para el equipo interno, desplegado detrás de Cloudflare Access: autentica con la identidad que firma Access y no tiene formulario de login propio.",
        "Infraestructura y despliegue automatizado: pipeline en GitHub Actions que compila fuera del servidor, copia el artefacto por SSH, corre las migraciones y recién después reinicia, con nginx de reverse proxy delante de la API y dos entornos separados sobre HTTPS. Staging se publica solo y producción se pide: el último paso de un release lo da una persona, por diseño.",
        "Dos auditorías de seguridad con todos los hallazgos cerrados y verificados en vivo: el límite de intentos pasado a Redis y ya no usable para bloquear una cuenta por su dirección, política de contenido y cabeceras en los dos fronts, tipografía del propio origen, un desafío en alta y recuperación, y SSH endurecido a solo claves. La base se copia a diario hacia otro proveedor, sellada contra una clave pública, y la copia se restauró contra una base descartable para comprobar que sirve.",
        "Tests end-to-end en Playwright contra el build como suite principal, con piso de cobertura exigido en cada workspace dentro del gate y un linter de capas propio que rompe el build cuando un módulo cruza su frontera.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Automaticé procesos clave de un sistema de gestión de obras que hasta entonces eran manuales, acortando el tiempo de procesamiento de las tareas.",
        "Desarrollé la lógica de negocio central en Ruby on Rails, con Active Record sobre PostgreSQL y la aplicación corriendo en Docker.",
        "Coordiné plazos y requerimientos aplicando Scrum, manteniendo el proyecto en fecha.",
        "Soporte técnico integral: incidentes de hardware y software, para sostener la operación.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Back-end",
      items: ["Ruby on Rails", "Active Record", "Node.js", "Express.js", "NestJS", "TypeScript", "Python"],
    },
    {
      title: "Front-end",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Sass", "Material UI"],
    },
    {
      title: "Bases de datos",
      items: ["PostgreSQL", "Redis", "MySQL", "SQLite", "Supabase", "Drizzle", "Sequelize"],
    },
    {
      title: "Arquitectura",
      items: ["Microservicios", "RBAC", "CI/CD (GitLab CI, GitHub Actions)", "Migraciones", "Dual-DB", "Clean Code"],
    },
    {
      title: "Infraestructura",
      items: ["Docker", "Linux", "nginx", "PM2", "Cloudflare Pages", "Vercel", "DigitalOcean", "Amazon S3"],
    },
    { title: "Calidad", items: ["Playwright", "Vitest", "Pruebas automatizadas", "Code review"] },
    { title: "Herramientas", items: ["Git", "GitLab", "GitHub", "Trello", "Postman", "DBeaver"] },
  ],

  courses: [
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const en = {
  profile: {
    title: "Full-Stack Developer",
    subtitle: "Ruby on Rails · React · Containers and CI/CD",
    tagline:
      "Full-stack developer with production experience in Ruby on Rails: Rails with Active Record and PostgreSQL on Docker at Felanix Construcciones, where I automated manual processes of a construction management system and built its core business logic. Since then I have worked across the same stack this role calls for: React and Next.js on the front, Node.js, TypeScript and Python on the back, containerized applications, cloud environments and CI/CD pipelines on GitLab CI and GitHub Actions. At Grupo DELSUD I was the technical reference for a team of 5: I designed an administrative and accounting management system from scratch and took it to production, connected to an existing CRM. In parallel, tech lead of 2winGs, a B2B talent platform I build end to end: architecture, infrastructure, security and design.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Microservices",
        "React",
        "Next.js",
        "PostgreSQL",
        "MySQL",
        "Drizzle",
        "Sequelize",
        "Socket.io",
        "GitLab",
        "GitLab CI",
        "Amazon S3",
        "Trello",
      ],
      highlights: [
        "I currently work on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket, versioned in a self-hosted GitLab and deployed by its CI/CD pipelines.",
        "There I built the workday time-tracking module end to end: 14 endpoints and an immutable append-only log on the backend, and on the front the workday control and the reporting view, with role-based permissions and live updates over sockets. I then extended it with a floating control that operates the workday from any screen of the ERP and asks what the time is being tracked against, with the entry hanging off the project and the task optional.",
        "Closed out a system-wide audit across the microservice ecosystem: every open finding re-verified one by one, and three of them closed as deliberately not done, because what needs infrastructure access or a change in production is not this team's call.",
        "When the file storage provider became unavailable, I moved uploads to a second provider behind a storage driver selected by a single environment variable, with no code changes needed to switch back, and deletion resolved from the stored URL so files uploaded earlier keep working.",
        "Designed the architecture of the Desarrollos Del Sud Management System from scratch, with 20 functional modules (contracts, collections, cash flow, inflation indexing, reporting), and took it to production in August 2026: a dual-database architecture connecting the existing CRM (Sequelize, ~25 models) with the new system (Drizzle ORM), with automatic two-way data synchronisation. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
        "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between systems. I was the technical reference for a team of 5 (2 devs, UX, QA, PM): I set the code standards and took part in the key technical decisions together with the tech lead.",
      ],
    },

    "2winGs International Group LLC": {
      stack: [
        "TypeScript",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "BullMQ",
        "React",
        "Docker",
        "nginx",
        "GitHub Actions",
        "Playwright",
      ],
      highlights: [
        "Designed the architecture and the build order of the platform, from the data model to the API contract, written down as technical decisions before any code.",
        "Delivered end to end: sign-up and sign-in with email verification and password recovery; the talent profile with skills, links, experience and CV; a talent validation flow with a review queue, levels and email notifications; a reputation and XP system with a weekly ranking; and a company space where companies publish challenges.",
        "A back office for the internal team, deployed behind Cloudflare Access: it authenticates with the identity Access signs and has no login form of its own.",
        "Infrastructure and automated deployment: a GitHub Actions pipeline that builds off the server, copies the artifact over SSH, runs the migrations and only then restarts the process, with nginx as a reverse proxy in front of the API and two separate environments over HTTPS. Staging publishes itself and production is asked for: the last step of a release is taken by a person, by design.",
        "Two security audits with every finding closed and verified live: rate limiting moved to Redis and no longer usable to lock an account out by address, a content-security policy and headers on both front-ends, self-hosted fonts, a challenge on sign-up and recovery, and SSH hardened to keys only. The database is dumped daily to a different provider, sealed against a public key, and the dump was restored against a throwaway database to prove it works.",
        "End-to-end tests in Playwright against the build as the main suite, with a coverage floor enforced in every workspace as part of the gate, and a custom layer linter that fails the build when a module reaches across its boundary.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Automated key processes of a construction management system that used to be manual, shortening task processing time.",
        "Developed the core business logic in Ruby on Rails, with Active Record over PostgreSQL and the application running on Docker.",
        "Coordinated timelines and requirements applying Scrum, keeping the project on schedule.",
        "Full technical support: hardware and software incidents, to keep operations running.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Back-end",
      items: ["Ruby on Rails", "Active Record", "Node.js", "Express.js", "NestJS", "TypeScript", "Python"],
    },
    {
      title: "Front-end",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Sass", "Material UI"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Redis", "MySQL", "SQLite", "Supabase", "Drizzle", "Sequelize"],
    },
    {
      title: "Architecture",
      items: ["Microservices", "RBAC", "CI/CD (GitLab CI, GitHub Actions)", "Migrations", "Dual-DB", "Clean Code"],
    },
    {
      title: "Infrastructure",
      items: ["Docker", "Linux", "nginx", "PM2", "Cloudflare Pages", "Vercel", "DigitalOcean", "Amazon S3"],
    },
    { title: "Quality", items: ["Playwright", "Vitest", "Automated testing", "Code review"] },
    { title: "Tools", items: ["Git", "GitLab", "GitHub", "Trello", "Postman", "DBeaver"] },
  ],

  courses: [
    "Professional Ruby on Rails Course — Código Facilito (Nov. 2023)",
    "Java OOP Bootcamp — Alkemy (Apr. 2024)",
    "GNU/Linux Server Administration (Security) — Buenos Aires Ministry of Education (Dec. 2023)",
    "Database Administration (MySQL) — Buenos Aires Ministry of Education (Nov. 2023)",
    "React Front-end Development Track — Coderhouse (Feb.–Jul. 2023)",
    "Git and GitHub — Alura Latam (Apr. 2023)",
  ],
};

const target = { suffix: "Rails", es, en };

export default target;
