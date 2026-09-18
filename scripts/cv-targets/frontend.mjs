// Variante del CV orientada a búsquedas de Frontend (React + TypeScript).
//
//   npm run cv:frontend        ->   cv/CV_Victor_Curzio_Frontend.pdf
//   npm run cv -- frontend en  ->   cv/CV_Victor_Curzio_Frontend_EN.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: el resto
// (contacto, formación, fechas) sale del mismo contenido que el sitio, así la
// variante no se desincroniza. Los `highlights` de cada trabajo están
// reordenados y recortados, no inventados: dicen lo mismo que el CV general,
// empezando por lo que le importa a quien busca un front.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Frontend",
    subtitle: "React · TypeScript",
    tagline:
      "Tres años de experiencia, los últimos dos construyendo interfaces con React y TypeScript en producción. Hoy trabajo sobre una arquitectura de micro-frontends en React 19, y el front lo escribo contra APIs REST que también escribo, así que discuto el contrato de datos antes de que el problema llegue a la pantalla. En Grupo DELSUD fui referente técnico de un equipo de 5 personas y llevé a producción un sistema de gestión completo; en paralelo soy líder técnico de una red profesional B2B como freelance, donde construyo el sistema de diseño y la suite de pruebas de navegador que lo verifica.",
  },

  // Reemplazos por empresa. Lo no declarado queda como en el CV general.
  experience: {
    "Grupo DELSUD": {
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Material UI",
        "Sass",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "Socket.io",
      ],
      highlights: [
        "En el SGD, el sistema interno del grupo, construyo con React 19 una arquitectura de micro-frontends: un front shell que embebe por iframe los fronts de tareas y de solicitudes, cada uno con su repo, su build y su despliegue propios, comunicados por postMessage con validación de origen.",
        "Desarrollos Del Sud: llevé a producción la plataforma de venta de lotes en cuotas (CRM, Sistema de Gestión y web institucional en Next.js), con entrega en agosto de 2026.",
        "Construí de punta a punta el Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes): las pantallas en React sobre Material UI y Sass, y la API que las alimenta.",
        "Interfaces contra APIs REST propias: al escribir los dos lados, definía el contrato de datos que la pantalla necesita en vez de acomodarme a uno ajeno.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
        "Resolvía alrededor del 65% de las tareas del equipo en cada sprint, asignado consistentemente a las de mayor complejidad técnica.",
        "Del lado del dato: conecté el CRM existente (Sequelize) con el nuevo sistema (Drizzle) con sincronización bidireccional, control de acceso por rol (RBAC) y corrección de race conditions en escrituras concurrentes.",
        "Sobre esa arquitectura desarrollo el ERP de Direcciones y el tablero de tareas de Producto y Tecnología, y tomo los reportes de QA hasta cerrarlos verificados en la app.",
      ],
    },

    "2winGs International Group LLC": {
      stack: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "Playwright",
        "Cloudflare Pages",
      ],
      highlights: [
        "Front en React + Vite + TypeScript con Tailwind, dentro de un monorepo que comparte los contratos de tipos entre el front y la API: primera etapa entregada de punta a punta (registro, ingreso, verificación de correo y recuperación de contraseña) con todas sus pantallas.",
        "Sistema de diseño propio: tokens nombrados por función en un único archivo, mobile-first y con criterios de accesibilidad, preparado para absorber la identidad de marca cuando el cliente la defina.",
        "Pruebas de navegador con Playwright corriendo contra el build y no contra el servidor de desarrollo: layout a cuatro anchos, accesibilidad con axe sobre WCAG 2.1 AA y las reglas del sistema de diseño, cada una citando el CSS que la sostiene.",
        "Doy por buena una prueba solo después de romper a propósito lo que cuida y verla fallar: así aparecieron dos que pasaban sin probar nada.",
        "Front estático publicado en Cloudflare Pages con despliegue automático, y el build siempre fuera de la máquina de producción.",
        "Diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado antes de escribir código.",
        "Interlocutor técnico del cliente: ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio de decisión.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Construí desde cero una plataforma SaaS multi-tenant (comercial y clínica) con Next.js 14, TypeScript y Tailwind CSS, con aislamiento de datos por cliente y control de acceso por roles.",
        "Integraciones de cara al usuario: SDK de Mercado Pago para los pagos y API de Google Calendar (OAuth 2.0) para la gestión automática de turnos.",
        "Tareas programadas para el envío automático de notificaciones y recordatorios, y despliegue continuo en Vercel gestionado de forma autónoma.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Plataforma de documentación técnica con Next.js y Tailwind CSS: estructura jerárquica de contenidos con filtros de búsqueda avanzados y personalizables.",
        "Mejoras de interfaz orientadas a una navegación más eficiente sobre un volumen grande de documentos, y automatización de las notificaciones clave.",
        "Autenticación, permisos y flujos de aprobación administrativa sobre información confidencial.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Reduje el tiempo de procesamiento de tareas un 20% automatizando procesos clave de un sistema de gestión de obras.",
        "Desarrollo de la lógica de negocio central y de las vistas del sistema, trabajando con Scrum para la coordinación de tiempos y requisitos.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Front-end",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Sass", "Bootstrap", "PWA"],
    },
    {
      title: "Arquitectura de front",
      items: ["Micro-frontends", "Sistemas de diseño", "Monorepos", "Componentes reutilizables", "Clean Code"],
    },
    {
      title: "Testing y accesibilidad",
      items: ["Playwright", "Vitest", "axe", "WCAG 2.1 AA", "Tests E2E"],
    },
    {
      title: "Integración y trabajo en equipo",
      items: ["APIs REST", "Git", "GitHub", "Postman", "Scrum"],
    },
    { title: "Back-end", items: ["Node.js", "Express.js", "NestJS", "Ruby on Rails", "Python"] },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase"] },
    { title: "Arquitectura", items: ["Dual-DB", "RBAC", "Migraciones"] },
    {
      title: "Infraestructura",
      items: ["Docker", "PM2", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"],
    },
  ],

  // Mismo listado del CV general, con el de front primero.
  courses: [
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const en = {
  profile: {
    title: "Front-end Developer",
    subtitle: "React · TypeScript",
    tagline:
      "Three years of experience, the last two building interfaces with React and TypeScript in production. I currently work on a micro-frontend architecture in React 19, and I write the front end against REST APIs I also write, so I discuss the data contract before the problem reaches the screen. At Grupo DELSUD I was the technical reference for a team of 5 and took a full management system to production; in parallel I am tech lead of a B2B professional network as a freelancer, where I build the design system and the browser test suite that verifies it.",
  },

  experience: {
    "Grupo DELSUD": {
      stack: ["React", "Next.js", "TypeScript", "Material UI", "Sass", "Node.js", "Express.js", "PostgreSQL", "MySQL", "Socket.io"],
      highlights: [
        "On SGD, the group's internal system, I build with React 19 a micro-frontend architecture: a shell front end that embeds the tasks and requests front ends through iframes, each with its own repo, build and deployment, talking over postMessage with origin validation.",
        "Desarrollos Del Sud: took the platform for selling plots in instalments to production (CRM, Management System and a public website in Next.js), delivered in August 2026.",
        "Built the Management System end to end, with 20 functional modules (contracts, collections, cash flow, inflation indexing, reporting): the React screens on Material UI and Sass, and the API that feeds them.",
        "Interfaces against my own REST APIs: writing both sides, I defined the data contract the screen needed instead of adapting to someone else's.",
        "Was the technical reference for a team of 5 (2 devs, UX, QA, PM): set the code standards and took part in the key technical decisions together with the tech lead.",
        "Closed around 65% of the team's tickets each sprint, consistently assigned the most technically complex ones.",
        "On the data side: connected the existing CRM (Sequelize) with the new system (Drizzle) with two-way sync, role-based access control (RBAC) and fixes for race conditions on concurrent writes.",
        "On top of that architecture I build the Directions ERP and the Product and Technology task board, and I take QA reports through to verified fixes in the app.",
      ],
    },

    "2winGs International Group LLC": {
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "NestJS", "Fastify", "PostgreSQL", "Drizzle", "Redis", "Playwright", "Cloudflare Pages"],
      highlights: [
        "Front end in React + Vite + TypeScript with Tailwind, inside a monorepo that shares the type contracts between the front end and the API: first stage delivered end to end (sign-up, sign-in, email verification and password recovery) with all its screens.",
        "Own design system: tokens named by function in a single file, mobile-first and with accessibility criteria, ready to take on the brand identity once the client defines it.",
        "Browser tests with Playwright running against the build rather than the dev server: layout at four widths, accessibility with axe against WCAG 2.1 AA, and the design-system rules, each one citing the CSS that holds it up.",
        "I only trust a test after breaking on purpose what it guards and watching it fail: that is how two tests that passed without proving anything showed up.",
        "Static front end published on Cloudflare Pages with automated deployment, and the build always outside the production machine.",
        "Designed the architecture and build order of the product, from the data model to the API contract, written down before any code.",
        "Technical counterpart for the client: turned three product documents that contradicted each other into a hierarchy of sources of truth, which the client adopted as its decision criterion.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Built a multi-tenant SaaS platform from scratch (retail and clinical) with Next.js 14, TypeScript and Tailwind CSS, with per-client data isolation and role-based access control.",
        "User-facing integrations: the Mercado Pago SDK for payments and the Google Calendar API (OAuth 2.0) for automatic appointment handling.",
        "Scheduled jobs for automatic notifications and reminders, and continuous deployment on Vercel managed autonomously.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Technical documentation platform with Next.js and Tailwind CSS: hierarchical content structure with advanced, customisable search filters.",
        "Interface work aimed at faster navigation across a large volume of documents, and automation of the key notifications.",
        "Authentication, permissions and administrative approval flows over confidential information.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Cut task processing time by 20% by automating key processes of a construction management system.",
        "Developed the core business logic and the system's views, working with Scrum to coordinate timelines and requirements.",
      ],
    },
  },

  skillGroups: [
    { title: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Sass", "Bootstrap", "PWA"] },
    { title: "Front-end architecture", items: ["Micro-frontends", "Design systems", "Monorepos", "Reusable components", "Clean Code"] },
    { title: "Testing and accessibility", items: ["Playwright", "Vitest", "axe", "WCAG 2.1 AA", "E2E tests"] },
    { title: "Integration and teamwork", items: ["REST APIs", "Git", "GitHub", "Postman", "Scrum"] },
    { title: "Back-end", items: ["Node.js", "Express.js", "NestJS", "Ruby on Rails", "Python"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase"] },
    { title: "Architecture", items: ["Dual-DB", "RBAC", "Migrations"] },
    { title: "Infrastructure", items: ["Docker", "PM2", "Vercel", "Cloudflare Pages", "Amazon S3", "Cloudflare R2"] },
  ],

  courses: [
    "React Front-end Development Track — Coderhouse (Feb.–Jul. 2023)",
    "Java OOP Bootcamp — Alkemy (Apr. 2024)",
    "GNU/Linux Server Administration (Security) — Buenos Aires Ministry of Education (Dec. 2023)",
    "Database Administration (MySQL) — Buenos Aires Ministry of Education (Nov. 2023)",
    "Professional Ruby on Rails Course — Código Facilito (Nov. 2023)",
    "Git and GitHub — Alura Latam (Apr. 2023)",
  ],
};

const target = { suffix: "Frontend", es, en };

export default target;
