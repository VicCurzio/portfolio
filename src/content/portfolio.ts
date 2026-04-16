export const profile = {
  name: "Víctor Roberto Curzio",
  shortName: "Víctor Curzio",
  title: "Desarrollador Full Stack",
  tagline:
    "Arquitecturas escalables, APIs robustas y productos en producción — CRM, turnos y plataformas con Next.js, Node y bases relacionales.",
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
      "Desarrollo y evolución de un CRM en producción, con foco en escalabilidad y UX.",
      "APIs REST con Node, Express y TypeScript; MySQL con Sequelize y Drizzle.",
      "Interfaces responsivas con React, Next.js, Sass y Material UI.",
      "Auth, migraciones y mejora continua de arquitectura y performance.",
      "Clean code y buenas prácticas para mantenibilidad a largo plazo.",
    ],
  },
  {
    company: "Cognitive Link",
    role: "Desarrollador Full-Stack",
    period: "Mar 2025 — Actualidad",
    location: "La Plata, Argentina",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
    highlights: [
      "Plataforma de gestión de turnos: auth, agendas y pagos.",
      "Full stack: componentes, UI y esquema PostgreSQL/Supabase.",
      "Formularios dinámicos, validaciones y lógica de reserva.",
      "Integración Google Calendar (OAuth 2.0, API REST) y credenciales en GCP.",
      "Diseño visual y UX; trabajo en metodologías ágiles.",
    ],
  },
  {
    company: "Cicaré",
    role: "Desarrollador Full-Stack (Freelance)",
    period: "Mar 2025 — Actualidad",
    location: "Saladillo, Argentina",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
    highlights: [
      "Arquitectura escalable con auth y permisos para datos sensibles.",
      "Persistencia con Supabase: registro, validación y flujos de aprobación.",
      "Endpoints y capa API para uso eficiente de datos.",
      "Contenidos jerárquicos y búsqueda con filtros.",
      "Notificaciones, UX y despliegue en producción.",
    ],
  },
  {
    company: "Felanix construcciones",
    role: "Pasantía Desarrollador Full-Stack",
    period: "Sep 2023 — Sep 2024",
    location: "La Plata, Argentina",
    stack: ["Ruby on Rails", "PostgreSQL", "Docker", "JavaScript", "Bootstrap"],
    highlights: [
      "~20% menos tiempo en tareas clave mediante automatización.",
      "Lógica de negocio para gestión de obras y decisiones operativas.",
      "Scrum: planificación y cumplimiento de plazos.",
      "Soporte técnico hardware/software para continuidad operativa.",
    ],
  },
  {
    company: "Ministerio de Educación de Buenos Aires",
    role: 'Promotor — programa "B.A. Multiplica"',
    period: "Sep 2023 — Dic 2023",
    location: "La Plata, Argentina",
    stack: ["Word", "Excel", "PowerPoint", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Capacitación en suite Office y eficiencia operativa.",
      "Fundamentos web (HTML, CSS, JS) y proyectos creativos.",
    ],
  },
] as const;

export const education = {
  degree: "Licenciatura en Sistemas",
  school: "Universidad Nacional de La Plata (UNLP)",
  period: "2024 — Actualidad",
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
  ],
  backend: ["Node.js", "Express.js", "TypeScript", "Ruby on Rails"],
  data: ["PostgreSQL", "MySQL", "Supabase"],
  orms: ["Drizzle", "Sequelize", "Active Record"],
  tools: ["Postman", "Git", "GitHub", "Docker", "DBeaver", "VS Code", "Trello", "Notion"],
} as const;

export const skillGroups = [
  { title: "Front-end", items: skills.frontend },
  { title: "Back-end", items: skills.backend },
  { title: "Datos", items: skills.data },
  { title: "ORMs", items: skills.orms },
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
