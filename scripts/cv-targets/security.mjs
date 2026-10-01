// Variante del CV orientada a busquedas de backend con foco en seguridad
// aplicada: autorizacion en servidor, aislamiento de datos, gestion de
// secretos, operacion sobre Linux/Docker y copias de seguridad.
//
//   npm run cv -- security   ->   cv/CV_Victor_Curzio_Security.pdf
//
// Solo declara lo que cambia respecto de src/content/portfolio.ts: contacto,
// formacion y fechas salen del mismo contenido que el sitio. Los `highlights`
// no son nuevos: son los controles que ya estan construidos y verificados en
// 2winGs y en Grupo DELSUD, contados desde el angulo de seguridad.
//
// Solo en espanol: la busqueda es para LATAM y se aplica en espanol. Si hace
// falta el ingles, usar el CV general (`npm run cv -- en`).
//
// La variante NO se copia a public/: el sitio sigue ofreciendo el CV general.

const es = {
  profile: {
    title: "Desarrollador Full-Stack",
    subtitle: "Backend · Seguridad aplicada · Infraestructura",
    tagline:
      "Tres años construyendo y operando productos en producción con Node.js, TypeScript y bases SQL, con foco en lo que no se ve: autorización en el servidor, aislamiento de datos entre clientes, gestión de secretos e integridad de las escrituras. Hoy soy líder técnico de una plataforma B2B que construyo y opero de punta a punta sobre un servidor Linux propio, con autorización cerrada por defecto, límites de uso, copias cifradas verificadas y 486 pruebas automatizadas en verde. Antes, en Grupo DELSUD, fui referente técnico de un equipo de 5 personas y llevé a producción un sistema de gestión administrativo-contable conectado a un CRM existente, resolviendo las condiciones de carrera y los duplicados que aparecían entre los dos sistemas.",
  },

  // Reemplazos por empresa. Lo no declarado queda como en el CV general.
  experience: {
    "Grupo DELSUD": {
      stack: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "Drizzle",
        "Sequelize",
        "Microservicios",
        "Socket.io",
        "Amazon S3",
        "React",
        "Trello",
      ],
      highlights: [
        "Control de acceso (RBAC): middlewares de verificación de token y autorización por rol, protegiendo cada endpoint de la API según el perfil de usuario.",
        "Resolví bugs críticos de integridad de datos, incluidas race conditions en la creación de registros concurrentes y en la sincronización entre dos sistemas distintos.",
        "Arquitectura dual-DB: conecté el CRM existente (MySQL, Sequelize, ~25 modelos) con el nuevo Sistema de Gestión (PostgreSQL, Drizzle) y sostuve la sincronización bidireccional automática entre ambos.",
        "Diseñé desde cero el esquema y la API del Sistema de Gestión, con 20 módulos funcionales (contratos, cobranza, flujo de caja, IPC, reportes), y lo llevé a producción en agosto de 2026.",
        "Saneé el código heredado del CRM antes de reutilizarlo: consultas SQL (N+1 y selects sin lista de campos), variables de entorno expuestas, dependencias sin uso y código muerto.",
        "Hoy trabajo en el SGD, el sistema interno del grupo: microservicios Node/PostgreSQL, uno por departamento, con notificaciones en tiempo real por WebSocket.",
        "Fui referente técnico de un equipo de 5 personas (2 devs, UX, QA, PM): definí estándares de código y participé en las decisiones técnicas clave junto al tech lead.",
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
        "Linux",
        "Docker",
        "PM2",
        "Cloudflare",
        "React",
      ],
      highlights: [
        "Autorización cerrada por defecto en el servidor: toda ruta exige sesión salvo una lista pública explícita, y esa lista está cubierta por pruebas para que nadie la amplíe sin darse cuenta.",
        "Autenticación endurecida: contraseñas con argon2id y un hash señuelo que iguala el tiempo de respuesta, para que el login no revele si la cuenta existe; doble verificación CSRF, incluido el caso en que el navegador no manda el origen.",
        "Tokens de verificación y recuperación guardados hasheados, de un solo uso, con la condición de carrera cerrada en la propia consulta de quemado.",
        "Límite de uso por cuenta e IP contado en Redis con un script Lua: atómico y en un solo viaje, sin ventana entre leer y escribir.",
        "Identificador de operación en toda escritura: el reintento de un cliente no duplica el efecto. Es una decisión técnica documentada del proyecto, no un parche.",
        "Gestión de secretos y entorno: el servicio se niega a arrancar en producción si falta un secreto o si la conexión a la base no viaja con verificación completa del certificado.",
        "Datos privados por diseño: una empresa accede al perfil completo solo de quien se postuló a su oferta, impuesto en la capa de datos y no en la interfaz, y los archivos privados se sirven con URLs firmadas de vida corta.",
        "Operación: API y worker sobre un servidor Linux propio bajo PM2, panel en Cloudflare Pages, migraciones aplicadas antes del reload y el build siempre fuera de la máquina de producción.",
        "Copias de seguridad cifradas y verificadas antes de subirse, con el control de frescura corriendo fuera del servidor que respalda, para que la caída del servidor no apague también su vigilancia.",
        "486 pruebas automatizadas en verde (unitarias, de integración y de navegador), con la suite completa como puerta de entrada a cada despliegue.",
      ],
    },

    "Cognitive Link — Consulting & IT Solutions": {
      highlights: [
        "Construí desde cero una plataforma SaaS multi-tenant con aislamiento de datos por cliente y control de acceso por roles, extendiendo el modelo relacional a más de 24 tablas.",
        "Integraciones autenticadas con servicios externos: SDK de Mercado Pago y API de Google Calendar por OAuth 2.0, con manejo de credenciales y renovación de permisos.",
        "Tareas programadas (cron jobs) para notificaciones y recordatorios automáticos.",
        "Despliegue continuo: configuración y gestión autónoma de los entornos productivos.",
      ],
    },

    "Cicaré": {
      highlights: [
        "Arquitectura con autenticación y gestión de permisos para una plataforma con documentación técnica confidencial de un fabricante de helicópteros.",
        "Full-stack de punta a punta: persistencia, endpoints y flujos de aprobación administrativa antes de publicar un documento.",
      ],
    },

    "Felanix Construcciones": {
      highlights: [
        "Reduje el tiempo de procesamiento de tareas un 20% automatizando procesos clave de un sistema de gestión de obras.",
        "Entornos reproducibles con Docker y soporte técnico integral para garantizar la continuidad operativa.",
      ],
    },
  },

  skillGroups: [
    {
      title: "Seguridad",
      items: [
        "Autorización deny-by-default",
        "RBAC",
        "CSRF",
        "argon2id",
        "Rate limiting",
        "Gestión de secretos",
        "URLs firmadas",
        "Idempotencia",
      ],
    },
    {
      title: "Back-end",
      items: ["Node.js", "TypeScript", "NestJS", "Express.js", "Fastify", "Python", "APIs REST"],
    },
    {
      title: "Bases de datos",
      items: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Redis", "Migraciones", "Drizzle", "Sequelize"],
    },
    {
      title: "Infraestructura",
      items: ["Linux", "Docker", "PM2", "Cloudflare", "Backups cifrados", "CI/CD", "Amazon S3", "Cloudflare R2"],
    },
    { title: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "Supabase"] },
    { title: "Calidad", items: ["Vitest", "Playwright", "TDD", "Code review", "Claude Code"] },
  ],

  // Mismo listado del CV general, con los de servidor y seguridad primero.
  courses: [
    "Administración de Servidores GNU/Linux (Seguridad) — Min. Educación BA (Dic. 2023)",
    "Administración de Base de Datos (MySQL) — Min. Educación BA (Nov. 2023)",
    "Curso Profesional Ruby on Rails — Código Facilito (Nov. 2023)",
    "Bootcamp POO JAVA — Alkemy (Abr. 2024)",
    "Carrera Desarrollo Front-end React — Coderhouse (Feb.–Jul. 2023)",
    "Git y GitHub — Alura Latam (Abr. 2023)",
  ],
};

const target = { suffix: "Security", es };

export default target;
