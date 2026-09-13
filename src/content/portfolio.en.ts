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
  tagline:
    "Focused on software architecture and data integrity. At Grupo DELSUD I was the technical reference for a team of 5: I designed an administrative and accounting management system from scratch, connected it to an existing CRM through a dual-database architecture and took it to production. In parallel, tech lead of 2winGs, a B2B talent platform I build end to end: architecture, infrastructure, security and design.",
};

export const experienceText: Record<Company, JobText> = {
  "Grupo DELSUD": {
    role: "Full-Stack Developer",
    period: "Jan 2026 — Present",
    location: "La Plata, Argentina",
    highlights: [
      "Desarrollos Del Sud: took the platform for selling plots in instalments to production (CRM, Management System and public website), delivered in August 2026.",
      "Designed the architecture of the Management System from scratch, with 20 functional modules (contracts, collections, cash flow, inflation indexing, reporting, among others).",
      "Dual-database architecture: I connected the existing CRM (Sequelize, ~25 models) with the new Management System (Drizzle ORM), with automatic two-way data synchronisation.",
      "Cleaned up the CRM's inherited code so it could be reused in a new product: folder structure, environment variables, SQL queries, dependencies and dead code.",
      "Access control (RBAC): token verification and role authorisation middlewares, protecting every endpoint according to the user profile.",
      "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions together with the tech lead.",
      "Fixed critical data-integrity bugs, including race conditions on concurrent record creation and on the synchronisation between systems.",
      "Closed around 65% of the team's tickets each sprint, consistently assigned the most technically complex ones.",
      "Currently on SGD, the group's internal management system: Node/PostgreSQL microservices, one per department, with real-time notifications over WebSocket.",
      "There I build the Directions ERP and the Product and Technology task board (React 19, micro-frontends embedded through iframes with postMessage), taking QA reports through to verified fixes in the app.",
    ],
  },
  "2winGs International Group LLC": {
    role: "Full-Stack Developer and Tech Lead (Freelance)",
    period: "Aug 2026 — Present",
    location: "Remote",
    highlights: [
      "Design of the architecture and of the build order of a B2B professional network for creative talent, from the data model to the API contract, written down as technical decisions before any code.",
      "First stage delivered end to end: sign-up, sign-in, email verification and password recovery, with their screens.",
      "Infrastructure and deployment defined end to end: static front on Cloudflare Pages, API and background jobs on a dedicated server under PM2, and the build always outside the production machine.",
      "Security: private files behind short-lived signed URLs, the professional's CV restricted to the validation team, and an operation id on every write so a retry cannot duplicate its effect.",
      "Privacy rules enforced in the data layer instead of the interface: a company reaches a full profile only for someone who applied to its opening.",
      "Reputation and gamification system configurable in the database (plans, prices, limits, permissions and index weights), with no hard-coded values.",
      "Front-end design system: tokens named by function in a single file, mobile-first and with accessibility criteria, ready to take on the brand identity once the client defines it.",
      "Technical counterpart for the client: I turned three product documents that contradicted each other into a hierarchy of sources of truth, which the client adopted as its decision criterion.",
      "Technical and regulatory analysis of the fund custody planned in the roadmap: why it is solved on top of a licensed processor, and why money is modelled as entries that are never edited from the very first schema, even though the module comes later.",
    ],
  },
  "Cognitive Link — Consulting & IT Solutions": {
    role: "Full-Stack Developer",
    period: "Mar 2025 — May 2026",
    location: "La Plata, Argentina",
    highlights: [
      "Built a multi-tenant SaaS platform from scratch (retail and clinical), extending the base relational model to more than 24 tables with safe per-client data isolation and role-based access control.",
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
      "Cut task processing time by 20% by automating key processes of a construction management system.",
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
