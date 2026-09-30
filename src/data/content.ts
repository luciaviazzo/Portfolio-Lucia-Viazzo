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

export type ProjectId = 'db' | 'voxa' | 'market' | 'linkedunq' | 'bike';

export type ProjectStatus = 'completed' | 'inProgress';

export interface Project {
  id: ProjectId;
  status: ProjectStatus;
  tags: string[];
  accent: string;
  /** Repositorio del proyecto. */
  repo: string;
  /** Demo online; si no existe, el botón "Ver demo" abre el repositorio. */
  demo?: string;
  /** Vista ilustrativa propia del detalle; sin ella se usa una genérica. */
  preview?: 'query';
  /** Capturas reales (rutas dentro de /public). Se muestran antes de las ilustraciones. */
  images?: { src: string; alt: Record<Lang, string> }[];
  /** Imagen de portada en la card de proyectos. */
  cover?: string;
  wide?: boolean;
}

export const projects: Project[] = [
  {
    id: 'db',
    status: 'inProgress',
    tags: ['Claude API', 'LangChain', 'NestJS', 'Python', 'PostgreSQL'],
    accent: '#E0865C',
    repo: links.github,
    preview: 'query',
  },
  {
    id: 'voxa',
    status: 'inProgress',
    tags: ['Expo', 'React Native', 'Next.js', 'Supabase'],
    accent: '#A5687F',
    repo: links.github,
  },
  {
    id: 'market',
    status: 'inProgress',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'React'],
    accent: '#8F7BC4',
    repo: links.github,
  },
  {
    id: 'linkedunq',
    status: 'completed',
    tags: ['React', 'NestJS', 'Prisma', 'Tailwind CSS', 'Vite', 'SQL', 'JavaScript', 'Jest'],
    accent: '#B8901F',
    repo: links.github,
    cover: '/assets/projects/linkedunq-1.jpg',
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
    id: 'bike',
    status: 'inProgress',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    accent: '#D9819F',
    repo: links.github,
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

export type TechGroupId = 'frontend' | 'backend' | 'ai';

export const techGroups: { id: TechGroupId; accent: string; items: Tech[] }[] = [
  {
    id: 'frontend',
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
    id: 'backend',
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
    id: 'ai',
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
