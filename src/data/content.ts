import type { IconName } from '../components/Icon';

export const links = {
  github: 'https://github.com/luciaviazzo',
  linkedin: 'https://linkedin.com/in/lucia-viazzo',
  email: 'viazzo94@gmail.com',
  cv: 'https://drive.google.com/file/d/16HG1bLRiZUEOXHiC8XaxcQBFrcjrPx_B/view?usp=sharing',
} as const;

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  /** Tipo de proyecto, se muestra en el encabezado del detalle. */
  kind: string;
  about: string;
  features: string[];
  /** Repositorio del proyecto. */
  repo: string;
  /** Demo online; si no existe, el botón "Ver demo" abre el repositorio. */
  demo?: string;
  /** Vista ilustrativa propia del detalle; sin ella se usa una genérica. */
  preview?: 'query';
  /** Capturas reales (rutas dentro de /public). Se muestran antes de las ilustraciones. */
  images?: { src: string; alt: string }[];
  wide?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Preguntale a tu base de datos',
    description:
      'Escribís una pregunta en español y el sistema la convierte en SQL, la ejecuta y te muestra el resultado.',
    tags: ['Claude API', 'LangChain', 'NestJS', 'Python', 'PostgreSQL'],
    accent: '#E0865C',
    kind: 'Proyecto personal',
    about:
      'Empezó como un dashboard de ventas y terminó siendo algo más flexible: en lugar de armar un gráfico para cada pregunta, cualquiera puede consultar la base de datos escribiendo lo que quiere saber.',
    features: [
      'Traduce la pregunta a SQL con Claude, orquestado con LangChain',
      'Muestra el SQL generado junto al resultado, para poder revisarlo',
      'Backend en NestJS con datos en PostgreSQL',
      'Nació como Sales Dashboard y cambió de enfoque a mitad de camino',
    ],
    repo: links.github,
    preview: 'query',
  },
  {
    title: 'Voxa',
    description: 'App de finanzas personales para personas mayores que se maneja hablando.',
    tags: ['Expo', 'React Native', 'Next.js', 'Supabase'],
    accent: '#A5687F',
    kind: 'Proyecto personal',
    about:
      'Una app de finanzas personales pensada para personas mayores: en lugar de formularios y menús, se le habla y ella registra y explica los gastos.',
    features: [
      'Carga de gastos e ingresos por voz',
      'App móvil con Expo y React Native',
      'Panel web en Next.js',
      'Datos y autenticación con Supabase',
    ],
    repo: links.github,
  },
  {
    title: 'Mercado de jugadores de fútbol',
    description:
      'Plataforma que calcula el valor de mercado de jugadores de las cinco grandes ligas y permite comprar y vender sus tokens.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'React'],
    accent: '#8F7BC4',
    kind: 'Proyecto personal',
    about:
      'Una plataforma que calcula el valor de mercado de jugadores de las cinco grandes ligas y permite comprar y vender tokens de cada uno.',
    features: [
      'Cálculo del valor de mercado de cada jugador',
      'Compra y venta de tokens',
      'API en NestJS con TypeScript y PostgreSQL',
      'Interfaz en React',
    ],
    repo: links.github,
  },
  {
    title: 'Alta digital de empresas',
    description: 'Flujo paso a paso para dar de alta una empresa, con formularios que guardan el avance.',
    tags: ['Lit', 'TypeScript', 'Java', 'Spring Boot'],
    accent: '#B8901F',
    kind: 'Proyecto de la facultad',
    about:
      'Un flujo paso a paso para dar de alta una empresa. Cada formulario guarda el avance, así que se puede retomar donde se dejó.',
    features: [
      'Formulario dividido en pasos, con avance guardado',
      'Componentes web con Lit y TypeScript',
      'Backend en Java con Spring Boot',
    ],
    repo: links.github,
    wide: true,
  },
  {
    title: 'Marketplace de bike tours',
    description: 'Reservá tours en bici y alquilá bicicletas, empezando por Buenos Aires.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    accent: '#D9819F',
    kind: 'Proyecto personal',
    about:
      'Un marketplace para reservar tours en bici y alquilar bicicletas, empezando por Buenos Aires. Nace de mi experiencia trabajando en una empresa de bike tours.',
    features: [
      'Reserva de tours en bici',
      'Alquiler de bicicletas',
      'Pagos con Stripe',
      'Next.js con TypeScript y Tailwind CSS',
    ],
    repo: links.github,
    wide: true,
  },
];

export const facts: { icon: IconName; title: string; text: string }[] = [
  { icon: 'code', title: 'Full stack', text: 'Frontend, backend y base de datos en un mismo proyecto.' },
  { icon: 'users', title: 'Trabajo en equipo', text: 'Proyectos de la facultad y colaboraciones con otras personas.' },
  { icon: 'bike', title: 'Turismo', text: 'Experiencia en una empresa de bike tours en Buenos Aires.' },
];

/** `devicon` es el sufijo de clase de devicon; sin él se muestra un icono genérico con `color`. */
export interface Tech {
  name: string;
  devicon?: string;
  /** Color de marca para los que no tienen icono en devicon. */
  color?: string;
  /** Logos monocromos de la marca (negro): usan el color del texto. */
  mono?: boolean;
}

export const techGroups: { title: string; accent: string; items: Tech[] }[] = [
  {
    title: 'Frontend',
    accent: '#E0865C',
    items: [
      { name: 'React', devicon: 'react-original' },
      { name: 'TypeScript', devicon: 'typescript-plain' },
      { name: 'Next.js', devicon: 'nextjs-plain', mono: true },
      { name: 'Vite', devicon: 'vitejs-plain' },
      { name: 'Tailwind CSS', devicon: 'tailwindcss-original' },
      { name: 'Lit', color: '#324FFF' },
      { name: 'React Native', devicon: 'react-original' },
    ],
  },
  {
    title: 'Backend y datos',
    accent: '#A5687F',
    items: [
      { name: 'Node.js', devicon: 'nodejs-plain' },
      { name: 'NestJS', devicon: 'nestjs-plain' },
      { name: 'Java', devicon: 'java-plain' },
      { name: 'Spring Boot', devicon: 'spring-plain' },
      { name: 'Python', devicon: 'python-plain' },
      { name: 'PostgreSQL', devicon: 'postgresql-plain' },
      { name: 'Supabase', devicon: 'supabase-plain' },
    ],
  },
  {
    title: 'IA y herramientas',
    accent: '#8F7BC4',
    items: [
      { name: 'Claude API', color: '#D97757' },
      { name: 'LangChain', color: '#1C7C6B' },
      { name: 'Whisper', color: '#10A37F' },
      { name: 'Git y GitHub', devicon: 'github-original', mono: true },
      { name: 'GitHub Actions', devicon: 'githubactions-plain' },
      { name: 'Jest', devicon: 'jest-plain' },
      { name: 'Testcontainers', devicon: 'docker-plain' },
      { name: 'SonarCloud', devicon: 'sonarqube-plain' },
      { name: 'Vercel', devicon: 'vercel-original', mono: true },
    ],
  },
];
