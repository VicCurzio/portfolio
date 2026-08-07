export const profile = {
  name: "Victor Roberto Curzio",
  shortName: "Victor Curzio",
  title: "Desarrollador Full Stack",
  subtitle: "Arquitectura de Software",
  tagline:
    "Foco en arquitectura de software e integridad de datos. Referente técnico de un equipo de 5 personas en Grupo DELSUD, donde diseñé desde cero un sistema de gestión administrativo-contable y su conexión con un CRM existente mediante una arquitectura dual-DB.",
  location: "La Plata, Argentina",
  email: "victor.curzio@hotmail.com",
  phone: "+54 221 542 4585",
  linkedin: "https://linkedin.com/in/victor-roberto-curzio/",
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
      "Sequelize",
      "Drizzle",
      "Sass",
      "Material UI",
    ],
    highlights: [
      "Arquitectura desde cero: diseñé la arquitectura completa del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes, entre otros).",
      "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
      "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
      "Referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): defino estándares de código y contribuyo a las decisiones técnicas clave junto al tech lead.",
      "Resolución de bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
      "Resuelvo alrededor del 65% de las tareas del equipo en cada sprint, asignado consistentemente a las de mayor complejidad técnica.",
      "Involucramiento más allá del código: aporte de ideas de producto y trabajo con QA en pruebas manuales.",
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
    role: "Desarrollador Full-Stack (Pasantía)",
    period: "Sep 2023 — Sep 2024",
    location: "La Plata, Argentina",
    stack: ["Ruby on Rails", "PostgreSQL", "Docker", "JavaScript", "Bootstrap"],
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
  frontend: [
    "Next.js",
    "React",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "HTML5",
    "CSS3",
    "Sass",
    "PWA",
  ],
  backend: ["Node.js", "Express.js", "TypeScript", "Ruby on Rails"],
  data: ["PostgreSQL", "MySQL", "Supabase"],
  orms: ["Drizzle", "Sequelize", "Active Record"],
  architecture: ["Arquitectura dual-DB", "RBAC", "Migraciones", "Clean Code"],
  tools: [
    "Postman",
    "Git",
    "GitHub",
    "Docker",
    "Vitest",
    "DBeaver",
    "VS Code",
    "Trello",
    "Notion",
  ],
} as const;

export const skillGroups = [
  { title: "Front-end", items: skills.frontend },
  { title: "Back-end", items: skills.backend },
  { title: "Datos", items: skills.data },
  { title: "ORMs", items: skills.orms },
  { title: "Arquitectura", items: skills.architecture },
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
  { name: "Inglés", level: "Intermedio (B1)", note: "Lectura y escritura técnica; conversación en mejora." },
] as const;

export const courses = [
  "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
  "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
  "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
  "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
  "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
  "Git y GitHub — Alura Latam (Abr. 2023)",
] as const;
