import type { Dict } from './es';

export const en: Dict = {
  meta: {
    title: 'Lucía Viazzo — Full Stack Developer',
    description:
      'Portfolio of Lucía Viazzo, a programmer and university student looking for a first role as a full stack developer.',
  },
  skip: 'Skip to content',
  header: {
    homeAria: 'Lucia, go to home',
    navAria: 'Main',
    nav: {
      inicio: 'Home',
      proyectos: 'Projects',
      'sobre-mi': 'About me',
      tecnologias: 'Technologies',
      contacto: 'Contact',
    },
    githubAria: 'GitHub (opens in a new tab)',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLangShort: 'ES',
    switchLangAria: 'Switch to Spanish',
    switchLangCode: 'es',
  },
  hero: {
    eyebrow: 'Software Developer',
    hi: "Hi, I'm",
    lead: 'Software developer focused on backend and advanced student of the Computer Science degree.',
    sub: 'I focus on building scalable solutions and applying good design and architecture practices.',
    viewProjects: 'View projects',
    viewCv: 'View CV',
    newTab: ' (opens in a new tab)',
    socialAria: 'Social links',
    emailAria: 'Send an email',
    photoAlt: 'Portrait of Lucía Viazzo',
  },
  projects: {
    title: 'Projects',
    viewProject: 'View project',
    statusLabel: 'Status',
    status: { completed: 'Completed', inProgress: 'In progress' },
    items: {
      voxa: {
        title: 'Voxa',
        description: 'Personal finance app for older adults, controlled by voice.',
        kind: 'Personal project',
        about:
          'A personal finance app designed for older adults: instead of forms and menus, you talk to it and it records and explains your expenses.',
        features: [
          'Records expenses and income by voice, no forms needed',
          'Transcribes what you say with Whisper',
          'Shows available balance on the home screen, and movements with expenses and income',
          'Designed for older adults: large buttons, one action per screen and high contrast',
        ],
      },
      market: {
        title: 'FÚTVAL',
        description:
          'Platform that calculates the market value of players from the top five leagues and lets you buy and sell their tokens.',
        kind: 'University project',
        keywords: ['REST API', 'Scraping', 'Weekly valuation', 'Token portfolio'],
        about:
          'Platform to buy and sell tokens for players from the top five leagues. Values are recalculated every week using data from WhoScored and Football-Data.org.',
        features: [
          'Data from 5 leagues via WhoScored (scraping) and Football-Data.org, with local fallback if the source fails',
          'Weekly valuation with configurable weighting strategies and price history',
          'Buy and sell tokens with portfolio, average purchase price and profit/loss',
        ],
      },
      linkedunq: {
        title: 'LinkedUNQ',
        description: 'Job platform for UNQ students that connects junior profiles with companies in the tech sector.',
        kind: 'University project',
        keywords: ['REST API', 'Role management', 'Complex CRUD', 'SCRUM'],
        about:
          'A job platform for UNQ students, built as a team using agile methodologies and focused on connecting junior profiles with companies in the tech sector.',
        features: [
          'Three roles: student, company and administrator',
          'Profile creation and validation',
          'Job offer publishing and applicant management',
          'Job search browsing and application management',
        ],
      },
      epersgeist: {
        title: 'Epersgeist',
        description: 'Polyglot persistence backend system that integrates multiple persistence strategies within a single architecture.',
        kind: 'University project',
        keywords: ['REST API', 'Multilayer Architecture', 'Polyglot Persistence'],
        about:
          'The project combines relational, document-oriented, graph and cache databases, applied to a complex domain modelled through a REST API and multilayer architecture.',
        features: [
          'REST API with multilayer architecture',
          'Relational persistence with Hibernate and SQL',
          'Graph database with Neo4j',
          'Document database with MongoDB',
          'Cache with Redis',
        ],
      },
      cuatri: {
        title: 'Cuatri',
        description: 'Multi-degree academic manager: load your history and the platform calculates what you can take and generates schedule options without overlaps.',
        kind: 'Personal project',
        about: 'Multi-degree academic manager: load your history and the platform calculates what you can take and generates schedule options without overlaps.',
        features: [
          'Upload the study plan as a PDF and it generates prerequisites automatically',
          'Calculates the status of each subject based on your prerequisites',
          'Generate schedule combinations without overlaps based on your preferred days, shifts and number of subjects',
          'Grade history with automatic GPA',
          'Multi-degree: each degree has its own plan, history and class schedule',
        ],
      },
    },
  },
  modal: {
    close: 'Close',
    aboutTitle: 'What it is about',
    featuresTitle: 'What it does',
    techTitle: 'Technologies',
    demo: 'View demo',
    github: 'GitHub',
    previous: 'Previous',
    next: 'Next',
    otherProjects: 'Other projects',
    unavailableTitle: 'Not available',
    unavailable: 'This link is not available yet.',
    status: (n: number, total: number, title: string) => `Project ${n} of ${total}: ${title}`,
    carousel: {
      label: 'Project images',
      roleDescription: 'carousel',
      slideRoleDescription: 'slide',
      slideLabel: (n: number, total: number, label: string) => `${n} of ${total}: ${label}`,
      prev: 'Previous image',
      next: 'Next image',
      goTo: (n: number) => `Go to image ${n}`,
      caption: 'Illustrative view with sample data',
      slideMain: 'Main screen',
      slideList: 'List',
      slideChart: 'Charts',
    },
    demoPreview: {
      url: 'queries.app',
      question: 'Which were the top 5 best-selling products in August?',
      sqlLabel: 'Generated SQL',
      sql: `SELECT p.name, SUM(s.quantity) AS total
FROM sales s JOIN products p ON p.id = s.product_id
WHERE s.date BETWEEN '2026-08-01' AND '2026-08-31'
GROUP BY p.name ORDER BY total DESC LIMIT 5;`,
      rows: ['Plain T-shirt', 'Mug', 'Backpack', 'Bottle', 'Cap'],
      input: 'Ask something about your data…',
    },
  },
  about: {
    title: 'About me',
    p1: 'I started the **Computer Science degree at UNQ** in 2023, drawn by something simple: understanding how things work and solving problems. I focus on building solid software, exploring new technologies and not settling for the first solution that works.',
    p2: 'I currently work at **Practia** as an AI developer and I am expanding my training in **data science and artificial intelligence** to integrate them further into my practice.',
    facts: [
      {
        title: 'Backend, data & AI',
        text: 'I specialise in backend and in how to integrate data and artificial intelligence into real solutions.',
        more: 'I specialise in backend development and increasingly in how to integrate data and artificial intelligence into real solutions. It is the area where I go deepest and where I aim to grow.',
        points: [
          'Computer Science degree (UNQ) since 2023',
          'Data Science & AI technician degree (IFTS 24)',
          'Teaching assistant for Object-Oriented Programming 1',
          'Currently working as AI Developer at Practia',
        ],
      },
      {
        title: 'Teamwork',
        text: 'Academic and professional projects where I learned to collaborate and deliver results together.',
        more: 'Throughout my career I took part in academic and professional projects where I learned to collaborate, share responsibilities and reach results together. I understood that soft skills are just as important as technical ones.',
        points: [
          'Group university projects with real deliveries',
          'University teaching assistant: I support groups of students',
          'Application of agile methodologies',
          'Freelance projects with other developers',
        ],
      },
      {
        title: 'Methodical and thorough',
        text: 'Three years in administration shaped my sense of order, tidiness and attention to detail.',
        more: 'Before moving into development I worked three years in administration. That experience shaped my sense of order, tidiness and attention to detail, and today those habits show in how I organise code, document decisions and approach a problem.',
        points: [
          'Three years of experience in administrative management',
          'Attention to detail and organised work',
          'Documentation and recording of technical decisions',
          'Work habits carried over into development',
        ],
      },
    ],
  },
  tech: {
    title: 'Technologies',
    groups: {
      backend: 'Backend',
      datos: 'Data',
      frontend: 'Frontend',
    },
    names: { 'Git y GitHub': 'Git & GitHub' },
  },
  footer: {
    title: 'Shall we build something together?',
    text: 'Always eager to learn and join innovative projects.',
    made: 'Made with love and lots of coffee.',
  },
};
