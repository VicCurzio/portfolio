// Variante del CV orientada a busquedas Full-Stack Sr de servidor: Node.js +
// Python sobre SQL, microservicios, APIs REST e integridad de datos, con
// pruebas unitarias y programacion agentica.
//
//   npm run cv -- node-python   ->   cv/CV_Victor_Curzio_NodePython.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: contacto,
// formacion y fechas salen del mismo contenido que el sitio. Los `highlights`
// estan reordenados y recortados, no inventados: dicen lo mismo que el CV
// general, empezando por el trabajo de servidor, el modelo de datos y la
// calidad del codigo.
//
// Solo en espanol: es una busqueda local que no exige ingles. Si hace falta,
// usar el CV general (`npm run cv -- en`).
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "Node.js · Python · Microservicios e integridad de datos",
    tagline:
      "Tres años construyendo la lógica de servidor de productos en producción: APIs REST, microservicios y modelos de datos relacionales, con foco en la integridad y en el rendimiento de las consultas. En Grupo DELSUD fui referente técnico de un equipo de 5 personas: diseñé desde cero el esquema y la API de un sistema de gestión administrativo-contable y lo llevé a producción conectado a un CRM existente; hoy trabajo ahí sobre microservicios Node/PostgreSQL. En paralelo, líder técnico de 2winGs, una plataforma B2B que construyo de punta a punta con NestJS y PostgreSQL. Trabajo con la especificación escrita antes del código, pruebas automatizadas por funcionalidad y agentes de codificación como parte del flujo diario.",
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
      ],
      highlights: [
        "Hoy trabajo en el SGD, el sistema de gestión interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket.",
        "Diseñé desde cero el esquema y la API del Sistema de Gestión de Desarrollos Del Sud, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes), y lo llevé a producción en agosto de 2026.",
        "Arquitectura dual-DB: conecté el CRM existente (Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (Drizzle ORM), con sincronización bidireccional automática de datos.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre sistemas.",
        "Optimicé el código heredado del CRM: consultas SQL (N+1 y selects sin lista de campos), variables de entorno, dependencias sin uso y código muerto.",
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo cada endpoint según el perfil de usuario.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
        "Resolvía alrededor del 65% de las tareas del equipo en cada sprint, asignado consistentemente a las de mayor complejidad técnica.",
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
        "Diseñé la arquitectura y el orden de construcción del producto, del modelo de datos al contrato de la API, documentado en decisiones técnicas antes de escribir código.",
        "API en NestJS sobre Fastify con Drizzle y PostgreSQL, y trabajos en segundo plano con BullMQ y Redis: primera etapa entregada de punta a punta (registro, ingreso, verificación de correo y recuperación de contraseña).",
        "Cada funcionalidad se entrega con su suite de pruebas automatizadas en Vitest, escritas contra la clase de error que cuidan y verificadas fallando antes de darlas por buenas.",
        "Flujo de trabajo asistido por agentes de codificación: la especificación vive en el repositorio como fuente de verdad, con validaciones automáticas propias que obligan a cumplir los estándares del repo en cada escritura.",
        "Seguridad: archivos privados con URLs firmadas de vida corta, e identificador de operación en toda escritura para que un reintento no duplique el efecto.",
        "Reglas de privacidad impuestas en la capa de datos y no en la interfaz: una empresa accede al perfil completo solo de quien se postuló a su oferta.",
        "Infraestructura y despliegue automático: API y worker en producción bajo PM2, panel en Cloudflare Pages y el build siempre fuera de la máquina de producción.",
        "Interlocutor técnico del cliente: ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio de decisión.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Construí desde cero una plataforma SaaS multi-tenant, extendiendo el modelo relacional base a más de 24 tablas con aislamiento seguro de datos por cliente y control de acceso por roles.",
        "Integraciones con el SDK de Mercado Pago y la API de Google Calendar (OAuth 2.0) para la gestión automática de turnos y pagos.",
        "Tareas programadas (cron jobs) para el envío automático de notificaciones y recordatorios a los usuarios.",
        "Despliegue continuo: configuración y gestión autónoma de los entornos productivos.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Arquitectura escalable con autenticación y gestión de permisos para una plataforma con información confidencial.",
        "Full-stack de punta a punta: persistencia, endpoints y flujos de aprobación administrativa.",
        "Estructura jerárquica de contenidos con filtros de búsqueda avanzados y automatización de las notificaciones clave.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Reduje el tiempo de procesamiento de tareas un 20% automatizando procesos clave de un sistema de gestión de obras.",
        "Desarrollé la lógica de negocio central aplicando Scrum para la coordinación de tiempos y requisitos.",
        "Entornos reproducibles con Docker y soporte técnico integral para garantizar la continuidad operativa.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Back-end",
      items: ["Node.js", "TypeScript", "Express.js", "NestJS", "Fastify", "Python", "Ruby on Rails"],
    },
    {
      title: "Bases de datos",
      items: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Redis", "Migraciones", "Drizzle", "Sequelize"],
    },
    {
      title: "Arquitectura",
      items: ["Microservicios", "APIs REST", "Dual-DB", "RBAC", "Integridad de datos", "Clean Code"],
    },
    {
      title: "Calidad",
      items: ["Vitest", "TDD", "Pruebas automatizadas", "Code review", "Documentación en el repo"],
    },
    { title: "Infraestructura", items: ["Docker", "PM2", "CI/CD", "Vercel", "Cloudflare Pages", "Amazon S3"] },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
    { title: "Herramientas", items: ["Git", "GitHub", "Pull requests", "Claude Code", "Postman", "DBeaver"] },
  ],

  // Mismo listado del CV general, con los de servidor y datos primero.
  courses: [
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const target = { suffix: "NodePython", es };

export default target;
