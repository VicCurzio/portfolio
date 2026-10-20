// Variante del CV para la busqueda de Solvo Global (2026-10-13): Senior Full
// Stack Engineer remoto, con foco declarado en backend, arquitectura de
// software, cloud e infraestructura. El reclutador pidio el CV en ingles, asi
// que la variante esta escrita solo en `en`.
//
//   npm run cv -- cloud-infra en  ->  cv/CV_Victor_Curzio_Cloud_EN.pdf
//
// El titulo dice "Full-Stack Engineer", no "Senior": el nivel lo pone el aviso,
// no el CV. Los `highlights` estan reordenados y recortados del contenido del
// sitio, no inventados: arrancan por arquitectura e infraestructura, siguen por
// backend y dejan una sola linea de front para que el perfil siga leyendose
// full stack.

const en = {
  profile: {
    title: "Full-Stack Engineer",
    subtitle: "Back-end · Software Architecture · Cloud & Infrastructure",
    tagline:
      "Three years building production systems with Node.js and TypeScript, focused on software architecture, infrastructure and data integrity. At Grupo DELSUD I was the technical reference for a team of 5: I designed an administrative and accounting management system from scratch, connected it to an existing CRM through a dual-database architecture and took it to production. In parallel, tech lead of 2winGs, a B2B platform I build end to end: API, deployment pipeline, infrastructure and security.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: ["Node.js", "TypeScript", "Express.js", "NestJS", "PostgreSQL", "MySQL", "Drizzle", "Sequelize", "Socket.io", "Amazon S3", "React", "Trello"],
      highlights: [
        "Designed the architecture of the Management System from scratch, with 20 functional modules (contracts, collections, cash flow, inflation indexing, reporting, among others).",
        "Dual-database architecture: connected the existing CRM (Sequelize, ~25 models) with the new Management System (Drizzle ORM), with automatic two-way data synchronisation.",
        "Desarrollos Del Sud: took the platform for selling plots in instalments to production (CRM, Management System and public website), delivered in August 2026. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
        "Currently on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket.",
        "Built the workday time-tracking module end to end: 14 endpoints and an immutable append-only log on the backend, with role-based permissions and live updates over sockets. Twenty people across three departments log their workday there today.",
        "Performance and security across the microservice ecosystem: leaner responses, the heaviest queries indexed down from 3 seconds to 0.6, and security fixes rolled out service by service.",
        "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between systems. Access control enforced with token verification and role authorisation middlewares on every endpoint.",
        "Cleaned up the inherited CRM code so it could be reused in a new product: SQL queries (N+1 and selects without a field list), environment variables, unused dependencies and dead code.",
        "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions together with the tech lead.",
        "On the front, I build the Directions ERP and the Product and Technology task board (React 19, micro-frontends embedded through iframes with postMessage).",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "BullMQ", "GitHub Actions", "nginx", "PM2", "Cloudflare", "Playwright", "React"],
      highlights: [
        "Designed the architecture and the build order of the product, from the data model to the API contract, written down as technical decisions before any code.",
        "Infrastructure and automated deployment end to end: API and worker live on a dedicated Linux server under PM2, dashboard on Cloudflare Pages, and the build always outside the production machine.",
        "Deployment pipeline on GitHub Actions: it builds off the server, copies the artifact over SSH, runs the migrations and only then restarts the process, with nginx as a reverse proxy in front of the API and two separate environments over HTTPS.",
        "Backups with a tested restore: a daily database dump by cron to a provider other than the one hosting the server, restored against a throwaway database to prove it works. The alarm fires on silence, when the dump did not arrive, not when it succeeds.",
        "Six startup guards that abort the process if the declared environment does not match the database or if production keys are present outside production, plus a health endpoint watched from outside that sends mail, logs carrying a request identifier, and log rotation compatible with the process manager.",
        "API in NestJS on Fastify with Drizzle and PostgreSQL, and background jobs with BullMQ and Redis: first stage delivered end to end (sign-up, sign-in, email verification and password recovery).",
        "Security: private files behind short-lived signed URLs, and an operation id on every write so a retry cannot duplicate its effect. Privacy rules enforced in the data layer instead of the interface: a company reaches a full profile only for someone who applied to its opening.",
        "Plans, prices, limits, permissions and reputation index weights live in the database, with no hard-coded values.",
        "End-to-end tests in Playwright against the build as the main suite, plus unit tests for the pure logic.",
        "Technical and regulatory analysis of the fund custody planned in the roadmap: built on top of a licensed processor, with money modelled as entries that are never edited from the very first schema.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Built a multi-tenant SaaS platform from scratch (retail and clinical), extending the base relational model to more than 24 tables with safe per-client data isolation and role-based access control. It reached production with 5 businesses operating in parallel on the same instance.",
        "Continuous deployment: autonomous setup and management of the production environments on Vercel.",
        "Integrations with the Mercado Pago SDK and the Google Calendar API (OAuth 2.0) for automatic appointment and payment handling.",
        "Scheduled jobs (cron) to send notifications and reminders to users automatically.",
      ],
    },
  },

  skillGroups: [
    { title: "Back-end", items: ["Node.js", "TypeScript", "NestJS", "Express.js", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Architecture", items: ["Microservices", "Dual-DB", "REST APIs", "Multi-tenant", "RBAC", "Migrations", "Clean Code"] },
    { title: "Cloud & Infrastructure", items: ["Linux", "Docker", "nginx", "PM2", "GitHub Actions", "Cloudflare", "Amazon S3", "Vercel", "Redis", "BullMQ"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Tools", items: ["Git", "GitHub", "Trello", "Postman", "Playwright", "Vitest", "DBeaver"] },
  ],

  courses: [
    "GNU/Linux Server Administration (Security) — Buenos Aires Ministry of Education (Dec. 2023)",
    "Database Administration (MySQL) — Buenos Aires Ministry of Education (Nov. 2023)",
    "Professional Ruby on Rails Course — Código Facilito (Nov. 2023)",
    "Java OOP Bootcamp — Alkemy (Apr. 2024)",
    "React Front-end Development Track — Coderhouse (Feb.–Jul. 2023)",
    "Git and GitHub — Alura Latam (Apr. 2023)",
  ],
};

const target = { suffix: "Cloud", en };

export default target;
