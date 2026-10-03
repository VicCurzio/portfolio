import { otherRepos, projects } from "./projects";

// Traduccion al ingles de los proyectos. Igual que en portfolio.en.ts: no es
// una copia del archivo en espanol, es una tabla indexada por lo que no cambia
// de idioma — el nombre del proyecto, el del repositorio, la etiqueta del link.
//
// Los tipos salen de projects.ts, asi que agregar un proyecto sin traducirlo no
// compila. El stack y las URLs no se repiten aca: viven en un solo lugar.

type ProjectItem = (typeof projects)[number];
type ProjectName = ProjectItem["name"];
type LinkLabel = Extract<ProjectItem, { links: readonly unknown[] }>["links"][number]["label"];

type RepoItem = (typeof otherRepos)[number];
type RepoName = RepoItem["name"];
type RepoRole = RepoItem["role"];
type RepoStatus = RepoItem["status"];

type ProjectText = {
  // El nombre se traduce solo cuando esta en espanol; el ancla de la tarjeta
  // sale igual del nombre original, para que el link no cambie de idioma.
  name?: string;
  period: string;
  summary: string;
  did: readonly string[];
  how: readonly string[];
  repoNote?: string;
};

export const projectsText: Record<ProjectName, ProjectText> = {
  "Desarrollos Del Sud": {
    period: "Grupo DELSUD · Jan — Aug 2026 · 5 repos · Delivered",
    summary:
      "Platform for selling land plots in instalments: a sales CRM, a post-sale Management system (contracts, instalments, collections) and the public corporate site.",
    did: [
      "I joined in the first weeks of the project and took it to production, in August 2026.",
      "Development and evolution of the CRM in production: contacts, opportunities, developments, zones, sales reps and plot reservations.",
      "Management System, technically finished in August 2026: sale contract, instalment plan indexed by inflation, collections, cash desk, receipts and reports. Fifteen people across sales, administration and collections operate it today, over more than 200 contracts.",
      "Public corporate site in Next.js with GSAP animations.",
      "Clean-up of the CRM legacy code so it could be reused in a new product: folder structure, environment variables, SQL queries (N+1 and selects without fields), unused dependencies, dead endpoints and components, files over 500 lines and API documentation.",
    ],
    how: [
      "Two Express backends over MySQL: the CRM on Sequelize, Management on TypeScript + Drizzle, each with its own database.",
      "The systems share the identity of the operation (the reservation id) instead of coupling over HTTP, so one going down does not drag the other with it.",
      "Vite + React 18 + MUI front-ends, with TanStack Query as server state in both systems.",
      "JWT authentication with roles, payload validation with Joi and automated deployment from a self-hosted GitLab.",
    ],
    repoNote: "Private repositories (the client's self-hosted GitLab)",
  },
  "2winGs": {
    period: "2026 — In progress",
    summary:
      "B2B professional network for creative talent, for 2winGs International Group LLC: a living profile with measurable reputation, levels and curated opportunities. I am the developer and tech lead.",
    did: [
      "Design of the architecture and of the build order of the system, from the data model to the API contract.",
      "First stage finished end to end: sign-up, sign-in, email verification and password recovery, with their screens.",
      "Reputation (a 0 to 100 index) and gamification, separated by design: activity inside the platform never raises professional reputation.",
      "Infrastructure and automated deployment: the dashboard published on Cloudflare Pages and the API live on a dedicated server with PM2; user files in private storage.",
      "Front-end design system: tokens named by function in a single file, mobile-first and with accessibility criteria, ready to take on the brand identity once the client defines it.",
      "I turned three product documents that contradicted each other into a hierarchy of sources of truth, which the client adopted as its decision criterion.",
      "Upfront analysis of the fund custody the roadmap plans for: it is regulated activity, it is solved on top of a licensed processor, and it forces money to be modelled as entries that are never edited from the very first schema.",
    ],
    how: [
      "NestJS API over Fastify with Drizzle and PostgreSQL, background jobs with BullMQ and Redis, and a Vite + React front served as static files.",
      "Privacy rules are enforced in the data layer, not in the interface: a company sees the full profile only of someone who applied to its opening.",
      "No plans, prices, limits or index weights live in the code: they are configuration in the database, editable from the admin panel.",
      "Every write operation travels with its own identifier, so a retry after a dropped connection does not duplicate the effect.",
      "The files the professional uploads live in private storage and are served through short-lived signed links: the CV is input for the validation team, not public profile content.",
      "The build never runs on the production machine: it is compiled elsewhere and only the result is published, so a deployment cannot take the server down.",
      "GitHub Actions deploys the API: it builds, copies the artifact over SSH, runs the migrations and only then restarts. Migrations before the restart, never the other way round.",
      "nginx sits in front of the API, and the system runs in two separate environments over HTTPS: production and staging.",
      "The database is dumped daily by cron to a provider other than the one hosting the server, and the dump was restored against a throwaway database to prove it actually works.",
      "The alarm fires on silence: if today's dump did not arrive, it goes off. A notice that only arrives when everything went well warns of nothing.",
      "Six startup guards: if the declared environment does not match the database, or production keys are present outside production, the process does not come up.",
      "End-to-end tests run in Playwright against the build, with no API and no database, and the pure logic is covered by unit tests.",
    ],
    repoNote: "The client's private repository",
  },
  "Dial Sport": {
    period: "2026 — In progress",
    summary:
      "SaaS for amateur sports video: cameras installed at the venues record the matches and players buy their videos and highlights.",
    did: [
      "End-to-end product design, including the 60/40 revenue split between venue and platform, with no subscription: you pay per video.",
      "Next.js app with a video catalogue, player authentication, checkout and a panel for the venues.",
      "Definition of the capture pipeline: IP cameras plus an NVR that uploads the recordings to storage automatically.",
      "A what's-new notice on every release, so a change in the product does not go unnoticed by venues or players.",
    ],
    how: [
      "Supabase as the backend: PostgreSQL, Auth and Storage for thumbnails, with the schema versioned in SQL migrations.",
      "Videos go to Cloudflare R2 and not to Supabase: egress is the cost that dominates a video product, and on R2 it is free.",
      "A service layer isolated per provider so the UI never talks directly to Supabase, R2 or Mercado Pago.",
      "App Router with a deliberate split between server and client components, and centralised types for the whole domain.",
    ],
    repoNote: "Private repository",
  },
  "CV Match": {
    period: "2026 · Online",
    summary:
      "Web tool to build, tailor and download a CV for the market you are applying to (Argentina or abroad) and for who will read it: a person or an applicant tracking system.",
    did: [
      "Section-based editor with live preview, templates and PDF download.",
      "Market profile and applicant tracking system (ATS) mode: each combination changes what is asked for, what is hidden and which templates are allowed, the photo for instance.",
      "Rule-based diagnosis that flags the weak spots of the CV and compares it against a pasted job posting, without inventing a score that does not exist.",
      "Import of an existing CV from PDF or Word, versions per application on top of a base CV, and a cover letter.",
    ],
    how: [
      "Everything runs in the browser, with no server or database: the CV carries personal data and never leaves the user's machine.",
      "The PDF is generated with react-pdf as real text rather than an image, so an applicant tracking system can read it.",
      "Data is validated with zod; the domain is covered by more than 300 tests with Vitest, and end-to-end tests with Playwright stop the release if they fail.",
      "Each version per application is a layer on top of the base CV: it inherits the facts and only changes how they are told.",
    ],
  },
  Musik: {
    period: "2026 · Online",
    summary:
      "Installable music player (PWA) that reads the files on your own device: private, no account, no server and no ads.",
    did: [
      "Persistent library with views by artist, album, genre, folder, playlists and favourites, accent-insensitive search and automatic playlists built from what you play the most.",
      "5-band equaliser with presets, even volume across tracks, variable speed, manual queue, sleep timer and controls from the lock screen.",
      "Synced lyrics read from the .lrc files that travel next to the music, with no external API involved.",
      "System integration: open an MP3 with the app from the file explorer, receive songs shared from other apps, and shortcuts on the icon.",
      "A what's-new notice on every update, fed by the repository's own changelog.",
      "Support for MP3, WAV, FLAC and WMA, including the formats the browser cannot play natively.",
    ],
    how: [
      "Everything happens in the browser: no file leaves the device and the app never writes to the phone's storage, it keeps its own copies in IndexedDB.",
      "Volume is evened out by measuring the level of each track with an OfflineAudioContext on import. It only attenuates: amplifying a quiet track digitally distorts it.",
      "Tag reading runs in a Web Worker and the list paints in chunks, so importing hundreds of files does not freeze the interface.",
      "WMA and FLAC are transcoded locally with ffmpeg.wasm, lazy-loaded so it does not slow down startup for someone who only listens to MP3.",
      "The app asks the browser for persistent storage: without it the system can wipe a library of several GB without warning.",
      "Tests with Vitest over the most tangled part — queue, playback scope, shuffle and repeat — which is the one that breaks silently.",
    ],
  },
  "Plagas Out": {
    period: "2026",
    summary:
      "Site for a pest control service, with a contact form that sends real email without a backend of its own.",
    did: [
      "One-page landing with services, coverage area and contact, in typed components.",
      "Contact form with real asynchronous sending: loading state, error handling and a mailto fallback if the send fails.",
    ],
    how: [
      "React 19 + Vite with no backend: sending is handled by EmailJS from the client, with the credentials in environment variables outside the repository.",
      "Oxlint instead of ESLint as the linter, for speed on a project this size, and PostCSS for the styles.",
    ],
  },
  "vault-rag": {
    period: "2026",
    summary:
      "Meaning-based search and question agent over a folder of markdown notes: it finds the note even when the question shares none of its words, answers citing where it got it from, and says it does not know when the answer is not there.",
    did: [
      "Incremental indexing of 340 notes into 5338 chunks: a note that did not change is not processed again.",
      "Hybrid search: by meaning and by exact words, fused by rank. Isolated against a control, it lifts retrieval from 82% to 89%: it rescues the questions that hinge on a literal term, which is exactly what the vector blurs.",
      "Agent with a single search tool, no framework: it can search, read what came back and search again with different words.",
      "Automated measurement of accuracy, today at 89% retrieval and 100% rejection over 34 questions. Both jumps came from measuring rather than guessing: indexing each chunk together with the title of its note, and giving less weight to the daily log notes, which are 41% of the vault and used to win on sheer volume.",
    ],
    how: [
      "Vectors are computed on the machine itself with a multilingual model: indexing costs nothing, so trying a change and measuring it is free.",
      "PostgreSQL with pgvector stores the text and its vector together, with an HNSW index and cosine distance.",
      "The two searches are fused by rank and not by score: a cosine distance and a text ranking do not live on the same scale and cannot be averaged.",
      "The evals include questions whose answer is not in the notes: a green run that was never given anything to reject does not prove the control is switched on.",
      "Every improvement has to beat a measured control, and some do not: reranking the candidates with a second model is the standard next step here, returns the same 89% and costs twenty model passes per question. It stayed in the repo switched off, with the measurement next to it.",
    ],
  },
  Portfolio: {
    period: "2026",
    summary:
      "The site you are reading, styled like an 8-bit console: experience, projects, stack, education and contact, in Spanish and English.",
    did: [
      "Full design and development: animated intro, project select screen with a dialogue box, and original pixel art.",
      "Two languages and light and dark themes, with text contrast measured in both.",
      "Content separated from the code: the site, the six PDF CVs and the share image all come from the same data.",
    ],
    how: [
      "Next.js with the App Router and static output, published on GitHub Pages after lint and type checks pass.",
      "Translations are tables typed against the Spanish content: an untranslated entry does not compile.",
      "The CVs and the image are generated with headless Chrome, without adding dependencies to the project.",
    ],
  },
};

