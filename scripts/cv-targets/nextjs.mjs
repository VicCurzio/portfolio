// Variante del CV orientada a búsquedas Full-Stack sobre Next.js, TypeScript y
// PostgreSQL/Supabase, el stack que piden los avisos remotos de LATAM.
//
//   npm run cv -- nextjs   ->   cv/CV_Victor_Curzio_NextJS.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: contacto,
// formación y fechas salen del mismo contenido que el sitio. Los `highlights`
// están reordenados y recortados, no inventados: dicen lo mismo que el CV
// general, empezando por lo que le importa a quien busca ese stack.
//
// Solo en español: estas búsquedas piden español nativo y no exigen inglés. Si
// hace falta el inglés, usar el CV general (`npm run cv -- en`) o declarar acá
// un bloque `en`; build-cv.mjs corta si se le pide un idioma que la variante no
// declara, para no imprimir el CV general con nombre de variante.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "Next.js · TypeScript · PostgreSQL",
    tagline:
      "Tres años construyendo productos de punta a punta con Next.js, TypeScript y PostgreSQL. Levanté dos plataformas sobre Next.js y Supabase: un SaaS multi-tenant con aislamiento de datos por cliente y control de acceso por roles, y un portal con permisos y flujos de aprobación sobre información confidencial. En Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero un sistema de gestión administrativo-contable y lo llevé a producción. En paralelo, líder técnico de 2winGs, una plataforma B2B que construyo entera —arquitectura, infraestructura, seguridad y diseño— trabajando en remoto y como interlocutor técnico del cliente.",
  },

  // Reemplazos por empresa. Lo no declarado queda como en el CV general.
  experience: {
    "Grupo DELSUD": {
      stack: [
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Drizzle",
        "MySQL",
        "Sequelize",
        "Socket.io",
        "Amazon S3",
        "Trello",
      ],
      highlights: [
        "Desarrollos Del Sud: llevé a producción la plataforma de venta de lotes en cuotas (CRM, Sistema de Gestión y web institucional en Next.js), con entrega en agosto de 2026.",
        "Diseñé desde cero la arquitectura del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes): las pantallas y la API que las alimenta.",
        "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
        "Resolvía alrededor del 65% de las tareas del equipo en cada sprint, asignado consistentemente a las de mayor complejidad técnica.",
        "Hoy trabajo en el SGD, el sistema interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket y un front en React 19.",
      ],
    },

    "2winGs International Group LLC": {
      stack: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "BullMQ",
        "Cloudflare Pages",
        "PM2",
      ],
      highlights: [
        "Diseño de la arquitectura y del orden de construcción de una red profesional B2B, del modelo de datos al contrato de la API, documentado antes de escribir código.",
        "Primera etapa entregada de punta a punta: registro, ingreso, verificación de correo y recuperación de contraseña, con sus pantallas, dentro de un monorepo que comparte los tipos entre el front y la API.",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Seguridad: archivos privados con URLs firmadas de vida corta e identificador de operación en toda escritura, para que un reintento no duplique el efecto.",
        "Planes, precios, límites y permisos configurables en base de datos, sin valores fijos en el código.",
        "Infraestructura y despliegue automático: front en Cloudflare Pages y API en producción bajo PM2, con el build siempre fuera de la máquina de producción.",
        "Trabajo 100% remoto e interlocutor técnico del cliente: ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio de decisión.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Construí desde cero una plataforma SaaS multi-tenant con Next.js 14, TypeScript y Supabase, extendiendo el modelo relacional a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles.",
        "Integraciones con el SDK de Mercado Pago y la API de Google Calendar (OAuth 2.0) para la gestión automática de turnos y pagos.",
        "Tareas programadas (cron jobs) para el envío automático de notificaciones y recordatorios a los usuarios.",
        "Despliegue continuo: configuración y gestión autónoma de los entornos productivos en Vercel.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Full-stack de punta a punta sobre Next.js y Supabase: persistencia, endpoints y flujos de aprobación administrativa.",
        "Arquitectura escalable con autenticación y gestión de permisos para una plataforma con información confidencial.",
        "Estructura jerárquica de contenidos con filtros de búsqueda avanzados y personalizables, y automatización de las notificaciones clave.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Reduje el tiempo de procesamiento de tareas un 20% automatizando procesos clave de un sistema de gestión de obras.",
        "Desarrollé la lógica de negocio central aplicando Scrum para la coordinación de tiempos y requisitos.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Stack principal",
      items: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    },
    { title: "Front-end", items: ["JavaScript", "Material UI", "Sass", "Bootstrap", "PWA"] },
    { title: "Back-end", items: ["Express.js", "NestJS", "Fastify", "Ruby on Rails", "Python"] },
    { title: "Bases de datos", items: ["MySQL", "SQLite", "Redis", "Drizzle", "Sequelize", "Active Record"] },
    { title: "Arquitectura", items: ["Multi-tenant", "Dual-DB", "RBAC", "Migraciones", "Clean Code"] },
    {
      title: "Infraestructura",
      items: ["Vercel", "Cloudflare Pages", "Docker", "PM2", "Amazon S3", "Cloudflare R2"],
    },
    { title: "Herramientas", items: ["Git", "GitHub", "Trello", "Postman", "Vitest", "DBeaver"] },
  ],
};

const target = { suffix: "NextJS", es };

export default target;
