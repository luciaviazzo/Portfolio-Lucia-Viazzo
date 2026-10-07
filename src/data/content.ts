import type { IconName } from '../components/Icon';
import type { Lang } from '../i18n/types';

/** Datos que no dependen del idioma. Los textos viven en src/i18n/. */

export const links = {
  github: 'https://github.com/luciaviazzo',
  linkedin: 'https://linkedin.com/in/lucia-viazzo',
  email: 'viazzo94@gmail.com',
  cv: 'https://drive.google.com/file/d/16HG1bLRiZUEOXHiC8XaxcQBFrcjrPx_B/view?usp=sharing',
} as const;

export const navIds = ['inicio', 'proyectos', 'sobre-mi', 'tecnologias', 'contacto'] as const;
export type NavId = (typeof navIds)[number];

export type ProjectId = 'voxa' | 'market' | 'linkedunq' | 'epersgeist' | 'cuatri';

export type ProjectStatus = 'completed' | 'inProgress';

export interface Project {
  id: ProjectId;
  status: ProjectStatus;
  tags: string[];
  accent: string;
  /** Repositorio del proyecto. Si no hay uno público, omitir. */
  repo?: string;
  /** Demo online; si no existe, el botón "Ver demo" abre el repositorio. */
  demo?: string;
  /** Vista ilustrativa propia del detalle; sin ella se usa una genérica. */
  preview?: 'query';
  /** Capturas reales (rutas dentro de /public). Se muestran antes de las ilustraciones. */
  images?: { src: string; alt: Record<Lang, string> }[];
  /** Año del proyecto. */
  year?: number;
  /** Imagen de portada en la card de proyectos. */
  cover?: string;
  wide?: boolean;
}

export const projects: Project[] = [
  {
    id: 'voxa',
    status: 'inProgress',
    tags: ['React Native', 'TypeScript', 'Next.js', 'Whisper', 'Llama 3.1'],
    accent: '#A5687F',
    year: 2026,
    repo: 'https://github.com/luciaviazzo/voxa',
    cover: '/assets/projects/voxa-portada.png',
    images: [
      { src: '/assets/projects/voxa-1.png', alt: { es: 'Captura 1 de Voxa', en: 'Voxa screenshot 1' } },
      { src: '/assets/projects/voxa-2.png', alt: { es: 'Captura 2 de Voxa', en: 'Voxa screenshot 2' } },
      { src: '/assets/projects/voxa-3.png', alt: { es: 'Captura 3 de Voxa', en: 'Voxa screenshot 3' } },
    ],
  },
  {
    id: 'market',
    status: 'inProgress',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'React', 'SDD'],
    accent: '#B8901F',
    year: 2026,
    repo: 'https://github.com/arodriguezfontana/desapp-gf',
    cover: '/assets/projects/futval-portada.png',
    images: [
      {
        src: '/assets/projects/futval-1.png',
        alt: { es: 'Captura 1 de FULVAL', en: 'FULVAL screenshot 1' },
      },
      {
        src: '/assets/projects/futval-2.png',
        alt: { es: 'Captura 2 de FULVAL', en: 'FULVAL screenshot 2' },
      },
      {
        src: '/assets/projects/futval-3.png',
        alt: { es: 'Captura 3 de FULVAL', en: 'FULVAL screenshot 3' },
      },
    ],
  },
  {
    id: 'cuatri',
    status: 'inProgress',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Python', 'SDD'],
    accent: '#D9819F',
    year: 2026,
    cover: '/assets/projects/cuatri-portada.png',
    images: [
      { src: '/assets/projects/cuatri-1.png', alt: { es: 'Captura 1 de Cuatri', en: 'Cuatri screenshot 1' } },
      { src: '/assets/projects/cuatri-2.png', alt: { es: 'Captura 2 de Cuatri', en: 'Cuatri screenshot 2' } },
      { src: '/assets/projects/cuatri-3.png', alt: { es: 'Captura 3 de Cuatri', en: 'Cuatri screenshot 3' } },
    ],
  },
  {
    id: 'linkedunq',
    status: 'completed',
    tags: ['React', 'NestJS', 'Tailwind CSS', 'Vite', 'SQL', 'TypeScript', 'SCRUM'],
    accent: '#5B82A0',
    year: 2025,
    demo: 'https://linked-unq.vercel.app/',
    cover: '/assets/projects/linkedunq-portada.png',
    images: [
      {
        src: '/assets/projects/linkedunq-1.jpg',
        alt: {
          es: 'Pantalla de inicio de LinkedUNQ con los botones Buscar Empleos y Mi Perfil',
          en: 'LinkedUNQ home screen with the Find Jobs and My Profile buttons',
        },
      },
      {
        src: '/assets/projects/linkedunq-2.jpg',
        alt: {
          es: 'Listado de empleos con filtros por modalidad',
          en: 'Job listing with filters by work mode',
        },
      },
      {
        src: '/assets/projects/linkedunq-3.jpg',
        alt: {
          es: 'Gestión de las ofertas publicadas por una empresa',
          en: 'Management of the job offers published by a company',
        },
      },
    ],
    wide: true,
  },
  {
    id: 'epersgeist',
    status: 'completed',
    tags: ['Java', 'SQL', 'Spring Boot', 'Neo4j', 'MongoDB', 'Redis', 'JUnit'],
    accent: '#8F7BC4',
    year: 2025,
    repo: 'https://github.com/luciaviazzo/epersgeist-polyglot-persistence',
    cover: '/assets/projects/epersgeist-portada.png',
    images: [
      {
        src: '/assets/projects/epersgeist-1.png',
        alt: { es: 'Captura 1 de Epersgeist', en: 'Epersgeist screenshot 1' },
      },
      {
        src: '/assets/projects/epersgeist-2.png',
        alt: { es: 'Captura 2 de Epersgeist', en: 'Epersgeist screenshot 2' },
      },
      {
        src: '/assets/projects/epersgeist-3.png',
        alt: { es: 'Captura 3 de Epersgeist', en: 'Epersgeist screenshot 3' },
      },
    ],
    wide: true,
  },
];

