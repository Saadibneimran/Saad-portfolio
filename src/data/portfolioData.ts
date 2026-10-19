import type { Skill, Project, EducationItem, NavItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Mohammed Saad Ibne Imran Chowdhury',
  preferredName: 'Mohammed Saad',
  initials: 'MS',
  role: 'Fresher Web Developer | CSE Student',
  badge: 'Fresher Web Developer',
  university: 'International Islamic University Chittagong (IIUC)',
  learningPlatform: 'Programming Hero',
  location: 'Chittagong, Bangladesh',
  bio: 'Computer Science & Engineering student at IIUC and passionate web developer learning through Programming Hero. Skilled in JavaScript, React, and Tailwind CSS with a focus on building high-performance, responsive web applications and growing toward full-stack engineering and cybersecurity.',
  currentFocus: [
    'Advanced React & Component Lifecycle',
    'Asynchronous API Fetching & State Handling',
    'Full-Stack Architecture Foundations',
    'Web Application Security & Cybersecurity'
  ],
  careerGoals: [
    'Mastering Full-Stack Web Development',
    'Deepening expertise in Cybersecurity & Secure Coding',
    'Building modern, scalable web solutions for industry challenges'
  ],
  socials: {
    github: 'https://github.com/Saadibneimran',
    linkedin: 'https://www.linkedin.com/in/mohammed-saad-872635323',
    email: 'saadibneimran@gmail.com',
    twitter: 'https://x.com/Saadibneimran',
  },
  resumeUrl: '#contact',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    status: 'proficient',
    description: 'Modern ES6+ syntax, async/await, DOM manipulation, functional programming'
  },
  {
    name: 'React',
    category: 'frontend',
    status: 'proficient',
    description: 'Component architecture, Hooks (useState, useEffect), Props, conditional rendering'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    status: 'proficient',
    description: 'Semantic elements, modern markup, web accessibility best practices'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    status: 'proficient',
    description: 'Responsive layouts, Flexbox, Grid, custom properties, animations'
  },

  // Styling
  {
    name: 'Tailwind CSS',
    category: 'styling',
    status: 'proficient',
    description: 'Utility-first rapid UI development, responsive breakpoints, custom theme configs'
  },
  {
    name: 'Bootstrap',
    category: 'styling',
    status: 'proficient',
    description: 'Responsive grid, pre-styled UI components, utility classes'
  },

  // Backend & Database
  {
    name: 'PHP',
    category: 'backend',
    status: 'learning',
    description: 'Server-side request handling, backend scripts, form processing'
  },
  {
    name: 'MySQL',
    category: 'backend',
    status: 'learning',
    description: 'Relational database schemas, SQL queries, basic CRUD operations'
  },

  // Tools & Workflow
  {
    name: 'Git',
    category: 'tools',
    status: 'proficient',
    description: 'Version control, branch management, committing, and conflict resolution'
  },
  {
    name: 'GitHub',
    category: 'tools',
    status: 'proficient',
    description: 'Repository hosting, project collaboration, remote version tracking'
  },
  {
    name: 'VS Code',
    category: 'tools',
    status: 'proficient',
    description: 'Modern IDE setup, debugging, workspace customization, extension workflows'
  },
  {
    name: 'npm',
    category: 'tools',
    status: 'proficient',
    description: 'Package management, dependency resolution, script automation'
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'student-activity-dashboard',
    title: 'Student Activity Dashboard',
    description:
      'A responsive web application designed to manage student activities: search students, dynamically update enrollment and activity statuses, and organize student records with a clean, dark-themed UI.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'DOM Manipulation', 'Responsive Design'],
    features: [
      'Interactive student activity tracking and status updates',
      'Dynamic search and filtering across student records',
      'Fully responsive UI with dark mode support'
    ],
    githubUrl: 'https://github.com/Saadibneimran/Student-Activity-Dashboard',
    liveDemoUrl: 'https://student-activity-dashboard-two.vercel.app',
    imagePlaceholder: {
      badge: 'Student Portal & Analytics',
      gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(99, 102, 241, 0.25))',
      icon: 'dashboard'
    }
  },
  {
    id: 'buy-players-in-bpl',
    title: 'Buy Players in BPL',
    description:
      'A dynamic team-builder application simulating the Bangladesh Premier League (BPL) player auction. Users can browse player profiles, manage budget constraints, and assemble their ultimate XI squad with real-time budget calculations.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    features: [
      'Real-time remaining budget computation as players are purchased',
      'Team squad limit constraints and duplicate selection prevention',
      'Player filtering by batting, bowling, and all-rounder roles'
    ],
    githubUrl: 'https://github.com/Saadibneimran/Buy-Players-in-BPL',
    liveDemoUrl: 'https://saadibneimran.github.io/Buy-Players-in-BPL/',
    imagePlaceholder: {
      badge: 'BPL Auction & Squad Builder',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.25))',
      icon: 'trophy'
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'iiuc-cse',
    degree: 'B.Sc. in Computer Science & Engineering (CSE)',
    institution: 'International Islamic University Chittagong (IIUC)',
    location: 'Kumira, Chittagong, Bangladesh',
    period: 'Enrolled / Undergraduate',
    status: 'In Progress',
    description:
      'Pursuing an undergraduate degree focused on computing fundamentals, data structures, algorithms, database management, computer networks, and software engineering.',
    highlights: [
      'Core Coursework: Structured Programming, Data Structures, Algorithms, Database Systems',
      'Strong academic foundation in analytical problem-solving and software engineering',
      'Targeting specializations in Full-Stack Architecture and Cybersecurity'
    ]
  },
  {
    id: 'programming-hero',
    degree: 'Complete Web Development Course',
    institution: 'Programming Hero',
    location: 'Online / Project-based Learning',
    period: 'Ongoing',
    status: 'Active Track',
    description:
      'Intensive hands-on web development training focused on modern JavaScript (ES6+), React ecosystem, Tailwind CSS, component-driven UI architecture, API integration, and real-world project development.',
    highlights: [
      'Built interactive single-page applications with React and Tailwind CSS',
      'Mastered core frontend concepts: State, Props, Hooks, DOM manipulation, and asynchronous APIs',
      'Developed real-world assignments including BPL Player Draft and Student Dashboard'
    ]
  },
  {
    id: 'higher-secondary-education',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'College / Higher Secondary Institution',
    location: 'Chittagong, Bangladesh',
    period: 'Completed',
    status: 'Completed',
    description:
      'Completed higher secondary education in the Science division with strong foundations in Mathematics, Physics, and Information & Communication Technology (ICT).',
    highlights: [
      'Group: Science',
      'Solid analytical reasoning and mathematics background'
    ]
  }
];
