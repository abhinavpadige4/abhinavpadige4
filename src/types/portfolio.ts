export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: 'AI systems' | 'Full-stack';
  url: string;
  status?: string;
  highlights: string[];
}
export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  logo?: string;
  initials?: string;
  url: string;
  points: string[];
  technologies: string[];
}
