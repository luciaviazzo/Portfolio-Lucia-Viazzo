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
    eyebrow: 'Full stack developer',
    hi: "Hi, I'm",
    lead: 'Programmer and university student, looking for my first role as a full stack developer.',
    sub: 'I build complete web applications: from the backend and the database to an interface that makes sense at first glance.',
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
          'Record expenses and income by voice',
          'Mobile app with Expo and React Native',
          'Web dashboard in Next.js',
          'Data and authentication with Supabase',
        ],
      },
      market: {
        title: 'FULVAL',
        description:
          'Platform that calculates the market value of players from the top five leagues and lets you buy and sell their tokens.',
        kind: 'University project',
        about:
          'A platform that calculates the market value of players from the top five leagues and lets you buy and sell tokens for each one.',
        features: [
          'Market value calculation for each player',
          'Buying and selling tokens',
          'NestJS API with TypeScript and PostgreSQL',
          'React interface',
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
      bike: {
        title: 'Turia Bikes',
        description: 'Book bike tours and rent bikes, starting in Buenos Aires.',
        kind: 'Personal project',
        about:
          'A marketplace to book bike tours and rent bicycles, starting in Buenos Aires. It comes from my experience working at a bike tours company.',
        features: [
          'Bike tour booking',
          'Bicycle rental',
          'Payments with Stripe',
          'Next.js with TypeScript and Tailwind CSS',
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
    p1: "I'm a programmer and I study at university. I'm building my portfolio to land my first job as a **junior full stack developer**, and I like trying different technologies: from interfaces with **React** to APIs with **NestJS** or **Spring Boot**.",
    p2: "I worked at a **bike tour company in Buenos Aires**, so I know tourism from the inside. It's an industry I'm interested in and where I'd like to **start my own business**.",
    facts: [
      {
        title: 'Full stack',
        text: 'Frontend, backend and database in a single project.',
        more: 'I like to understand a product end to end: from how the data is modeled to how each screen looks and feels.',
        points: [
          'Frontend with React, Next.js and TypeScript',
          'APIs with NestJS and Spring Boot',
          'Databases with PostgreSQL and Supabase',
          'Testing and deployment with Jest, GitHub Actions and Vercel',
        ],
      },
      {
        title: 'Teamwork',
        text: 'University projects and collaborations with other people.',
        more: "I study at university, and there I learned to work with others: splitting tasks, reviewing other people's code and getting to a delivery together.",
        points: [
          'Group university projects',
          'Collaborations with other people',
          'Git and GitHub to work in parallel',
          'Code review and automated tests',
        ],
      },
      {
        title: 'Tourism',
        text: 'Experience at a bike tour company in Buenos Aires.',
        more: "I worked at a bike tour company in Buenos Aires, so I know tourism from the inside. It's an industry I'm interested in and where I'd like to start my own business.",
        points: [
          'I know the industry from the inside',
          "I'd like to start a business in tourism",
          'It inspired my bike tours marketplace',
        ],
      },
    ],
  },
  tech: {
    title: 'Technologies',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & data',
      ai: 'AI & tools',
    },
    names: { 'Git y GitHub': 'Git & GitHub' },
  },
  footer: {
    title: 'Shall we talk?',
    text: "I'm open to opportunities as a junior full stack developer and to challenging projects. Write to me and let's talk.",
    made: 'Made with love and lots of coffee.',
  },
};