export const linkLabels: Record<LinkLabel, string> = {
  Código: "Code",
  "Ver demo": "Live demo",
};

export const repoRoles: Record<RepoRole, string> = {
  Colaborador: "Contributor",
  Freelance: "Freelance",
  "Prueba técnica": "Technical test",
  "Herramienta propia": "Own tool",
};

export const repoStatuses: Record<RepoStatus, string> = {
  "En desarrollo": "In progress",
  "Repositorio del equipo": "Team repository",
  "Repositorio de la empresa": "Company repository",
  "Quedó en ideación": "Stopped at the idea stage",
  "Retomado en 2026": "Picked up again in 2026",
  "Backends en producción": "Back ends live",
  Online: "Online",
  "Uso personal": "Personal use",
};

export const repoDescriptions: Record<RepoName, string> = {
  "SGD — Grupo DELSUD":
    "Grupo DELSUD's internal management system: an ecosystem of Node and PostgreSQL microservices, one per department, where each area handles its requests with dynamic form templates, plus tasks, calendar and real-time notifications over WebSocket. The identity of users and departments lives in a single auth service the rest consume. I joined the team as a contributor, on the Product and Technology section: the product detail with editing and history, the creation of units and products, and the task board the ERP embeds as a micro-frontend.",
  "Sistema Asclepio":
    "The system behind my work at Cognitive Link: clinical management in Next.js and Supabase with patients, professionals, appointments and treatments, sync to Google Calendar, payments through Mercado Pago, automated mailing and fine-grained permissions over each patient's sensitive information.",
  "Sistema Inari":
    "The second system of that same collaboration: a multi-business sales platform in Next.js and Supabase, with marketplace, stock, orders, deliveries and take away, plus a public site per store with pages configurable from the panel.",
  Unagi:
    "Ruby on Rails app for construction management at Felanix Construcciones. I worked as a contributor inside the team during the internship, adding business logic and automations on top of an existing code base.",
  OfiJobs:
    "Services marketplace with Spring Boot and React. I took part as a contributor in a team of several developers; the project never got past the idea stage.",
  Cicaré:
    "Technical documentation portal for helicopters with Next.js and Supabase: permissions over sensitive data, hierarchical content and approval flows. I built it end to end as a freelancer; it was on hold and started moving again in 2026. With the same client a second system began, for stock of parts and assemblies at the plant (React + Express + SQLite), in development today.",
  "Bot de WhatsApp":
    "Python desktop tool to send a WhatsApp message to a list of contacts loaded from an Excel file, with a graphical interface and a command-line version to run it unattended. It normalises the numbers to international format and spaces the messages with random pauses of 25 to 40 seconds so WhatsApp Web is not flooded. The repository changelog is the single source of the version and of the news the app shows when it opens.",
  "Dashboard Financiero":
    "The technical test that got me into Grupo DELSUD: two independent microservices (authentication with Drizzle and finance with Sequelize, on PostgreSQL) and a React front end with KPIs, charts and transaction management.",
  "Landing Grupo DELSUD":
    "First technical test for Grupo DELSUD: a responsive landing page in Next.js with static generation and CSS Modules, delivered in under four days and published on Vercel.",
  "Job Alerts":
    "Python script that reads LinkedIn job alerts over IMAP, read-only, and leaves a daily application queue filtered by profile, with the reason for each discard. It does not apply on its own: the decision stays human.",
};
