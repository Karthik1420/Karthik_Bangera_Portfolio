// src/data/journey.js
// Add new education, achievements, certifications, or experience entries here.
// Timeline renders from this data — no component changes needed.

export const journeyEntries = [
  {
    id: 1,
    type: 'education',
    typeLabel: 'Education',
    title: 'Bachelor of Computer Applications',
    organization: 'SDM College of Business Management',
    location: 'Mangalore, Karnataka',
    period: '2023 – 2026',
    current: false,
    highlights: [
      'CGPA: 9.12 / 10',
      '6th Sem SGPA: 9.69',
      'Consistent academic excellence throughout all semesters',
    ],
    description: 'Graduated with distinction, studying core computer science fundamentals alongside modern web development, database design, and software engineering principles.',
  },
  {
    id: 2,
    type: 'achievement',
    typeLabel: 'Achievement',
    title: 'CEO — SYGMA National-Level Technical Fest',
    organization: 'SDM College of Business Management',
    location: 'Mangalore, Karnataka',
    period: '2024',
    current: false,
    highlights: [
      'Led and coordinated national-level technical events',
      'Managed multiple student teams and logistics',
      'Oversaw event operations from planning to execution',
    ],
    description: 'Coordinated technical events and led multiple student teams for SYGMA, a national-level technical fest attracting participants across colleges.',
  },
  {
    id: 3,
    type: 'certification',
    typeLabel: 'Certification',
    title: 'Job Ready AI-Powered Cohort',
    organization: 'Professional Development',
    location: 'Online',
    period: '2024',
    current: false,
    highlights: [
      'AI-assisted development workflows',
      'Modern toolchain: Cursor, Copilot, Claude',
      'Practical AI integration in production projects',
    ],
    description: 'Completed an intensive cohort focused on leveraging AI tools to accelerate development velocity and build production-grade applications.',
  },
];
