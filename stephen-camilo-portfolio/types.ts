
export enum Section {
  Home = 'home',
  Projects = 'projects',
  Experience = 'experience',
  Expertise = 'expertise',
  Contact = 'contact'
}

export interface SkillItem {
  name: string;
  icon: string;
  level: number; // 0-100
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