/** Iconos de los bloques de "Sobre mí"; los textos van en el mismo orden en el diccionario. */
export const factIcons: IconName[] = ['code', 'users', 'bike'];

/** `devicon` es el sufijo de clase de devicon; sin él se muestra un icono genérico con `color`. */
export interface Tech {
  name: string;
  devicon?: string;
  /** Color de marca para los que no tienen icono en devicon. */
  color?: string;
  /** Logos monocromos de la marca (negro): usan el color del texto. */
  mono?: boolean;
}

export type TechGroupId = 'backend' | 'datos' | 'frontend';

export const techGroups: { id: TechGroupId; accent: string; items: Tech[] }[] = [
  {
    id: 'backend',
    accent: '#A5687F',
    items: [
      { name: 'TypeScript', devicon: 'typescript-plain' },
      { name: 'NestJS', devicon: 'nestjs-plain' },
      { name: 'Java', devicon: 'java-plain' },
      { name: 'Spring Boot', devicon: 'spring-plain' },
    ],
  },
  {
    id: 'datos',
    accent: '#8F7BC4',
    items: [
      { name: 'Python', devicon: 'python-plain' },
      { name: 'PostgreSQL', devicon: 'postgresql-plain' },
      { name: 'Redis', devicon: 'redis-plain' },
      { name: 'MongoDB', devicon: 'mongodb-plain' },
    ],
  },
  {
    id: 'frontend',
    accent: '#E0865C',
    items: [
      { name: 'React', devicon: 'react-original' },
      { name: 'Vite', devicon: 'vitejs-plain' },
      { name: 'Tailwind CSS', devicon: 'tailwindcss-original' },
      { name: 'React Native', devicon: 'react-original' },
    ],
  },
];
