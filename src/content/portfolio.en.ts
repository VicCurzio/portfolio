import type { courses, education, experience, languages, skillGroups, softSkills } from "./portfolio";

// Traduccion al ingles del perfil. No es una copia del archivo en espanol: es
// una tabla de traduccion, y las claves son los datos que no cambian de idioma
// (la empresa, el titulo del grupo de skills, el texto original del curso).
//
// Por que asi y no dos archivos paralelos completos: un hecho — la fecha de un
// trabajo, el stack de una empresa — vive en un solo lugar, `portfolio.ts`. Aca
// solo esta lo que hay que decir distinto. Ademas los tipos salen de ese
// archivo, asi que si manana entra un trabajo nuevo, esto no compila hasta que
// tenga su traduccion: un idioma no se puede quedar atras en silencio.

type Company = (typeof experience)[number]["company"];
type SkillGroupTitle = (typeof skillGroups)[number]["title"];
type SoftSkill = (typeof softSkills)[number];
type LanguageName = (typeof languages)[number]["name"];
type Course = (typeof courses)[number];

type JobText = {
  role: string;
  period: string;
  location: string;
  highlights: readonly string[];
};

export const profileText = {
  title: "Full-Stack Developer",
  subtitle: "Software Architecture",
  // Lo genera `npm run cv -- en` y lo copia a public/, igual que el de espanol.
  cv: "/CV_Victor_Curzio_EN.pdf",
  intro:
    "Software architecture and data integrity. I took a management system to production at Grupo DELSUD and I am now tech lead at 2winGs.",
  tagline:
    "Focused on software architecture and data integrity. At Grupo DELSUD I was the technical reference for a team of 5: I designed an administrative and accounting management system from scratch, connected it to an existing CRM through a dual-database architecture and took it to production. In parallel, tech lead of 2winGs, a B2B talent platform I build end to end: architecture, infrastructure, security and design.",
};

export const experienceText: Record<Company, JobText> = {
  "Grupo DELSUD": {
    role: "Full-Stack Developer",
    period: "Jan 2026 — Present",
    location: "La Plata, Argentina",
    highlights: [
      "Currently on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket, versioned in a self-hosted GitLab and deployed by its GitLab CI pipelines.",
      "There I build the Directions ERP and the Product and Technology task board (React 19, micro-frontends embedded through iframes with postMessage), taking QA reports through to verified fixes in the app.",
      "Built the workday time-tracking module end to end: 14 endpoints, an immutable append-only log, role-based permissions, live updates over sockets and a floating control that operates the workday from any screen of the ERP, with the entry hanging off the project and the task optional.",
      "Closed out a system-wide audit across the microservice ecosystem: every open finding re-verified one by one, and three of them closed as deliberately not done, because what needs infrastructure access or a change in production is not this team's call.",
      "Prepared five backends for the production handover: a documentation check enforced in each one, a schema diagram per database, API collections, complete READMEs and environment examples, and a dead database and a dead environment variable removed.",
      "When the file storage provider became unavailable, moved uploads to a second provider behind a storage driver selected by a single environment variable, with no code changes to switch back.",
      "Designed the architecture of the Desarrollos Del Sud Management System from scratch (20 modules: contracts, collections, cash flow, inflation indexing, reporting) and took it to production in August 2026: a dual-database architecture connecting the existing CRM (Sequelize, ~25 models) with the new system (Drizzle ORM), with automatic two-way data synchronisation. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
      "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions. Fixed critical data-integrity bugs, including race conditions on concurrent record creation, and improved the performance of the heaviest queries, down from 3 seconds to 0.6.",
    ],
  },
  "2winGs International Group LLC": {
    role: "Full-Stack Developer and Tech Lead (Freelance)",
    period: "Aug 2026 — Present",
    location: "Remote",
    highlights: [
      "Designed the architecture and the build order of a B2B professional network for creative talent, from the data model to the API contract, and delivered it end to end: sign-up and sign-in with email verification and password recovery; the talent profile; a validation flow with a review queue, levels and email notifications; reputation and XP with a weekly ranking, configurable in the database; and a space where companies publish challenges.",
      "A back office for the internal team, deployed behind Cloudflare Access: it authenticates with the identity Access signs and has no login form of its own.",
      "Infrastructure and automated deployment: the dashboard on Cloudflare Pages and the API on a dedicated server under PM2 behind nginx, with a GitHub Actions pipeline that builds off the server, copies the artifact over SSH, runs the migrations and only then restarts the process. Staging publishes itself and production is asked for: the last step of a release is taken by a person, by design. The database is dumped daily to a different provider, sealed against a public key, and the dump was restored against a throwaway database to prove it works.",
      "Two full security audits with every finding closed and verified live: rate limiting moved to Redis, a content-security policy and headers on both front-ends, SSH hardened to keys only, and mail authentication (SPF, DKIM and DMARC) verified in production. Privacy is enforced in the data layer, not in the interface.",
      "End-to-end tests in Playwright against the build as the main suite, with a coverage floor enforced in every workspace as part of the gate, a custom layer linter that fails the build when a module reaches across its boundary, and a WCAG 2.2 AA tag across the accessibility suites.",
      "Front-end design system: tokens named by function in a single file, mobile-first. When the client defined the brand identity, it went in by changing tokens: 52 colour literals collapsed into a single variable.",
    ],
  },
  "Cognitive Link — Consulting & IT Solutions": {
    role: "Full-Stack Developer",
    period: "Mar 2025 — May 2026",
    location: "La Plata, Argentina",
    highlights: [
      "Built a multi-tenant SaaS platform from scratch (retail and clinical), extending the base relational model to more than 24 tables with safe per-client data isolation and role-based access control. It reached production with 5 businesses operating in parallel on the same instance.",
      "Integrations with the Mercado Pago SDK and the Google Calendar API (OAuth 2.0) for automatic appointment and payment handling.",
      "Scheduled jobs (cron) to send notifications and reminders to users automatically.",
      "Continuous deployment: autonomous setup and management of the production environments on Vercel.",
    ],
  },
  "Cicaré": {
    role: "Full-Stack Developer (Freelance)",
    period: "Mar 2025 — Aug 2025",
    location: "Saladillo, Argentina",
    highlights: [
      "Design and implementation of a scalable architecture with authentication and permission management for a platform holding confidential information.",
      "End-to-end full stack: persistence on Supabase, endpoints and administrative approval flows.",
      "Hierarchical content structure with advanced, customisable search filters.",
      "Automation of key notifications and interface work for faster navigation.",
    ],
  },
  "Felanix Construcciones": {
    role: "Full-Stack Developer",
    period: "Sep 2023 — Sep 2024",
    location: "La Plata, Argentina",
    highlights: [
      "Automated key processes of a construction management system that used to be manual, shortening task processing time.",
      "Developed the core business logic, applying Scrum to coordinate timelines and requirements.",
      "Managed timelines and requirements, keeping the project on schedule.",
      "Full technical support: hardware and software incidents to keep operations running.",
    ],
  },
};

