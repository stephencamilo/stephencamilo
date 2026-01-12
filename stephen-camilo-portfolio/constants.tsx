
import { ExperienceItem, SkillCategory } from './types';

export const HERO_TITLES = [
  "Senior Software Engineer",
  "Drupal Specialist",
  "WordPress Architect",
  "Full Stack Engineer",
  "Data Science Professional"
];

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'healthcare',
    category: 'Drupal',
    title: 'Healthcare Enterprise Platform',
    description: 'Mission-critical system for international hospitals with HIPAA-compliant API integrations.',
    fullDescription: 'Healthcare management system built with Drupal 9/10 featuring REST API integrations, custom modules for patient management, and interoperability with hospital systems. Scalable architecture with performance optimization and security hardening.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['Drupal 10', 'PHP 8.2', 'REST API', 'Healthcare']
  },
  {
    id: 'marketplace',
    category: 'Marketplace',
    title: 'B2B2C Restaurant Marketplace',
    description: 'Scalable marketplace solution connecting restaurants, suppliers, and end-consumers.',
    fullDescription: 'A complex multi-vendor platform supporting tiered commissions, real-time inventory, and localized payment gateways. Built with performance and SEO at its core.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tags: ['Laravel', 'Vue.js', 'Marketplace', 'SEO']
  },
  {
    id: 'ecommerce',
    category: 'E-commerce',
    title: 'WooCommerce Payment Integrations',
    description: 'Custom payment gateway development for Pagar.Me and Pix in the Brazilian market.',
    fullDescription: 'Custom integration of modern payment systems into high-traffic WooCommerce sites. Includes asynchronous transaction processing and automated reconciliation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tags: ['WordPress', 'WooCommerce', 'Payment APIs', 'Security']
  }
];

export const RESUME_DATA: Record<string, ExperienceItem[]> = {
  education: [
    {
      title: "Systems Analysis and Development",
      organization: "Ongoing Higher Education",
      period: "Current",
      description: "Expanding technical expertise with formal education in systems analysis and development to complement 10+ years of practical experience."
    },
    {
      title: "Postgraduate Degree in Data Science",
      organization: "Anhanguera Educacional",
      period: "Completed",
      description: "Specialized in data science, enabling data-driven decision making and analytics capabilities."
    },
    {
      title: "Associate Degree in Marketing",
      organization: "Anhanguera Educacional",
      period: "Completed",
      description: "Business background providing a unique perspective on product development and market-oriented solutions."
    }
  ],
  experience: [
    {
      title: "Senior Drupal Developer",
      organization: "Jobsty (Remote International)",
      period: "2022-2025",
      description: "Maintenance of enterprise Drupal applications (v8-11) in healthcare. REST API integrations for hospital systems."
    },
    {
      title: "Software Engineer",
      organization: "CI&T (Remote)",
      period: "2020-2022",
      description: "Member of Drupal Enterprise core team. Development of reusable components and code standardization."
    },
    {
      title: "Full Stack Developer",
      organization: "Freelance & Own Products",
      period: "2011-Present",
      description: "Consulting and full stack development. Product ownership for taxando.com.br and motoextra.com.br."
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frameworks & CMS",
    skills: [
      { name: "Drupal 8-11", icon: "fab fa-drupal", level: 95, featured: true },
      { name: "WordPress", icon: "fab fa-wordpress", level: 92, featured: true },
      { name: "Laravel", icon: "fab fa-laravel", level: 88 },
      { name: "React", icon: "fab fa-react", level: 80 },
      { name: "CodeIgniter", icon: "fas fa-code", level: 85 }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "PHP", icon: "fab fa-php", level: 98, featured: true },
      { name: "JavaScript", icon: "fab fa-js", level: 90 },
      { name: "SQL", icon: "fas fa-database", level: 92 },
      { name: "HTML5/CSS3", icon: "fab fa-html5", level: 95 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "fab fa-docker", level: 85 },
      { name: "Git", icon: "fab fa-git-alt", level: 95, featured: true },
      { name: "DDEV", icon: "fas fa-server", level: 90 },
      { name: "CI/CD", icon: "fas fa-sync", level: 82 }
    ]
  }
];
