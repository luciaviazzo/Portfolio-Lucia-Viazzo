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
    eyebrow: 'Software Developer',
    hi: 'Hola, soy',
    lead: 'Desarrolladora de software con foco en backend y estudiante avanzada de la Licenciatura en Informática.',
    sub: 'Me enfoco en construir soluciones escalables y aplicar buenas prácticas de diseño y arquitectura.',
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
      voxa: {
        title: 'Voxa',
        description: 'App mobile de finanzas personales para personas mayores que se maneja hablando.',
        kind: 'Proyecto personal',
        about:
          'Una app de finanzas personales pensada para personas mayores: en lugar de formularios y menús, se le habla y ella registra y explica los gastos.',
        features: [
          'Registra gastos e ingresos por voz, sin formularios',
          'Transcribe lo que decís con Whisper',
          'Muestra el saldo disponible en el inicio, y los movimientos con gastos e ingresos',
          'Pensada para personas mayores: botones grandes, una acción por pantalla y mucho contraste',
        ],
      },
      market: {
        title: 'FÚTVAL',
        description:
          'Plataforma que calcula el valor de mercado de jugadores de las cinco grandes ligas y permite comprar y vender sus tokens.',
        kind: 'Proyecto universitario',
        keywords: ['API REST', 'Scraping', 'Cotización semanal', 'Portfolio de tokens'],
        about:
          'Plataforma para comprar y vender tokens de jugadores de las cinco grandes ligas. Los valores se recalculan cada semana usando datos de WhoScored y Football-Data.org.',
        features: [
          'Datos de 5 ligas desde WhoScored (scraping) y Football-Data.org, con fallback local si falla la fuente',
          'Cotización semanal con estrategias de ponderación configurables e historial de precios',
          'Compra y venta de tokens con portfolio, precio promedio de compra y ganancia/pérdida',
        ],
      },
      linkedunq: {
        title: 'LinkedUNQ',
        description: 'Plataforma de empleo para estudiantes de la UNQ que conecta perfiles junior con empresas del sector tecnológico.',
        kind: 'Proyecto universitario',
        keywords: ['API REST', 'Gestión de roles', 'CRUD complejo', 'SCRUM'],
        about:
          'Plataforma de empleo para estudiantes de la UNQ, desarrollada en equipo bajo metodologías ágiles y enfocada en conectar perfiles junior con empresas del sector tecnológico.',
        features: [
          'Tres roles: estudiante, empresa y administrador',
          'Creación y validación de perfiles',
          'Publicación de ofertas laborales y gestión de postulantes',
          'Exploración de búsquedas y gestión de postulaciones',
        ],
      },
      epersgeist: {
        title: 'Epersgeist',
        description: 'Sistema backend de persistencia políglota que integra múltiples estrategias de persistencia dentro de una misma arquitectura.',
        kind: 'Proyecto universitario',
        keywords: ['API REST', 'Arquitectura Multicapa', 'Persistencia Políglota'],
        about:
          'El proyecto combina bases de datos relacionales, orientadas a documentos, grafos y caché, aplicadas sobre un dominio complejo modelado mediante una API REST y arquitectura multicapa.',
        features: [
          'API REST con arquitectura multicapa',
          'Persistencia relacional con Hibernate y SQL',
          'Base de datos de grafos con Neo4j',
          'Base de datos de documentos con MongoDB',
          'Caché con Redis',
        ],
      },
      cuatri: {
        title: 'Cuatri',
        description: 'Gestor académico multi-carrera: cargás tu historial y la plataforma calcula qué podés cursar y genera opciones de cursada sin solapamientos.',
        kind: 'Proyecto personal',
        about: 'Gestor académico multi-carrera: cargás tu historial y la plataforma calcula qué podés cursar y genera opciones de cursada sin solapamientos.',
        features: [
          'Subís el plan de estudios en PDF y genera las correlativas automáticamente',
          'Calcula el estado de cada materia según tus correlativas',
          'Generá combinaciones de cursada sin solapamientos según tus días, turnos y cantidad de materias preferidas',
          'Historial con notas y promedio automático',
          'Multi-carrera: cada carrera tiene su propio plan, historial y oferta de comisiones',
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
    unavailableTitle: 'No disponible',
    unavailable: 'Este enlace todavía no está disponible.',
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
      backend: 'Backend',
      datos: 'Datos',
      frontend: 'Frontend',
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