export const educationText = {
  degree: "Bachelor's Degree in Systems",
  school: "Universidad Nacional de La Plata (UNLP)",
  period: "Dec 2023 — Present",
  location: "La Plata, Argentina",
  detail:
    "Five-year degree at the Facultad de Informática (2021 curriculum): 37 courses and a final thesis. I study it alongside a full-time job. What I am after there is the groundwork the day-to-day does not give: algorithms, concurrency, operating systems and databases.",
} satisfies Record<keyof typeof education, string>;

export const skillGroupTitles: Record<SkillGroupTitle, string> = {
  "Front-end": "Front-end",
  "Back-end": "Back-end",
  "Bases de datos": "Databases",
  Arquitectura: "Architecture",
  Infraestructura: "Infrastructure",
  Herramientas: "Tools",
};

// Los nombres de tecnologia no se traducen: solo las pocas skills escritas en
// prosa. Lo que no este aca se muestra tal cual, que es lo correcto para
// "PostgreSQL" o "Docker".
export const skillItems: Record<string, string> = {
  Migraciones: "Migrations",
  Microservicios: "Microservices",
};

export const softSkillsText: Record<SoftSkill, string> = {
  "Pensamiento analítico": "Analytical thinking",
  "Comunicación clara": "Clear communication",
  "Trabajo en equipo": "Teamwork",
  Adaptabilidad: "Adaptability",
  Iniciativa: "Initiative",
};

export const languagesText: Record<LanguageName, { name: string; level: string; detail: string; note: string }> = {
  Español: { name: "Spanish", level: "Native", detail: "", note: "" },
  Inglés: {
    name: "English",
    level: "Intermediate (B1)",
    detail: "daily technical reading and writing",
    note: "conversation improving",
  },
};

export const coursesText: Record<Course, string> = {
  "Bootcamp POO JAVA — Alkemy (Abr. 2024)": "Java OOP Bootcamp — Alkemy (Apr. 2024)",
  "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)":
    "GNU/Linux Server Administration (Security) — Buenos Aires Ministry of Education (Dec. 2023)",
  "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)":
    "Database Administration (MySQL) — Buenos Aires Ministry of Education (Nov. 2023)",
  "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)":
    "Professional Ruby on Rails Course — Código Facilito (Nov. 2023)",
  "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)":
    "React Front-end Development Track — Coderhouse (Feb.–Jul. 2023)",
  "Git y GitHub — Alura Latam (Abr. 2023)": "Git and GitHub — Alura Latam (Apr. 2023)",
};
