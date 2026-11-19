import { PROJECTS } from '@/constants/portfolio';
import SectionHeading from '@/components/features/SectionHeading';
import ProjectCard from '@/components/features/ProjectCard';
export default function Projects() {
  return <section id="projects" className="section-block"><SectionHeading title="Projects" /><div className="project-list">{PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></section>;
}
