const translations = {
    es: {
        // <html lang>
        lang: 'es',

        // <title>
        pageTitle: 'Lucía Viazzo — Desarrolladora Full Stack',

        // NAV
        nav: {
            about: 'Sobre mi',
            projects: 'Proyectos',
            stack: 'Stack',
            journey: 'Recorrido',
            contact: 'Contacto',
            cv: 'CV',
        },

        // HERO
        hero: {
            tag: 'Disponible para trabajar',
            title: 'Full Stack Developer · Backend · Datos & IA',
            desc: 'Disfruto resolver problemas y entender como funcionan las cosas. Me interesa construir <strong>software solido</strong>, explorar <strong>nuevas tecnologias</strong> y trabajar los detalles hasta encontrar la <strong>mejor solucion</strong>.',
            ctaProjects: 'Ver proyectos',
            ctaContact: 'Contactarme',
        },

        // ABOUT
        about: {
            sectionTag: 'Sobre mi',
            title: 'Estudiante de Lic. en Informatica<br><em>y Tecnicatura en Programacion</em>',
            items: [
                'Estudiante avanzada de la <strong>Licenciatura en Informatica en la UNQ</strong>.',
                'Este anio finalizo la <strong>Tecnicatura en Programacion Informatica</strong>.',
                'Mi foco esta en el desarrollo <strong>backend</strong> - APIs, bases de datos, arquitectura y logica de negocio.',
                'Me estoy formando en <strong>Datos e IA</strong> a traves de la Tecnicatura en Ciencia de Datos e IA.',
                'Me gusta aprender cosas nuevas, probar herramientas distintas y dedicar tiempo a entender realmente lo que estoy haciendo.',
                'Busco mi <strong>primera oportunidad en IT</strong> para seguir creciendo, ganar experiencia y construir proyectos que me desafien.',
            ],
            values: [
                { title: 'Atencion al detalle', desc: 'Trabajo de forma ordenada y detallista, buscando que las soluciones sean claras y consistentes.' },
                { title: 'Adaptabilidad', desc: 'Disfruto enfrentar desafios nuevos, aprendiendo rapido y adaptandome a distintos contextos.' },
                { title: 'Curiosidad y persistencia', desc: 'Cuando algo no funciona, investigo, pruebo alternativas y profundizo hasta entenderlo de verdad.' },
                { title: 'Trabajo colaborativo', desc: 'Disfruto trabajar con personas que compartan ganas de aprender, intercambiar ideas y construir buenas soluciones en conjunto.' },
            ],
        },

        // PROJECTS
        projects: {
            sectionTag: 'Proyectos',
            title: 'Lo que<br><em>construi</em>',
            ariaNext: 'Siguiente',
            ariaPrev: 'Anterior',
            modal: {
                sectionDesc: 'Descripcion',
                sectionFeatures: 'Funcionalidades',
                sectionStack: 'Stack',
                btnDemo: 'Ver demo',
                btnRepo: 'Ver codigo',
                slideLabel: 'Captura',
            },
            items: {
                linkedunq: {
                    sub: 'Full Stack · Scrum · NestJS · React',
                    desc: 'Plataforma web fullstack para conectar estudiantes con empresas en busqueda de su primer empleo en IT.',
                    descFull: 'Plataforma web fullstack para conectar estudiantes con empresas en busqueda de su primer empleo en IT. Desarrollada en equipo con metodologias agiles.',
                    features: [
                        'Registro y autenticacion de estudiantes y empresas',
                        'Publicacion y busqueda de ofertas laborales',
                        'APIs REST modulares con NestJS y TypeScript',
                        'Interfaz responsive con React, Vite y Tailwind CSS',
                        'Tests automatizados con Jest y trabajo en equipo con Scrum',
                    ],
                },
                epersaits: {
                    sub: 'Backend · Java · Spring Boot · Persistencia',
                    desc: 'API REST en Java con distintas estrategias de persistencia - relacional, grafos, documentos y cache en un mismo sistema.',
                    descFull: 'Sistema backend de persistencia poliglota, construido de forma incremental para integrar multiples estrategias de persistencia dentro de una misma arquitectura.',
                    features: [
                        'API REST con Java y Spring Boot',
                        'Persistencia relacional con PostgreSQL y JPA/Hibernate',
                        'Base de datos de grafos con Neo4j',
                        'Base de datos documental con MongoDB',
                        'Cache con Redis y tests unitarios con JUnit 5',
                    ],
                },
                sem: {
                    sub: 'POO · Patrones de Diseno · TDD',
                    desc: 'Backend para la gestion de estacionamientos en una localidad, con patrones Observer, Strategy y State.',
                    descFull: 'Backend para la gestion de estacionamientos en una localidad, desarrollado para optimizar el control del estacionamiento en la via publica.',
                    features: [
                        'Inicio y finalizacion de estacionamientos manual o automatico',
                        'Gestion de saldo y deteccion de movimiento mediante sensores',
                        'Generacion de infracciones automatizada',
                        'Patrones Observer, Strategy y State',
                        'Desarrollo orientado a pruebas con JUnit y Mockito',
                    ],
                },
                procesamiento: {
                    sub: 'Backend · Concurrencia · Python',
                    desc: 'Sistema para procesamiento de imagenes con filtros convolucionales que compara modelos secuenciales y concurrentes.',
                    descFull: 'Sistema para procesamiento de imagenes con filtros convolucionales que compara el rendimiento entre modelos secuenciales y concurrentes.',
                    features: [
                        'Aplicacion de filtros convolucionales sobre imagenes',
                        'Implementacion de modelo secuencial y concurrente',
                        'Configuracion flexible de workers, buffer y kernel',
                        'Generacion automatica de graficos comparativos con Python',
                        'Analisis de rendimiento entre ambos enfoques',
                    ],
                },
            },
        },

        // STACK
        stack: {
            sectionTag: 'Stack tecnologico',
            title: 'Las herramientas<br><em>con las que construyo</em>',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                databases: 'Bases de datos',
                tools: 'Herramientas',
            },
        },

        // JOURNEY / TIMELINE
        journey: {
            sectionTag: 'Mi recorrido',
            title: 'Como llegue<br><em>hasta aca</em>',
            items: [
                { date: '2026 — Actualidad', title: 'Tecnicatura en Ciencia de Datos e IA', sub: 'IFTS 24 · Cisco', desc: 'Formacion en analisis de datos, machine learning e inteligencia artificial.' },
                { date: '2025', title: 'Desarrollo Web Full Stack', sub: 'Fundacion Pescar', desc: '300 horas de formacion en desarrollo web y habilidades interpersonales.' },
                { date: '2025', title: 'LinkedUNQ · Epersgeist · ConcuConvolution · SEM', sub: 'Proyectos academicos - UNQ', desc: 'Desarrollo de proyectos que cubren fullstack, persistencia distribuida, concurrencia y patrones de diseno.' },
                { date: '2022 — Actualidad', title: 'Licenciatura en Informatica', sub: 'Universidad Nacional de Quilmes · Promedio 9.0', desc: 'Carrera en curso con avance del 50.8%. Formacion solida en algoritmos, estructuras de datos, sistemas y paradigmas.' },
                { date: '2022 — 2025', title: 'Tecnicatura en Programacion Informatica', sub: 'Universidad Nacional de Quilmes · Promedio 9.0', desc: 'Base tecnica en backend, bases de datos y metodologias agiles.' },
            ],
        },

        // CONTACT
        contact: {
            sectionTag: 'Contacto',
            tagline: 'Hablamos?<br><em>Estoy disponible</em>',
            sub: 'Estoy buscando mi primera oportunidad en IT. Si hay un lugar donde pueda aprender, contribuir y crecer, me interesa conocerlo.',
            links: {
                email: 'Email',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                cv: 'CV',
            },
        },

        // FOOTER
        footer: {
            copy: '© 2025 Lucia Viazzo',
            tagline: 'Diseñado con intencion · Construido con codigo',
        },
    },

    // ─────────────────────────────────────────────────────────────
    en: {
        lang: 'en',

        pageTitle: 'Lucía Viazzo — Full Stack Developer',

        nav: {
            about: 'About',
            projects: 'Projects',
            stack: 'Stack',
            journey: 'Journey',
            contact: 'Contact',
            cv: 'CV',
        },

        hero: {
            tag: 'Open to work',
            title: 'Full Stack Developer · Backend · Data & AI',
            desc: 'I enjoy solving problems and understanding how things work. I\'m interested in building <strong>solid software</strong>, exploring <strong>new technologies</strong>, and working through details until I find the <strong>best solution</strong>.',
            ctaProjects: 'View projects',
            ctaContact: 'Contact me',
        },

        about: {
            sectionTag: 'About me',
            title: 'CS Undergraduate<br><em>& Programming Technician student</em>',
            items: [
                'Advanced student of the <strong>Bachelor\'s in Computer Science at UNQ</strong>.',
                'This year I am completing the <strong>Programming Technician degree</strong>.',
                'My focus is on <strong>backend</strong> development — APIs, databases, architecture, and business logic.',
                'I am training in <strong>Data & AI</strong> through the Data Science & AI Technician program.',
                'I enjoy learning new things, trying different tools, and taking the time to truly understand what I am doing.',
                'I am looking for my <strong>first IT opportunity</strong> to keep growing, gain experience, and build challenging projects.',
            ],
            values: [
                { title: 'Attention to detail', desc: 'I work in an organised and meticulous way, ensuring solutions are clear and consistent.' },
                { title: 'Adaptability', desc: 'I enjoy facing new challenges, learning quickly, and adapting to different contexts.' },
                { title: 'Curiosity & persistence', desc: 'When something does not work, I research, try alternatives, and dig deep until I truly understand it.' },
                { title: 'Collaborative work', desc: 'I enjoy working with people who share a desire to learn, exchange ideas, and build good solutions together.' },
            ],
        },

        projects: {
            sectionTag: 'Projects',
            title: 'What I<br><em>have built</em>',
            ariaNext: 'Next',
            ariaPrev: 'Previous',
            modal: {
                sectionDesc: 'Description',
                sectionFeatures: 'Features',
                sectionStack: 'Stack',
                btnDemo: 'Live demo',
                btnRepo: 'View code',
                slideLabel: 'Screenshot',
            },
            items: {
                linkedunq: {
                    sub: 'Full Stack · Scrum · NestJS · React',
                    desc: 'Full stack web platform connecting students with companies looking for their first IT hire.',
                    descFull: 'Full stack web platform connecting students with companies looking for their first IT hire. Built as a team using agile methodologies.',
                    features: [
                        'Student and company registration & authentication',
                        'Job listing publication and search',
                        'Modular REST APIs with NestJS and TypeScript',
                        'Responsive UI with React, Vite, and Tailwind CSS',
                        'Automated tests with Jest and Scrum teamwork',
                    ],
                },
                epersaits: {
                    sub: 'Backend · Java · Spring Boot · Persistence',
                    desc: 'REST API in Java with multiple persistence strategies — relational, graph, document, and cache in a single system.',
                    descFull: 'Polyglot persistence backend system, built incrementally to integrate multiple persistence strategies within the same architecture.',
                    features: [
                        'REST API with Java and Spring Boot',
                        'Relational persistence with PostgreSQL and JPA/Hibernate',
                        'Graph database with Neo4j',
                        'Document database with MongoDB',
                        'Cache with Redis and unit tests with JUnit 5',
                    ],
                },
                sem: {
                    sub: 'OOP · Design Patterns · TDD',
                    desc: 'Backend for managing parking in a city, using Observer, Strategy and State patterns.',
                    descFull: 'Backend for managing metered parking in a city, developed to optimise on-street parking control.',
                    features: [
                        'Manual or automatic parking start and end',
                        'Balance management and movement detection via sensors',
                        'Automated fine generation',
                        'Observer, Strategy and State patterns',
                        'Test-driven development with JUnit and Mockito',
                    ],
                },
                procesamiento: {
                    sub: 'Backend · Concurrency · Python',
                    desc: 'Image processing system with convolutional filters that compares sequential and concurrent models.',
                    descFull: 'Image processing system with convolutional filters that benchmarks sequential vs. concurrent processing models.',
                    features: [
                        'Convolutional filter application on images',
                        'Sequential and concurrent model implementation',
                        'Flexible worker, buffer, and kernel configuration',
                        'Automatic generation of comparison charts with Python',
                        'Performance analysis between both approaches',
                    ],
                },
            },
        },

        stack: {
            sectionTag: 'Tech stack',
            title: 'The tools<br><em>I build with</em>',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                databases: 'Databases',
                tools: 'Tools',
            },
        },

        journey: {
            sectionTag: 'My journey',
            title: 'How I got<br><em>here</em>',
            items: [
                { date: '2026 — Present', title: 'Data Science & AI Technician', sub: 'IFTS 24 · Cisco', desc: 'Training in data analysis, machine learning, and artificial intelligence.' },
                { date: '2025', title: 'Full Stack Web Development', sub: 'Fundacion Pescar', desc: '300 hours of training in web development and interpersonal skills.' },
                { date: '2025', title: 'LinkedUNQ · Epersgeist · ConcuConvolution · SEM', sub: 'Academic projects — UNQ', desc: 'Projects covering full stack, distributed persistence, concurrency, and design patterns.' },
                { date: '2022 — Present', title: 'Bachelor\'s in Computer Science', sub: 'Universidad Nacional de Quilmes · GPA 9.0/10', desc: 'Ongoing degree, 50.8% complete. Solid background in algorithms, data structures, systems, and programming paradigms.' },
                { date: '2022 — 2025', title: 'Programming Technician degree', sub: 'Universidad Nacional de Quilmes · GPA 9.0/10', desc: 'Technical foundation in backend, databases, and agile methodologies.' },
            ],
        },

        contact: {
            sectionTag: 'Contact',
            tagline: 'Let\'s talk?<br><em>I\'m available</em>',
            sub: 'I\'m looking for my first IT opportunity. If there is a place where I can learn, contribute, and grow — I\'d love to hear about it.',
            links: {
                email: 'Email',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                cv: 'CV',
            },
        },

        footer: {
            copy: '© 2025 Lucia Viazzo',
            tagline: 'Designed with intention · Built with code',
        },
    },
};
