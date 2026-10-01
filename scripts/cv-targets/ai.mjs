// Variante del CV orientada a busquedas Full-Stack sobre producto con IA:
// TypeScript, Next.js y PostgreSQL, mas trabajo real con LLM (RAG, embeddings,
// agentes) y con agentes de codificacion.
//
//   npm run cv -- ai   ->   cv/CV_Victor_Curzio_AI.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts.
//
// Nota de honestidad, para quien edite esta variante: el grupo de skills "IA
// aplicada" NO sale de un trabajo pago, sale de un proyecto propio. Por eso el
// proyecto esta nombrado en el resumen con todas las letras: la regla del CV es
// que toda skill listada tenga de donde agarrarse en el texto. Si alguna vez
// entra experiencia paga de IA, se mueve a la experiencia y el resumen cambia.
//
// Solo en espanol: la busqueda es local y se aplica en espanol.
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "TypeScript · Next.js · PostgreSQL · IA aplicada",
    tagline:
      "Tres años construyendo productos de punta a punta con TypeScript, Next.js y PostgreSQL. Levanté dos plataformas sobre Next.js y Supabase, y en Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero un sistema de gestión administrativo-contable y lo llevé a producción. Hoy soy líder técnico de 2winGs, una plataforma B2B que construyo entera. En proyecto propio construí un sistema de preguntas sobre documentación privada (RAG) con PostgreSQL y pgvector: embeddings, búsqueda híbrida —semántica más palabras exactas, fusionadas por posición—, agente con herramientas y evaluación automática de la recuperación, con el acierto medido antes y después de cada cambio en vez de estimado. Trabajo todos los días con agentes de codificación, con la especificación escrita antes del código.",
  },

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
      ],
      highlights: [
        "Desarrollos Del Sud: llevé a producción la plataforma de venta de lotes en cuotas (CRM, Sistema de Gestión y web institucional en Next.js), con entrega en agosto de 2026.",
        "Diseñé desde cero la arquitectura del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes): las pantallas y la API que las alimenta.",
        "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo los endpoints según el perfil de usuario.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
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
        "Vitest",
        "Cloudflare Pages",
      ],
      highlights: [
        "Diseño de la arquitectura y del orden de construcción de una red profesional B2B, del modelo de datos al contrato de la API, documentado antes de escribir código.",
        "Flujo de trabajo asistido por agentes de codificación: la especificación vive en el repositorio como fuente de verdad y validaciones automáticas propias rechazan cualquier escritura que no cumpla los estándares del repo.",
        "Cada funcionalidad se entrega con su suite de pruebas automatizadas, escritas contra la clase de error que cuidan y verificadas fallando antes de darlas por buenas.",
        "Primera etapa entregada de punta a punta: registro, ingreso, verificación de correo y recuperación de contraseña, dentro de un monorepo que comparte los tipos entre el front y la API.",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Planes, precios, límites y permisos configurables en base de datos, sin valores fijos en el código.",
        "Infraestructura y despliegue automático: front en Cloudflare Pages y API en producción bajo PM2, con el build siempre fuera de la máquina de producción.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Construí desde cero una plataforma SaaS multi-tenant con Next.js 14, TypeScript y Supabase, extendiendo el modelo relacional a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles.",
        "Integraciones con el SDK de Mercado Pago y la API de Google Calendar (OAuth 2.0) para la gestión automática de turnos y pagos.",
        "Tareas programadas (cron jobs) para el envío automático de notificaciones y recordatorios.",
        "Despliegue continuo: configuración y gestión autónoma de los entornos productivos en Vercel.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Full-stack de punta a punta sobre Next.js y Supabase: persistencia, endpoints y flujos de aprobación administrativa.",
        "Arquitectura escalable con autenticación y gestión de permisos para una plataforma con información confidencial.",
        "Estructura jerárquica de contenidos con filtros de búsqueda avanzados y automatización de las notificaciones clave.",
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
      items: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    },
    {
      title: "IA aplicada",
      items: [
        "RAG",
        "pgvector",
        "Embeddings",
        "Búsqueda híbrida",
        "Evals de recuperación",
        "SDK de Anthropic",
        "Agentes con herramientas",
      ],
    },
    { title: "Back-end", items: ["Express.js", "NestJS", "Fastify", "APIs REST", "Microservicios"] },
    { title: "Seguridad", items: ["JWT", "RBAC", "OAuth 2.0", "Gestión de secretos", "URLs firmadas"] },
    { title: "Bases de datos", items: ["MySQL", "SQLite", "Redis", "Drizzle", "Sequelize", "Migraciones"] },
    { title: "Infraestructura", items: ["Docker", "Vercel", "Cloudflare", "PM2", "CI/CD", "Amazon S3"] },
    { title: "Herramientas", items: ["Git", "GitHub", "Vitest", "Postman", "DBeaver"] },
  ],
};

const target = { suffix: "AI", es };

export default target;
