export const profile = {
  name: "Victor Roberto Curzio",
  shortName: "Victor R. Curzio",
  title: "Desarrollador Full-Stack",
  subtitle: "Arquitectura de Software",
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
      "Amazon S3",
    ],
    highlights: [
      "Desarrollos Del Sud: llevé a producción la plataforma de venta de lotes en cuotas (CRM, Sistema de Gestión y web institucional), con entrega en agosto de 2026.",
      "Diseñé desde cero la arquitectura del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes, entre otros).",
      "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
      "Saneé el código heredado del CRM para reutilizarlo en un producto nuevo: estructura de carpetas, variables de entorno, consultas SQL, dependencias y código muerto.",
      "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
      "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
      "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
      "Resolvía alrededor del 65% de las tareas del equipo en cada sprint, asignado consistentemente a las de mayor complejidad técnica.",
      "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket.",
      "Ahí desarrollo el ERP de Direcciones y el tablero de tareas de Producto y Tecnología (React 19, micro-frontends embebidos por iframe con postMessage), tomando reportes de QA hasta cerrarlos verificados en la app.",
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
      "PM2",
    ],
    highlights: [
      "Diseño de la arquitectura y del orden de construcción de una red profesional B2B de talento creativo, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
      "Primera etapa entregada de punta a punta: registro, ingreso, verificación de correo y recuperación de contraseña, con sus pantallas.",
      "Infraestructura y despliegue definidos de punta a punta: front estático en Cloudflare Pages, API y trabajos en segundo plano en un servidor propio bajo PM2, y el build siempre fuera de la máquina de producción.",
      "Seguridad: archivos privados con URLs firmadas de vida corta, acceso al CV del profesional restringido al equipo de validación, e identificador de operación en toda escritura para que un reintento no duplique el efecto.",
      "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
      "Sistema de reputación y gamificación configurable en base de datos (planes, precios, límites, permisos y pesos del índice), sin valores fijos en el código.",
      "Sistema de diseño del front: tokens nombrados por función en un único archivo, mobile-first y con criterios de accesibilidad, preparado para absorber la identidad de marca cuando el cliente la defina.",
      "Interlocutor técnico del cliente: ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio de decisión.",
      "Análisis técnico y regulatorio previo de la custodia de fondos prevista en el roadmap: por qué se resuelve apoyándose en un procesador licenciado y por qué el dinero se modela como asientos que no se editan desde el primer esquema, aunque el módulo llegue después.",
    ],
  },
  {
    company: "Cognitive Link — Consulting & IT Solutions",
    role: "Desarrollador Full-Stack",
    period: "Mar 2025 — May 2026",
    location: "La Plata, Argentina",
    stack: ["Next.js 14", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    highlights: [
      "Construí desde cero una plataforma SaaS multi-tenant (comercial y clínica), extendiendo el modelo relacional base a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles.",
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
    stack: ["Ruby on Rails", "Active Record", "PostgreSQL", "Docker", "JavaScript", "Bootstrap"],
    highlights: [
      "Reduje el tiempo de procesamiento de tareas un 20% automatizando procesos clave de un sistema de gestión de obras.",
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
} as const;

export const skills = {
  frontend: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Material UI", "Sass", "Bootstrap", "PWA"],
  backend: ["Node.js", "Express.js", "NestJS", "TypeScript", "Ruby on Rails", "Python"],
  databases: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase", "Drizzle", "Sequelize", "Active Record"],
  architecture: ["Dual-DB", "RBAC", "Migraciones", "Clean Code"],
  infrastructure: ["Docker", "PM2", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"],
  tools: ["Git", "GitHub", "Postman", "Vitest", "DBeaver"],
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
