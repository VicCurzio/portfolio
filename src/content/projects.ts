export type ProjectLink = {
  label: string;
  url: string;
};

// El tipo de proyecto es una clave, no un cartel: con ella el codigo elige el
// glifo de la grilla de seleccion, y cada idioma le pone su nombre (ui.ts).
export type ProjectKind = "work" | "product" | "freelance" | "tech-test" | "tool";

export type Project = {
  name: string;
  kind: ProjectKind;
  period: string;
  summary: string;
  did: string[];
  how: string[];
  stack: readonly string[];
  links?: readonly ProjectLink[];
  repoNote?: string;
  // Carátula: captura de la primera pantalla (inicio o login), en public/projects/.
  image?: string;
};

export const projects = [
  {
    name: "Desarrollos Del Sud",
    image: "/projects/desarrollos-del-sud.webp",
    kind: "work",
    period: "Grupo DELSUD · Ene — Ago 2026 · 5 repos · Entregado",
    summary:
      "Plataforma de venta de lotes en cuotas: un CRM de captación, un sistema de Gestión post-venta (boletos, cuotas, cobranza) y la web institucional pública.",
    did: [
      "Me sumé en las primeras semanas del proyecto y lo llevé hasta la entrega en producción, en agosto de 2026.",
      "Desarrollo y evolución del CRM en producción: contactos, oportunidades, loteos, zonas, asesores y reserva de lotes.",
      "Sistema de Gestión, terminado técnicamente en agosto de 2026: boleto de compraventa, plan de cuotas con ajuste por IPC, cobranza, caja, comprobantes y reportes.",
      "Web institucional pública en Next.js con animaciones GSAP.",
      "Saneamiento del código heredado del CRM para poder reutilizarlo en un producto nuevo: estructura de carpetas, variables de entorno, consultas SQL (N+1 y selects sin campos), dependencias sin uso, endpoints y componentes muertos, archivos de más de 500 líneas y documentación de API.",
    ],
    how: [
      "Dos backends Express contra MySQL: el CRM sobre Sequelize, Gestión sobre TypeScript + Drizzle, cada uno con su base.",
      "Los sistemas comparten la identidad de la operación (el id de reserva) en vez de acoplarse por HTTP, así una caída no arrastra a la otra.",
      "Frontends Vite + React 18 + MUI, con TanStack Query como estado de servidor en los dos sistemas.",
      "Autenticación JWT con roles, validación de payloads con Joi y deploy automatizado desde GitLab self-hosted.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Amazon S3",
      "Drizzle",
      "React",
      "MUI",
      "TanStack Query",
      "Next.js",
      "GSAP",
    ],
    repoNote: "Repositorios privados (GitLab self-hosted del cliente)",
  },
  {
    name: "2winGs",
    image: "/projects/2wings.webp",
    kind: "freelance",
    period: "2026 — En desarrollo",
    summary:
      "Red profesional B2B de talento creativo para 2winGs International Group LLC: un perfil vivo con reputación medible, niveles y oportunidades curadas. Entro como desarrollador y líder técnico.",
    did: [
      "Diseño de la arquitectura y del orden de construcción del sistema, del modelo de datos al contrato de la API.",
      "Primera etapa terminada de punta a punta: registro, ingreso, verificación de correo y recuperación de contraseña, con sus pantallas.",
      "Sistema de reputación (un índice de 0 a 100) y gamificación, separados por diseño: la actividad dentro de la plataforma nunca sube la reputación profesional.",
      "Infraestructura y despliegue automático: el panel publicado en Cloudflare Pages y la API en producción en un servidor propio con PM2; los archivos de usuario, en almacenamiento privado.",
      "Sistema de diseño del front: tokens nombrados por función en un solo archivo, mobile-first y con criterios de accesibilidad, listo para recibir la identidad de marca cuando el cliente la defina.",
      "Ordené tres documentos de producto que se contradecían entre sí en una jerarquía de fuentes de verdad, que el cliente adoptó como criterio para decidir.",
      "Análisis previo de la custodia de fondos que prevé el roadmap: es actividad regulada, se resuelve apoyándose en un procesador licenciado, y obliga a modelar el dinero como asientos que no se editan desde el primer esquema.",
    ],
    how: [
      "API NestJS sobre Fastify con Drizzle y PostgreSQL, trabajos en segundo plano con BullMQ y Redis, y un front Vite + React servido como estático.",
      "Las reglas de privacidad se imponen en la capa de datos y no en la interfaz: una empresa ve el perfil completo solo de quien se postuló a su oferta.",
      "Nada de planes, precios, límites ni pesos del índice vive en el código: son configuración en base de datos, editable desde el panel de administración.",
      "Toda operación de escritura viaja con un identificador propio, así un reintento por una conexión cortada no duplica el efecto.",
      "Los archivos que sube el profesional viven en almacenamiento privado y se sirven con enlaces firmados de vida corta: el CV es insumo del equipo de validación, no contenido público del perfil.",
      "El build nunca corre en la máquina de producción: se compila afuera y se publica el resultado, así un despliegue no puede tumbar el servidor.",
    ],
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
    repoNote: "Repositorio privado del cliente",
  },
  {
    name: "Dial Sport",
    image: "/projects/dial-sport.webp",
    kind: "product",
    period: "2026 — En desarrollo",
    summary:
      "SaaS de videos deportivos amateur: cámaras instaladas en los complejos graban los partidos y los jugadores compran sus videos y highlights.",
    did: [
      "Diseño del producto end-to-end, incluido el modelo de ingresos 60/40 entre complejo y plataforma, sin suscripción: se paga por video.",
      "App Next.js con catálogo de videos, autenticación de jugadores, checkout y panel para los complejos.",
      "Definición del pipeline de captura: cámaras IP más un NVR que sube las grabaciones al storage automáticamente.",
      "Aviso de novedades en cada versión, para que un cambio en el producto no pase desapercibido para los complejos ni para los jugadores.",
    ],
    how: [
      "Supabase como backend: PostgreSQL, Auth y Storage de miniaturas, con el schema versionado en migraciones SQL.",
      "Los videos van a Cloudflare R2 y no a Supabase: el egress es el costo que domina un producto de video, y en R2 es gratis.",
      "Capa de servicios aislada por proveedor para que la UI nunca hable directo con Supabase, R2 o Mercado Pago.",
      "App Router con separación deliberada de server y client components, y tipos centralizados para todo el dominio.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "Cloudflare R2",
      "Mercado Pago",
    ],
    repoNote: "Repositorio privado",
  },
  {
    name: "CV Match",
    image: "/projects/cv-match.webp",
    kind: "product",
    period: "2026 · Online",
    summary:
      "Herramienta web para armar, adaptar y descargar un CV según el mercado al que se postula (Argentina o afuera) y según quién lo va a leer: una persona o un filtro automático de postulaciones.",
    did: [
      "Editor por secciones con vista previa en vivo, plantillas y descarga en PDF.",
      "Perfil de mercado y modo para filtros automáticos (ATS): cada combinación cambia qué se pide, qué se oculta y qué plantillas se permiten, por ejemplo la foto.",
      "Diagnóstico por reglas que marca lo flojo del CV y lo compara contra un aviso pegado, sin inventar un puntaje que no existe.",
      "Importación de un CV existente desde PDF o Word, versiones por postulación sobre un CV base y carta de presentación.",
    ],
    how: [
      "Todo corre en el navegador, sin servidor ni base de datos: el CV lleva datos personales y nunca sale de la máquina del usuario.",
      "El PDF se genera con react-pdf como texto real y no como imagen, para que un filtro automático lo pueda leer.",
      "Los datos se validan con zod; el dominio está cubierto por más de 300 tests con Vitest, y las pruebas de punta a punta con Playwright frenan la publicación si fallan.",
      "Cada versión por postulación es una capa sobre el CV base: hereda los hechos y solo cambia cómo se cuentan.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "react-pdf", "zod", "Vitest"],
    links: [
      { label: "Ver demo", url: "https://viccurzio.github.io/cv-match/" },
      { label: "Código", url: "https://github.com/VicCurzio/cv-match" },
    ],
  },
  {
    name: "Musik",
    image: "/projects/musik.webp",
    kind: "product",
    period: "2026 · Online",
    summary:
      "Reproductor de música instalable (PWA) que lee los archivos del propio dispositivo: privado, sin cuenta, sin servidor y sin anuncios.",
    did: [
      "Biblioteca persistente con vistas por artista, álbum, género, carpeta, listas y favoritos, búsqueda sin acentos y listas automáticas que se arman solas con lo que más se escucha.",
      "Ecualizador de 5 bandas con preajustes, volumen parejo entre canciones, velocidad variable, cola manual, temporizador para dormir y controles desde la pantalla de bloqueo.",
      "Letras sincronizadas leídas de los archivos .lrc que viajan junto a la música, sin depender de ninguna API externa.",
      "Integración con el sistema: abrir un MP3 con la app desde el explorador de archivos, recibir canciones compartidas desde otras apps y accesos directos en el ícono.",
      "Aviso de novedades en cada actualización, alimentado por el changelog del propio repositorio.",
      "Soporte de MP3, WAV, FLAC y WMA, incluidos los formatos que el navegador no reproduce de forma nativa.",
    ],
    how: [
      "Todo ocurre en el navegador: ningún archivo sale del dispositivo y la app nunca escribe en el almacenamiento del teléfono, guarda sus propias copias en IndexedDB.",
      "El volumen se empareja midiendo el nivel de cada canción con un OfflineAudioContext al importarla. Solo atenúa: amplificar digitalmente un tema bajo lo distorsiona.",
      "La lectura de etiquetas corre en un Web Worker y la lista se pinta por bloques, así importar cientos de archivos no congela la interfaz.",
      "WMA y FLAC se transcodifican localmente con ffmpeg.wasm, cargado en lazy para no penalizar el arranque de quien solo escucha MP3.",
      "Se pide almacenamiento persistente al navegador: sin eso el sistema puede borrar una biblioteca de varios GB sin avisar.",
      "Tests con Vitest sobre la parte más enredada — cola, alcance de reproducción, aleatorio y repetición — que es la que se rompe en silencio.",
    ],
    stack: [
      "Vite",
      "JavaScript",
      "PWA",
      "IndexedDB",
      "Web Audio API",
      "Media Session API",
      "Web Workers",
      "ffmpeg.wasm",
      "Vitest",
    ],
    links: [
      { label: "Ver demo", url: "https://viccurzio.github.io/musik/" },
      { label: "Código", url: "https://github.com/VicCurzio/musik" },
    ],
  },
  {
    name: "Plagas Out",
    image: "/projects/plagas-out.webp",
    kind: "freelance",
    period: "2026",
    summary: "Sitio de un servicio de control de plagas, con formulario de contacto que envía mails reales sin backend propio.",
    did: [
      "Landing de una página con servicios, zona de cobertura y contacto, en componentes tipados.",
      "Formulario de contacto con envío asíncrono real: estado de carga, manejo de errores y fallback a mailto si el envío falla.",
    ],
    how: [
      "React 19 + Vite sin backend: el envío lo resuelve EmailJS desde el cliente, con las credenciales en variables de entorno fuera del repositorio.",
      "Oxlint como linter en lugar de ESLint, por velocidad en un proyecto de este tamaño, y PostCSS para los estilos.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "EmailJS", "PostCSS", "Oxlint"],
    links: [{ label: "Código", url: "https://github.com/VicCurzio/plagas-out" }],
  },
  {
    name: "Bot de WhatsApp",
    image: "/projects/bot-de-whatsapp.webp",
    kind: "tool",
    period: "2025",
    summary: "Herramienta de escritorio para enviar un mensaje de WhatsApp a una lista de contactos cargada desde un Excel.",
    did: [
      "Versión con interfaz gráfica: elegís la pestaña y la columna del Excel, editás el mensaje y ajustás los tiempos sin tocar código.",
      "Versión CLI para correrlo desatendido sobre un archivo fijo.",
      "Normalización automática de los números al formato internacional.",
      "Versionado con aviso de novedades: al abrir después de una actualización, la app cuenta qué cambió.",
    ],
    how: [
      "pandas y openpyxl para leer el Excel, pywhatkit para manejar WhatsApp Web y customtkinter para la interfaz.",
      "Pausas aleatorias de 25 a 40 segundos entre mensajes y tiempos de carga configurables, para no saturar WhatsApp Web ni disparar bloqueos.",
      "El changelog del repositorio es la única fuente de la versión y de las novedades, con un script de release que las cierra y las fecha.",
    ],
    stack: ["Python", "pandas", "openpyxl", "pywhatkit", "customtkinter"],
    links: [{ label: "Código", url: "https://github.com/VicCurzio/bot_whatsapp" }],
  },
  {
    name: "Portfolio",
    image: "/projects/portfolio.webp",
    kind: "product",
    period: "2026",
    summary: "El sitio que estás leyendo, con el estilo de una consola de 8 bits: experiencia, proyectos, stack, formación y contacto, en español e inglés.",
    did: [
      "Diseño y desarrollo completo: intro animada, selección de proyectos con cuadro de diálogo y pixel art propio.",
      "Dos idiomas y tema claro y oscuro, con el contraste de texto medido en los dos.",
      "Contenido separado del código: el sitio, los seis CV en PDF y la imagen para compartir salen de los mismos datos.",
    ],
    how: [
      "Next.js con App Router y salida estática, publicada en GitHub Pages después de pasar lint y chequeo de tipos.",
      "Las traducciones son tablas tipadas contra el contenido en español: un dato sin traducir no compila.",
      "Los CV y la imagen se generan con Chrome sin ventana, sin sumar dependencias al proyecto.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    links: [{ label: "Código", url: "https://github.com/VicCurzio/portfolio" }],
  },
] as const satisfies readonly Project[];

export type OtherRepo = {
  name: string;
  role: string;
  status: string;
  description: string;
  url?: string;
  image?: string;
};

export const otherRepos = [
  {
    name: "SGD — Grupo DELSUD",
    image: "/projects/sgd.webp",
    role: "Colaborador",
    status: "En desarrollo",
    description:
      "Sistema de gestión interno de Grupo DELSUD: un ecosistema de microservicios en Node y PostgreSQL, uno por departamento, donde cada área maneja sus solicitudes con plantillas de formularios dinámicos, más tareas, calendario y notificaciones en tiempo real por WebSocket. La identidad de usuarios y departamentos vive en un único servicio de auth que el resto consume. Me sumé al equipo como colaborador, sobre la sección de Producto y Tecnología: el detalle de producto con edición e historial, el alta de unidades y productos, y el tablero de tareas que el ERP embebe como micro-frontend.",
  },
  {
    name: "Sistema Asclepio",
    image: "/projects/sistema-asclepio.webp",
    role: "Colaborador",
    status: "Repositorio del equipo",
    description:
      "El sistema detrás de mi trabajo en Cognitive Link: gestión clínica en Next.js y Supabase con pacientes, profesionales, turnos y tratamientos, sincronización a Google Calendar, cobros por Mercado Pago, mailing automático y permisos finos sobre la información sensible de cada paciente.",
  },
  {
    name: "Sistema Inari",
    image: "/projects/sistema-inari.webp",
    role: "Colaborador",
    status: "Repositorio del equipo",
    description:
      "El segundo sistema de esa misma colaboración: plataforma multi-negocio de venta en Next.js y Supabase, con marketplace, stock, pedidos, entregas y take away, más un sitio público por comercio con páginas configurables desde el panel.",
  },
  {
    name: "Unagi",
    role: "Colaborador",
    status: "Repositorio de la empresa",
    description:
      "App Ruby on Rails de gestión de obras de Felanix Construcciones. Trabajé como colaborador dentro del equipo durante la pasantía, sumando lógica de negocio y automatizaciones sobre un código base ya existente.",
  },
  {
    name: "OfiJobs",
    role: "Colaborador",
    status: "Quedó en ideación",
    description:
      "Marketplace de servicios con Spring Boot y React. Participé como colaborador en un equipo de varios desarrolladores; el proyecto no pasó de la etapa de ideación.",
  },
  {
    name: "Cicaré",
    image: "/projects/cicare.webp",
    role: "Freelance",
    status: "Retomado en 2026",
    description:
      "Portal de documentación técnica de helicópteros con Next.js y Supabase: permisos sobre datos sensibles, contenidos jerárquicos y flujos de aprobación. Lo desarrollé de punta a punta como freelance; estuvo frenado y volvió a moverse en 2026. Con el mismo cliente arrancó un segundo sistema, de stock de partes y conjuntos para la planta (React + Express + SQLite), hoy en desarrollo.",
  },
  {
    name: "Dashboard Financiero",
    image: "/projects/dashboard-financiero.webp",
    role: "Prueba técnica",
    status: "Backends en producción",
    description:
      "La prueba técnica con la que entré a Grupo DELSUD: dos microservicios independientes (autenticación con Drizzle y finanzas con Sequelize, sobre PostgreSQL) y un frontend React con KPIs, gráficos y ABM de transacciones.",
  },
  {
    name: "Landing Grupo DELSUD",
    image: "/projects/landing-grupo-delsud.webp",
    role: "Prueba técnica",
    status: "Online",
    description:
      "Primera prueba técnica para Grupo DELSUD: una landing responsive en Next.js con generación estática y CSS Modules, entregada en menos de cuatro días y publicada en Vercel.",
    url: "https://github.com/VicCurzio/landing-delsud",
  },
  {
    name: "Job Alerts",
    role: "Herramienta propia",
    status: "Uso personal",
    description:
      "Script en Python que lee por IMAP, en solo lectura, las alertas de empleo de LinkedIn y deja cada día una cola de postulación filtrada por perfil, con el motivo de cada descarte. No se postula solo: la decisión sigue siendo humana.",
  },
] as const satisfies readonly OtherRepo[];
