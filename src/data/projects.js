// src/data/projects.js
// All project data is here — add, delete, or reorder projects by editing this file only.
// ProjectCard and CaseStudy components automatically render from this data.

import talentMatchCover from '../assets/projects/talentmatch/cover.png';
import exoticaCover from '../assets/projects/exotica/cover.png';
import rhythmRagasCover from '../assets/projects/rhythm-ragas/cover.png';
export const projects = [
  {
    id: 1,
    slug: 'talentmatch-ai',
    order: 1,
    featured: true,
    title: 'TalentMatch AI',
    subtitle: 'AI-powered recruitment platform',
    description:
      'A full-stack recruitment platform designed to match candidates with job opportunities and provide AI-powered candidate evaluation. Built with a robust role-based system serving recruiters, admins, and job seekers.',
    category: 'Full-Stack · AI',
    role: 'Full-Stack Developer & Designer',
    year: '2024',
    status: 'live',
    statusLabel: 'Live · Deployed',
    technologies: ['React.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Neon', 'JWT', 'Gemini API'],
    liveUrl: 'https://talentmatchai-xi.vercel.app/',
    githubUrl: null,
    coverImage: talentMatchCover,
    screenshots: [],
    problem:
      'Recruitment processes are slow, subjective, and often miss qualified candidates. Recruiters spend hours manually screening resumes against job descriptions.',
    context:
      'Built as a flagship capstone project to demonstrate end-to-end product thinking, combining frontend design, backend engineering, and AI integration.',
    solution:
      'An intelligent ATS system that uses Gemini AI to score and rank candidates against job descriptions, making recruitment faster and more data-driven.',
    features: [
      'AI-powered ATS scoring with Gemini API',
      'Resume parsing and analysis',
      'Job description matching algorithm',
      'JWT authentication & role-based access',
      'Recruiter dashboard with candidate pipeline',
      'Admin dashboard for platform management',
      'Candidate / job seeker application flows',
      'Real-time scoring and ranking',
    ],
    process: [
      { step: '01', title: 'Research', detail: 'Studied ATS systems, recruiter workflows, and candidate pain points to define product requirements.' },
      { step: '02', title: 'Architecture', detail: 'Designed REST API schema, role-based auth system, and Gemini integration pipeline.' },
      { step: '03', title: 'Build', detail: 'Built React frontend with Tailwind, FastAPI backend with PostgreSQL/Neon, and integrated JWT auth.' },
      { step: '04', title: 'Refine', detail: 'Iterated on the AI scoring prompt engineering, UI polish, and responsive layouts.' },
    ],
    challenges: [
      'Structuring Gemini API prompts to produce reliable, parseable scoring outputs.',
      'Managing complex role-based state across multiple user flows without conflicts.',
      'Optimizing database queries for large candidate sets with pagination.',
    ],
    learnings: [
      'Prompt engineering requires iteration — small wording changes significantly affect AI output quality.',
      'Role-based architecture is best planned upfront; retrofitting it causes significant refactoring.',
      'User flows should be validated early to prevent backend API redesigns mid-project.',
    ],
    futureImprovements: [
      'Real-time interview scheduling and calendar integration',
      'AI-generated interview question recommendations per candidate',
      'Analytics dashboard with hiring funnel metrics',
      'Email notification system for application status updates',
    ],
  },
  {
    id: 2,
    slug: 'classroom-management',
    order: 2,
    featured: false,
    title: 'Classroom Management System',
    subtitle: 'Role-based academic management platform',
    description:
      'A full-stack classroom management system with role-based access control for administrators, teachers, and students. Handles course management, attendance, assignments, and grading workflows.',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    year: '2024',
    status: 'completed',
    statusLabel: 'Completed · Not publicly deployed',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Neon', 'JWT'],
    liveUrl: null,
    githubUrl: null,
    coverImage: null,
    screenshots: [],
    problem:
      'Academic institutions manage complex multi-role workflows — admins configure, teachers teach, students learn — often spread across disconnected tools.',
    context:
      'Built to demonstrate full-stack engineering competency with a focus on role-based systems, API design, and structured frontend/backend architecture.',
    solution:
      'A unified platform with three distinct role contexts — Admin, Teacher, Student — each with tailored dashboards, permissions, and workflows.',
    features: [
      'Three-role system: Admin, Teacher, Student',
      'Course creation and management',
      'Attendance tracking per class session',
      'Assignment submission and grading',
      'Student progress views and grade reports',
      'JWT authentication with session management',
      'RESTful API with structured endpoints',
      'Responsive UI for all device sizes',
    ],
    process: [
      { step: '01', title: 'Research', detail: 'Mapped out multi-role user flows and data relationships between students, teachers, and courses.' },
      { step: '02', title: 'Architecture', detail: 'Designed normalized PostgreSQL schema and role-based route guards in FastAPI and React.' },
      { step: '03', title: 'Build', detail: 'Implemented API endpoints, authentication middleware, and three distinct UI contexts.' },
      { step: '04', title: 'Refine', detail: 'Added form validation, error handling, and responsive layout improvements.' },
    ],
    challenges: [
      'Designing a schema that cleanly separates concerns while enabling efficient cross-role queries.',
      'Implementing route-level authorization without leaking role-specific data across contexts.',
    ],
    learnings: [
      'Schema design decisions have long-term consequences — investing time upfront in normalization pays off.',
      'React Context is sufficient for role state management at this scale without needing Redux.',
    ],
    futureImprovements: [
      'Real-time notifications for assignment deadlines',
      'Parent/guardian portal with read-only access',
      'Analytics on student performance trends',
    ],
  },
  {
    id: 3,
    slug: 'exotica-skincare',
    order: 3,
    featured: false,
    title: 'Exotica Skincare',
    subtitle: 'Responsive e-commerce web design',
    description:
      'A visually refined, fully responsive skincare e-commerce website built with React and Tailwind CSS. Focused on clean component architecture, mobile-first design, and UI craftsmanship.',
    category: 'Frontend · Responsive Web Design',
    role: 'Frontend Developer & UI Designer',
    year: '2024',
    status: 'live',
    statusLabel: 'Live · GitHub Pages',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    liveUrl: 'https://karthik1420.github.io/EXOTICA/',
    githubUrl: 'https://github.com/Karthik1420',
    coverImage: exoticaCover,
    screenshots: [],
    problem:
      'Most skincare brand websites sacrifice visual quality for speed, resulting in generic, unmemorable experiences that fail to communicate brand identity.',
    context:
      'Built to demonstrate frontend design capability — visual thinking, responsive implementation, and component reusability.',
    solution:
      'A premium-feeling skincare storefront with a carefully chosen color palette, refined typography, responsive layouts, and smooth interactions.',
    features: [
      'Mobile-first responsive layout',
      'Product catalog with filtering',
      'Smooth scroll navigation',
      'Reusable component architecture',
      'Tailwind utility-first styling',
      'Optimized images with lazy loading',
      'Accessible color contrast and keyboard navigation',
      'Clean, readable code structure',
    ],
    process: [
      { step: '01', title: 'Research', detail: 'Studied premium skincare brand aesthetics and identified design patterns that communicate quality.' },
      { step: '02', title: 'Architecture', detail: 'Planned component hierarchy for reusability across product cards, navigation, and sections.' },
      { step: '03', title: 'Build', detail: 'Implemented responsive layouts with Tailwind, custom animations, and component composition.' },
      { step: '04', title: 'Refine', detail: 'Tuned typography, spacing, hover states, and mobile breakpoints for a polished result.' },
    ],
    challenges: [
      'Achieving a premium aesthetic using utility classes without over-customization.',
      'Balancing rich visual design with fast load times and accessibility.',
    ],
    learnings: [
      'Great frontend design is 80% typography and spacing, 20% color.',
      'Component planning before coding significantly reduces refactoring time.',
    ],
    futureImprovements: [
      'Shopping cart with local storage persistence',
      'Product detail pages with image galleries',
      'Checkout flow with form validation',
    ],
  },
  {
    id: 4,
    slug: 'blood-bank-management',
    order: 4,
    featured: false,
    title: 'Blood Bank Management System',
    subtitle: 'Backend API system for blood bank operations',
    description:
      'A RESTful API system for managing blood bank operations including donor registration, recipient management, inventory tracking, and blood request processing. Built with FastAPI, PostgreSQL, and Pydantic for data integrity.',
    category: 'Backend · API Engineering',
    role: 'Backend Developer',
    year: '2024',
    status: 'completed',
    statusLabel: 'Completed · Not publicly deployed',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Pydantic', 'JWT', 'Swagger UI'],
    liveUrl: null,
    githubUrl: null,
    coverImage: null,
    screenshots: [],
    problem:
      'Blood banks rely on manual records and disconnected spreadsheets, creating inventory management challenges and delays in matching donors with recipients.',
    context:
      'Built to deepen backend engineering fundamentals — API architecture, data validation, and database design for a real-world domain.',
    solution:
      'A structured RESTful API system with clean endpoint design, Pydantic validation, and PostgreSQL persistence to manage the full blood bank workflow.',
    features: [
      'Donor registration and profile management',
      'Recipient management system',
      'Blood inventory tracking by type and quantity',
      'Blood request creation and fulfillment',
      'CRUD operations for all entities',
      'Pydantic request/response validation',
      'FastAPI Swagger UI for API testing',
      'Normalized PostgreSQL schema',
    ],
    process: [
      { step: '01', title: 'Research', detail: 'Studied blood bank operations to model the domain accurately with correct data relationships.' },
      { step: '02', title: 'Architecture', detail: 'Designed the database schema, API endpoint structure, and validation models.' },
      { step: '03', title: 'Build', detail: 'Implemented all CRUD endpoints with Pydantic schemas, dependency injection, and error handling.' },
      { step: '04', title: 'Refine', detail: 'Added inventory auto-update on blood requests and improved API response consistency.' },
    ],
    challenges: [
      'Ensuring inventory consistency when multiple requests target the same blood type simultaneously.',
      'Designing a validation layer that provides clear, actionable error messages for all edge cases.',
    ],
    learnings: [
      'API design clarity matters — consistent endpoint naming and response shapes reduce integration friction.',
      'Pydantic models serve as living documentation when designed thoughtfully.',
    ],
    futureImprovements: [
      'Frontend dashboard for hospital staff',
      'Automated low-inventory alerts via email',
      'Blood type compatibility matching logic',
      'Audit log for all inventory changes',
    ],
  },
  {
    id: 5,
    slug: 'rhythm-ragas',
    order: 5,
    featured: false,
    title: 'Rhythm Ragas',
    subtitle: 'Music booking & event web application',
    description:
      'A creative web application for a classical and contemporary music booking platform. Users can browse artists, explore music styles, and book music performances. Built as a full-stack application with PHP, MySQL, HTML, CSS, and JavaScript.',
    category: 'Web Application · Music · Booking',
    role: 'Full-Stack Developer',
    year: '2023',
    status: 'completed',
    statusLabel: 'Completed · Not publicly deployed',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: null,
    githubUrl: null,
    coverImage: rhythmRagasCover,
    screenshots: [],
    problem:
      'Classical music artists often lack dedicated digital platforms to showcase their work and accept bookings, relying on word-of-mouth or generic event platforms.',
    context:
      'A passion project that blends creative web design with practical full-stack implementation, showing range beyond purely technical CRUD systems.',
    solution:
      'A purpose-built platform for a music booking experience, with artist profiles, music style browsing, and a booking inquiry system.',
    features: [
      'Artist profile pages with biography and repertoire',
      'Music style and genre browsing',
      'Event booking inquiry form',
      'Admin panel for managing bookings',
      'MySQL database for artist and booking data',
      'PHP server-side rendering',
      'Responsive layout for mobile and desktop',
      'Creative visual design with music theming',
    ],
    process: [
      { step: '01', title: 'Research', detail: 'Researched music booking platforms and identified gaps in serving classical and fusion music artists.' },
      { step: '02', title: 'Architecture', detail: 'Designed the database schema, PHP routing, and HTML/CSS component structure.' },
      { step: '03', title: 'Build', detail: 'Implemented the artist catalog, booking form, and admin panel with vanilla PHP and MySQL.' },
      { step: '04', title: 'Refine', detail: 'Improved the visual design, added responsiveness, and polished the booking confirmation flow.' },
    ],
    challenges: [
      'Managing server-side state across multiple PHP pages without a modern framework.',
      'Creating a premium design feel without a CSS utility framework.',
    ],
    learnings: [
      'Constraint-driven development builds deep fundamentals — building without a framework deepened my understanding of the web.',
      'Creative projects often produce the most interesting design solutions.',
    ],
    futureImprovements: [
      'React migration for a more interactive experience',
      'Payment integration for booking deposits',
      'Artist media player for audio samples',
      'Public deployment and hosting',
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getSortedProjects = () => [...projects].sort((a, b) => a.order - b.order);
