export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  kind: "Trabajo" | "Producto propio" | "Freelance" | "Prueba técnica" | "Herramienta";
  period: string;
  summary: string;
  did: string[];
  how: string[];
  stack: readonly string[];
  links?: readonly ProjectLink[];
  repoNote?: string;
};

export const projects: readonly Project[] = [
  {
    name: "Desarrollos Del Sud",
    kind: "Trabajo",
    period: "2026 — Actualidad · 7 repos",
    summary:
      "Plataforma de venta de lotes en cuotas: un CRM de captación, un sistema de Gestión post-venta (boletos, cuotas, cobranza) y la web institucional pública.",
    did: [
      "Desarrollo y evolución del CRM en producción: contactos, oportunidades, loteos, zonas, asesores y reserva de lotes.",
      "Sistema de Gestión: boleto de compraventa, plan de cuotas con ajuste por IPC, cobranza, caja y reportes.",
      "Web institucional pública en Next.js con animaciones GSAP.",
      "Paquetes compartidos de back y front para dejar de duplicar auth, subida a S3, envío de mails y tema de UI.",
    ],
    how: [
      "Dos backends Express contra MySQL: el CRM sobre Sequelize, Gestión sobre TypeScript + Drizzle, cada uno con su base.",
      "Los sistemas comparten la identidad de la operación (el id de reserva) en vez de acoplarse por HTTP, así una caída no arrastra a la otra.",
      "Frontends Vite + React 18 + MUI; estado de servidor con TanStack Query en Gestión y Redux Toolkit en el CRM.",
      "Autenticación JWT con roles, validación de payloads con Joi y CI en GitLab self-hosted.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
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
    name: "Dial Sport",
    kind: "Producto propio",
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
    name: "Dashboard Financiero",
    kind: "Prueba técnica",
    period: "2026 · Backends en producción",
    summary:
      "Gestión de finanzas con arquitectura desacoplada: dos microservicios de backend independientes y un frontend React con KPIs y gráficos en tiempo real. Es la prueba técnica con la que entré a Grupo Delsud.",
    did: [
      "Microservicio de autenticación (registro, login, perfil) y microservicio financiero (ventas y gastos) desplegados por separado.",
      "Dashboard con KPIs de ventas, gastos y balance neto, CRUD completo de transacciones y filtros por día, semana, mes y año.",
      "Importación masiva de movimientos por JSON y gráfico de evolución alimentado por un endpoint dedicado.",
    ],
    how: [
      "Un ORM distinto por servicio a propósito — Drizzle en auth, Sequelize en finanzas — sobre PostgreSQL, para demostrar ambos.",
      "El servicio de auth emite el JWT y el financiero lo valida; en el cliente, interceptores de Axios adjuntan el token y manejan el 401 cerrando sesión.",
      "Soft delete en lugar de borrado físico: los registros eliminados siguen disponibles para el histórico.",
      "Estilos 100% SASS con variables, mixins y animaciones, sin ninguna librería de componentes, por requisito de la prueba.",
    ],
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Drizzle",
      "Sequelize",
      "PostgreSQL",
      "React 18",
      "Vite",
      "SASS",
      "Recharts",
      "JWT",
    ],
    links: [
      { label: "API de auth", url: "https://backend-auth-drizzle-7xql.onrender.com" },
      { label: "API de finanzas", url: "https://backend-finance-sequelize.onrender.com" },
    ],
  },
  {
    name: "Musik",
    kind: "Producto propio",
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
    kind: "Freelance",
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
    kind: "Herramienta",
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
    name: "Landing Grupo Delsud",
    kind: "Prueba técnica",
    period: "2025 · Online",
    summary:
      "Primera prueba técnica que resolví para Grupo Delsud: una landing responsive completa, entregada en menos de cuatro días.",
    did: [
      "Secciones de hero, características, testimonios, preguntas frecuentes y sponsors, resueltas con componentes reutilizables.",
      "Diseño mobile-first y deploy en Vercel.",
    ],
    how: [
      "Next.js con generación estática: la página se sirve como HTML ya construido, sin trabajo de render en cada visita.",
      "CSS Modules para encapsular los estilos por componente y evitar colisiones al escalar.",
      "Imágenes optimizadas con next/image y una estructura pensada para crecer sin reescribir.",
    ],
    stack: ["Next.js 15", "React 19", "JavaScript", "CSS Modules", "Vercel"],
    links: [
      { label: "Ver demo", url: "https://landing-delsud-challenge.vercel.app/" },
      { label: "Código", url: "https://github.com/VicCurzio/landing-delsud" },
    ],
  },
  {
    name: "Este portfolio",
    kind: "Producto propio",
    period: "2026",
    summary: "El sitio que estás leyendo: una sola página con experiencia, proyectos, stack, formación y contacto.",
    did: [
      "Diseño y desarrollo completo, de la paleta a la estructura de secciones.",
      "Contenido separado del código: actualizar el sitio es editar datos, no JSX.",
    ],
    how: [
      "Next.js con App Router y salida estática, para que cargue instantáneo y sea indexable.",
      "Tailwind CSS 4 con tokens de color definidos en CSS, y tipografías variables cargadas por next/font.",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4"],
    links: [{ label: "Código", url: "https://github.com/VicCurzio/portfolio" }],
  },
] as const;

export type OtherRepo = {
  name: string;
  role: string;
  status: string;
  description: string;
  url?: string;
};

export const otherRepos: readonly OtherRepo[] = [
  {
    name: "Sistema Asclepio",
    role: "Colaborador",
    status: "Repositorio del equipo",
    description:
      "El sistema detrás de mi trabajo en Cognitive Link: gestión clínica en Next.js y Supabase con pacientes, profesionales, turnos y tratamientos, sincronización a Google Calendar, cobros por Mercado Pago, mailing automático y permisos finos sobre la información sensible de cada paciente.",
  },
  {
    name: "Sistema Inari",
    role: "Colaborador",
    status: "Repositorio del equipo",
    description:
      "El segundo sistema de esa misma colaboración: plataforma multi-negocio de venta en Next.js y Supabase, con marketplace, stock, pedidos, entregas y take away, más un sitio público por comercio con páginas configurables desde el panel.",
  },
  {
    name: "Cuatro Carnes",
    role: "Colaborador",
    status: "En pausa",
    description:
      "E-commerce de un frigorífico con Next.js, Prisma, NextAuth y PostgreSQL. Entré como colaborador sobre el repositorio del equipo: tomé features puntuales del front y del modelo de datos, no es un proyecto propio.",
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
    role: "Freelance",
    status: "Discontinuado por el cliente",
    description:
      "Gestión de datos de helicópteros con Next.js y Supabase: permisos sobre datos sensibles, contenidos jerárquicos y flujos de aprobación. Lo desarrollé de punta a punta como freelance; el cliente discontinuó el proyecto y quedó frenado.",
  },
] as const;
