// src/data/skills.js
// Edit this file to update skills and categories

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'monitor',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'],
    accent: false,
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'server',
    skills: ['Python', 'FastAPI', 'REST APIs', 'JWT Authentication'],
    accent: false,
  },
  {
    id: 'design',
    label: 'Design',
    icon: 'figma',
    skills: ['Figma', 'Auto Layout', 'Components', 'Variables'],
    accent: false,
  },
  {
    id: 'ai-tools',
    label: 'AI-Assisted Dev',
    icon: 'sparkles',
    skills: ['Cursor', 'GitHub Copilot', 'Claude Code'],
    accent: true, // AI card gets the subtle Continuum glow
  },
  {
    id: 'ai-integration',
    label: 'AI Integration',
    icon: 'cpu',
    skills: ['Gemini API'],
    accent: true,
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL'],
    accent: false,
  },
  {
    id: 'vcs',
    label: 'Version Control',
    icon: 'git-branch',
    skills: ['Git', 'GitHub'],
    accent: false,
  },
];
