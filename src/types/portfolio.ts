export type SkillCategory = 'all' | 'frontend' | 'styling' | 'backend' | 'tools';

export type SkillLevel = 'proficient' | 'learning';

export interface Skill {
  name: string;
  category: 'frontend' | 'styling' | 'backend' | 'tools';
  status: SkillLevel;
  icon?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl: string;
  imagePlaceholder: {
    badge: string;
    gradient: string;
    icon: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
