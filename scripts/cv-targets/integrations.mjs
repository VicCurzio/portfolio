// Variante del CV para busquedas Ssr de aplicaciones y servicios internos:
// sistemas de gestion propios de una empresa, integraciones entre sistemas y
// con terceros, APIs REST sobre SQL, y el trabajo con las areas de negocio
// para convertir un requerimiento en una decision tecnica.
//
//   npm run cv -- integrations   ->   cv/CV_Victor_Curzio_Integrations.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: contacto,
// formacion y fechas salen del mismo contenido que el sitio. Los `highlights`
// estan reordenados y recortados, no inventados: dicen lo mismo que el CV
// general, empezando por los sistemas internos, las integraciones y la
// resolucion de incidentes.
//
// Solo en espanol: es una busqueda local que no exige ingles. Si hace falta,
// usar el CV general (`npm run cv -- en`).
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "Sistemas internos · Integraciones · APIs REST",
    tagline:
      "Tres años desarrollando y manteniendo aplicaciones y servicios internos en producción: sistemas de gestión a medida, APIs REST sobre bases relacionales e integraciones entre sistemas que ya existían. En Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero el esquema y la API de un sistema de gestión administrativo-contable, lo integré con el CRM existente y lo llevé a producción; hoy trabajo ahí sobre los microservicios del sistema de gestión interno del grupo. Trabajo con requerimientos acordados con las áreas de negocio, especificación escrita antes del código, pruebas automatizadas y documentación en el repositorio.",
  },

  // Reemplazos por empresa. Lo no declarado queda como en el CV general.
  experience: {
    "Grupo DELSUD": {
      stack: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "Microservicios",
        "PostgreSQL",
        "MySQL",
        "Drizzle",
        "Sequelize",
        "Socket.io",
        "Amazon S3",
        "React",
        "Trello",
      ],
      highlights: [
        "Hoy desarrollo el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con solicitudes entre áreas y notificaciones en tiempo real por WebSocket.",
        "Integración entre sistemas: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM) en una arquitectura dual-DB, con sincronización bidireccional automática de los datos compartidos.",
        "Diseñé desde cero el esquema y la API del Sistema de Gestión de Desarrollos Del Sud, con 20 módulos funcionales (contratos, cobranza, flujo de caja, actualización por IPC, reportes), y lo llevé a producción en agosto de 2026. Hoy lo operan 15 personas entre asesores, administración y cobranza, sobre más de 200 contratos.",
        "Resolución de incidentes: bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre los dos sistemas.",
        "Análisis técnico con las áreas de negocio: traduje los requerimientos de administración y cobranza a modelo de datos y endpoints, y fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM) definiendo estándares de código junto al tech lead.",
        "Mantenimiento del código heredado del CRM: consultas SQL (N+1 y selects sin lista de campos), variables de entorno, dependencias sin uso y código muerto.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo cada endpoint según el perfil de usuario.",
      ],
    },

    "2winGs International Group LLC": {
      stack: [
        "TypeScript",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "BullMQ",
        "Vitest",
        "PM2",
        "React",
      ],
      highlights: [
        "Definiciones de arquitectura: diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
        "API en NestJS sobre Fastify con Drizzle y PostgreSQL, y trabajos en segundo plano con BullMQ y Redis: primera etapa entregada de punta a punta (registro, ingreso, verificación de correo y recuperación de contraseña).",
        "Testing: cada funcionalidad se entrega con su suite de pruebas automatizadas en Vitest, escritas contra la clase de error que cuidan y verificadas fallando antes de darlas por buenas.",
        "Infraestructura en la nube y despliegue automático: API y worker en producción bajo PM2, panel en Cloudflare Pages, archivos en almacenamiento de objetos y el build siempre fuera de la máquina de producción.",
        "Despliegue automatizado en GitHub Actions: compila fuera del servidor, copia el artefacto por SSH, corre las migraciones y recién después reinicia, con nginx de reverse proxy delante de la API y dos entornos separados con HTTPS. La base se copia a diario hacia otro proveedor, y la copia se restauró contra una base descartable para comprobar que sirve.",
        "Seguridad: archivos privados con URLs firmadas de vida corta, e identificador de operación en toda escritura para que un reintento no duplique el efecto.",
        "Interlocutor técnico del cliente, un área no técnica: ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio de decisión.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Integraciones con terceros: SDK de Mercado Pago y API de Google Calendar (OAuth 2.0) para la gestión automática de turnos y pagos.",
        "Construí desde cero una plataforma SaaS multi-tenant, extendiendo el modelo relacional base a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles. Llegó a producción con 5 negocios operando en paralelo sobre la misma instancia.",
        "Tareas programadas (cron jobs) para el envío automático de notificaciones y recordatorios a los usuarios.",
        "Despliegue continuo: configuración y gestión autónoma de los entornos productivos.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Portal de documentación técnica para los clientes de un fabricante: arquitectura con autenticación y gestión de permisos sobre información confidencial.",
        "Full-stack de punta a punta: persistencia, endpoints y flujos de aprobación administrativa.",
        "Estructura jerárquica de contenidos con filtros de búsqueda avanzados y automatización de las notificaciones clave.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Automaticé procesos clave de un sistema interno de gestión de obras que antes se hacían a mano, acortando el tiempo de procesamiento de tareas.",
        "Desarrollé la lógica de negocio central aplicando Scrum para la coordinación de tiempos y requisitos con el equipo.",
        "Entornos reproducibles con Docker y soporte técnico integral para garantizar la continuidad operativa.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Back-end",
      items: ["Node.js", "TypeScript", "JavaScript", "Express.js", "NestJS", "Python", "Ruby on Rails"],
    },
    {
      title: "Bases de datos",
      items: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Redis", "Migraciones", "Drizzle", "Sequelize"],
    },
    {
      title: "Arquitectura",
      items: ["APIs REST", "Microservicios", "CI/CD", "Integraciones entre sistemas", "Dual-DB", "RBAC", "Clean Code"],
    },
    {
      title: "Calidad",
      items: ["Vitest", "Playwright", "Pruebas automatizadas", "Code review", "Documentación en el repo"],
    },
    { title: "Infraestructura", items: ["Docker", "PM2", "CI/CD", "Vercel", "Cloudflare Pages", "Amazon S3"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Herramientas", items: ["Git", "GitHub", "Pull requests", "Scrum", "Kanban", "Trello", "Postman", "DBeaver"] },
  ],

  // Mismo listado del CV general, con POO Java y bases de datos primero: el
  // aviso pide Java entre los lenguajes posibles y SQL como excluyente.
  courses: [
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const target = { suffix: "Integrations", es };

export default target;
