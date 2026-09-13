import type { Lang } from "./i18n";

// Textos de la interfaz: todo lo que esta escrito en los componentes y no en
// los datos. Los datos (experiencia, proyectos) se traducen en portfolio.en.ts
// y projects.en.ts; aca van los carteles, los botones y los titulos de seccion.
//
// La forma la fija el idioma de origen: `Ui` sale del objeto en espanol, asi
// que si manana se agrega un cartel nuevo, el ingles no compila hasta tenerlo
// traducido. Es la misma idea que en los archivos de datos.

const es = {
  nav: {
    links: [
      { href: "#experiencia", label: "Experiencia" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#habilidades", label: "Stack" },
      { href: "#formacion", label: "Formación" },
      { href: "#contacto", label: "Contacto" },
    ],
    replayIntro: "Ver intro",
    // El boton de tema dice a que modo se cambia, no en cual estas: es lo que
    // va a pasar al apretarlo.
    toTheme: { light: "Modo claro", dark: "Modo oscuro" },
    themeLabel: "Cambiar tema",
    toLang: "EN",
    langLabel: "Read this site in English",
  },
  intro: {
    ariaLabel: "Intro del sitio",
    kicker: "Un sitio de",
    press: "Press Start",
    skip: "Saltar intro",
  },
  hero: {
    zone: "Zona:",
    role: "Clase:",
    status: "Estado:",
    available: "Disponible",
    write: "Escribime",
    cv: "Descargar CV",
    github: "GitHub",
    scrollCue: "Bajá para empezar",
    portrait: "Retrato en pixel art",
  },
  experience: {
    title: "Experiencia",
    titleEm: "profesional",
    lead: "Sistemas en producción, usados todos los días por gente real.",
    level: "Nivel",
  },
  projects: {
    title: "Proyectos",
    titleEm: "y repositorios",
    lead: "Qué construí en cada uno y con qué criterio técnico lo resolví.",
    did: "Qué hice",
    how: "Cómo lo resolví",
    others: "Otros repositorios",
    othersText:
      "Proyectos de terceros en los que participé como colaborador, y trabajos que quedaron frenados.",
    code: "Código",
    privateRepo: "Repositorio privado",
    stage: {
      title: "Seleccionar proyecto",
      groupLabel: "Proyectos",
      hint: "Flechas para moverte, Enter para entrar. O tocá la celda.",
    },
    kinds: {
      work: "Trabajo",
      product: "Producto propio",
      freelance: "Freelance",
      "tech-test": "Prueba técnica",
      tool: "Herramienta",
    },
  },
  skills: {
    title: "Stack",
    titleEm: "y herramientas",
    lead: "Tecnologías que uso día a día para construir y mantener productos.",
    soft: "Habilidades blandas",
  },
  education: {
    title: "Formación",
    titleEm: "y cursos",
    university: "Universitaria",
    languages: "Idiomas",
    courses: "Formación complementaria",
  },
  contact: {
    title: "Seguir",
    titleEm: "jugando",
    lead: "Si querés charlar sobre un proyecto, una oportunidad o una colaboración, escribime.",
    ariaLabel: "Contacto",
    email: "Email",
    cv: "Curriculum",
    cvValue: "CV en PDF",
    madeWith: "hecho con Next.js",
  },
  meta: {
    title: "Victor Roberto Curzio — Desarrollador Full-Stack",
    description:
      "Portfolio de Victor Roberto Curzio: arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. CRM, sistemas de gestión y plataformas SaaS. La Plata, Argentina.",
    shortDescription:
      "Arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. La Plata, Argentina.",
  },
};

export type Ui = typeof es;

const en: Ui = {
  nav: {
    links: [
      { href: "#experiencia", label: "Experience" },
      { href: "#proyectos", label: "Projects" },
      { href: "#habilidades", label: "Stack" },
      { href: "#formacion", label: "Education" },
      { href: "#contacto", label: "Contact" },
    ],
    replayIntro: "Play intro",
    toTheme: { light: "Light mode", dark: "Dark mode" },
    themeLabel: "Switch theme",
    toLang: "ES",
    langLabel: "Leer este sitio en español",
  },
  intro: {
    ariaLabel: "Site intro",
    kicker: "A site by",
    press: "Press Start",
    skip: "Skip intro",
  },
  hero: {
    zone: "Zone:",
    role: "Class:",
    status: "Status:",
    available: "Available",
    write: "Email me",
    cv: "Download CV",
    github: "GitHub",
    scrollCue: "Scroll down to start",
    portrait: "Pixel art portrait",
  },
  experience: {
    title: "Work",
    titleEm: "experience",
    lead: "Systems in production, used every day by real people.",
    level: "Level",
  },
  projects: {
    title: "Projects",
    titleEm: "and repositories",
    lead: "What I built in each one, and the technical criteria behind it.",
    did: "What I did",
    how: "How I solved it",
    others: "Other repositories",
    othersText:
      "Third-party projects I contributed to, and work that was put on hold.",
    code: "Code",
    privateRepo: "Private repository",
    stage: {
      title: "Select a project",
      groupLabel: "Projects",
      hint: "Arrow keys to move, Enter to select. Or tap a cell.",
    },
    kinds: {
      work: "Job",
      product: "Own product",
      freelance: "Freelance",
      "tech-test": "Tech challenge",
      tool: "Tool",
    },
  },
  skills: {
    title: "Stack",
    titleEm: "and tools",
    lead: "The technologies I use every day to build and maintain products.",
    soft: "Soft skills",
  },
  education: {
    title: "Education",
    titleEm: "and courses",
    university: "University",
    languages: "Languages",
    courses: "Further training",
  },
  contact: {
    title: "Keep",
    titleEm: "playing",
    lead: "If you want to talk about a project, an opening or working together, write to me.",
    ariaLabel: "Contact",
    email: "Email",
    cv: "Resume",
    cvValue: "CV in PDF (Spanish)",
    madeWith: "built with Next.js",
  },
  meta: {
    title: "Victor Roberto Curzio — Full-Stack Developer",
    description:
      "Portfolio of Victor Roberto Curzio: software architecture and data integrity with Node.js, TypeScript, React and relational databases. CRM, back-office systems and SaaS platforms. La Plata, Argentina.",
    shortDescription:
      "Software architecture and data integrity with Node.js, TypeScript, React and relational databases. La Plata, Argentina.",
  },
};

export const ui: Record<Lang, Ui> = { es, en };
