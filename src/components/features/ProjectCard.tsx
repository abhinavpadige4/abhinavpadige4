import { Github, ChevronDown } from 'lucide-react';
import type { Project } from '@/types/portfolio';
interface ProjectCardProps { project: Project; index: number }
export default function ProjectCard({ project }: ProjectCardProps) {
  return <article className="project-item">
    <div className="project-heading"><h3 className="project-title">{project.name}</h3><a href={project.url} target="_blank" rel="noreferrer" className="project-source" aria-label={`${project.name} ${project.url.includes('?') ? 'repository search' : 'source code'}`} title={project.url.includes('?') ? 'Find repository on GitHub' : 'GitHub'}><Github size={17} strokeWidth={1.8} /></a></div>
    <p className="project-description">{project.description}</p>
    <div className="project-technologies">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
    <details className="project-details"><summary>Details{project.status && <span className="project-status">{project.status}</span>}<ChevronDown size={14} strokeWidth={1.8} /></summary><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details>
  </article>;
}
