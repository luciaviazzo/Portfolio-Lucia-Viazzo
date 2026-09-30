import type { ProjectId } from '../data/content';

interface ProjectText {
  title: string;
  description: string;
  kind: string;
  about: string;
  features: string[];
  /** Palabras clave que se muestran bajo el título del detalle. */
  keywords?: string[];
}

/** Diccionario en español. Es la fuente de tipos: en.ts debe tener exactamente la misma forma. */
export const es = {
  meta: {
    title: 'Lucía Viazzo — Desarrolladora Full Stack',
    description:
      'Portfolio de Lucía Viazzo, programadora y estudiante universitaria buscando su primer rol como desarrolladora full stack.',
  },
  skip: 'Saltar al contenido',
  header: {
    homeAria: 'Lucia, ir al inicio',
    navAria: 'Principal',
    nav: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      'sobre-mi': 'Sobre mí',
      tecnologias: 'Tecnologías',
      contacto: 'Contacto',
    },
    githubAria: 'GitHub (se abre en una pestaña nueva)',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLangShort: 'EN',
    switchLangAria: 'Cambiar a inglés',
    switchLangCode: 'en',
  },
  hero: {
    eyebrow: 'Desarrolladora full stack',
    hi: 'Hola, soy',
    lead: 'Programadora y estudiante universitaria, buscando mi primer rol como desarrolladora full stack.',
    sub: 'Armo aplicaciones web completas: desde el backend y la base de datos hasta una interfaz que se entiende a la primera.',
    viewProjects: 'Ver proyectos',
    viewCv: 'Ver CV',
    newTab: ' (se abre en una pestaña nueva)',
    socialAria: 'Redes',
    emailAria: 'Enviar email',
    photoAlt: 'Retrato de Lucía Viazzo',
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ver proyecto',
    statusLabel: 'Estado',
    status: { completed: 'Terminado', inProgress: 'En desarrollo' },
    items: {
      db: {
        title: 'Preguntale a tu base de datos',
        description:
          'Escribís una pregunta en español y el sistema la convierte en SQL, la ejecuta y te muestra el resultado.',
        kind: 'Proyecto personal',
        about:
          'Empezó como un dashboard de ventas y terminó siendo algo más flexible: en lugar de armar un gráfico para cada pregunta, cualquiera puede consultar la base de datos escribiendo lo que quiere saber.',
        features: [
          'Traduce la pregunta a SQL con Claude, orquestado con LangChain',
          'Muestra el SQL generado junto al resultado, para poder revisarlo',
          'Backend en NestJS con datos en PostgreSQL',
          'Nació como Sales Dashboard y cambió de enfoque a mitad de camino',
        ],
      },
      voxa: {
        title: 'Voxa',
        description: 'App de finanzas personales para personas mayores que se maneja hablando.',
        kind: 'Proyecto personal',
        about:
          'Una app de finanzas personales pensada para personas mayores: en lugar de formularios y menús, se le habla y ella registra y explica los gastos.',
        features: [
          'Carga de gastos e ingresos por voz',
          'App móvil con Expo y React Native',
          'Panel web en Next.js',
          'Datos y autenticación con Supabase',
        ],
      },
      market: {
        title: 'Mercado de jugadores de fútbol',
        description:
          'Plataforma que calcula el valor de mercado de jugadores de las cinco grandes ligas y permite comprar y vender sus tokens.',
        kind: 'Proyecto personal',
        about:
          'Una plataforma que calcula el valor de mercado de jugadores de las cinco grandes ligas y permite comprar y vender tokens de cada uno.',
        features: [
          'Cálculo del valor de mercado de cada jugador',
          'Compra y venta de tokens',
          'API en NestJS con TypeScript y PostgreSQL',
          'Interfaz en React',
        ],
      },
      linkedunq: {
        title: 'LinkedUNQ',
        description: 'Plataforma de empleo para estudiantes de la UNQ que conecta perfiles junior con empresas del sector tecnológico.',
        kind: 'Proyecto en equipo',
        keywords: ['API REST', 'Gestión de roles', 'CRUD complejo', 'SCRUM'],
        about:
          'Plataforma de empleo para estudiantes de la UNQ, desarrollada en equipo bajo metodologías ágiles y enfocada en conectar perfiles junior con empresas del sector tecnológico.',
        features: [
          'Tres roles: estudiante, empresa y administrador',
          'Creación y validación de perfiles',
          'Publicación de ofertas laborales',
          'Exploración de búsquedas y gestión de postulaciones',
        ],
      },
      bike: {
        title: 'Marketplace de bike tours',
        description: 'Reservá tours en bici y alquilá bicicletas, empezando por Buenos Aires.',
        kind: 'Proyecto personal',
        about:
          'Un marketplace para reservar tours en bici y alquilar bicicletas, empezando por Buenos Aires. Nace de mi experiencia trabajando en una empresa de bike tours.',
        features: [
          'Reserva de tours en bici',
          'Alquiler de bicicletas',
          'Pagos con Stripe',
          'Next.js con TypeScript y Tailwind CSS',
        ],
      },
    } as Record<ProjectId, ProjectText>,
  },
  modal: {
    close: 'Cerrar',
    aboutTitle: 'De qué se trata',
    featuresTitle: 'Lo que hace',
    techTitle: 'Tecnologías',
    demo: 'Ver demo',
    github: 'GitHub',
    previous: 'Anterior',
    next: 'Siguiente',
    otherProjects: 'Otros proyectos',
    status: (n: number, total: number, title: string) => `Proyecto ${n} de ${total}: ${title}`,
    carousel: {
      label: 'Imágenes del proyecto',
      roleDescription: 'carrusel',
      slideRoleDescription: 'diapositiva',
      slideLabel: (n: number, total: number, label: string) => `${n} de ${total}: ${label}`,
      prev: 'Imagen anterior',
      next: 'Imagen siguiente',
      goTo: (n: number) => `Ir a la imagen ${n}`,
      caption: 'Vista ilustrativa con datos de ejemplo',
      slideMain: 'Pantalla principal',
      slideList: 'Listado',
      slideChart: 'Gráficos',
    },
    demoPreview: {
      url: 'consultas.app',
      question: '¿Cuáles fueron los 5 productos más vendidos en agosto?',
      sqlLabel: 'SQL generado',
      sql: `SELECT p.nombre, SUM(v.cantidad) AS total
FROM ventas v JOIN productos p ON p.id = v.producto_id
WHERE v.fecha BETWEEN '2026-08-01' AND '2026-08-31'
GROUP BY p.nombre ORDER BY total DESC LIMIT 5;`,
      rows: ['Remera lisa', 'Taza', 'Mochila', 'Botella', 'Gorra'],
      input: 'Preguntá algo sobre tus datos…',
    },
  },
  about: {
    title: 'Sobre mí',
    // **texto** se muestra resaltado
    p1: 'Soy programadora y estudio en la universidad. Estoy construyendo mi portfolio para conseguir mi primer trabajo como **desarrolladora full stack junior**, y me gusta probar tecnologías distintas: desde interfaces con **React** hasta APIs con **NestJS** o **Spring Boot**.',
    p2: 'Trabajé en una empresa de **bike tours en Buenos Aires**, así que conozco el turismo desde adentro. Es un rubro que me interesa y en el que me gustaría **emprender**.',
    facts: [
      {
        title: 'Full stack',
        text: 'Frontend, backend y base de datos en un mismo proyecto.',
        more: 'Me gusta entender un producto de punta a punta: desde cómo se modelan los datos hasta cómo se ve y se siente cada pantalla.',
        points: [
          'Frontend con React, Next.js y TypeScript',
          'APIs con NestJS y Spring Boot',
          'Bases de datos con PostgreSQL y Supabase',
          'Pruebas y despliegue con Jest, GitHub Actions y Vercel',
        ],
      },
      {
        title: 'Trabajo en equipo',
        text: 'Proyectos de la facultad y colaboraciones con otras personas.',
        more: 'Estudio en la universidad y ahí aprendí a trabajar con otras personas: repartir tareas, revisar el código de los demás y llegar juntos a una entrega.',
        points: [
          'Proyectos grupales de la facultad',
          'Colaboraciones con otras personas',
          'Git y GitHub para trabajar en paralelo',
          'Revisión de código y pruebas automáticas',
        ],
      },
      {
        title: 'Turismo',
        text: 'Experiencia en una empresa de bike tours en Buenos Aires.',
        more: 'Trabajé en una empresa de bike tours en Buenos Aires, así que conozco el turismo desde adentro. Es un rubro que me interesa y en el que me gustaría emprender.',
        points: [
          'Conozco el rubro desde adentro',
          'Me gustaría emprender en turismo',
          'Inspiró mi marketplace de bike tours',
        ],
      },
    ],
  },
  tech: {
    title: 'Tecnologías',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend y datos',
      ai: 'IA y herramientas',
    },
    names: {} as Record<string, string>,
  },
  footer: {
    title: '¿Hablamos?',
    text: 'Estoy abierta a oportunidades como desarrolladora full stack junior y a proyectos desafiantes. Escribime y charlamos.',
    made: 'Hecho con cariño y mucho café.',
  },
};

export type Dict = typeof es;
