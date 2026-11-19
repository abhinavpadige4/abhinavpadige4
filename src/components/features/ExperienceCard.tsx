import { ArrowUpRight } from 'lucide-react';
import type { ExperienceEntry } from '@/types/portfolio';
interface ExperienceCardProps { entry: ExperienceEntry; index: number }
export default function ExperienceCard({ entry, index }: ExperienceCardProps) {
  return <article className="experience-item">
    <div className="experience-badge">{entry.logo ? <img src={entry.logo} alt={`${entry.company} logo`} width={32} height={32} loading="lazy" /> : <span>{entry.initials}</span>}</div>
    <div className="experience-body">
      <div className="experience-header"><div><h3 className="experience-company">{entry.company}</h3><p className="experience-role">{entry.role}</p></div><p className="experience-duration">{entry.dates}</p></div>
      <p className="experience-meta">{entry.location}{index === 0 ? ' · Active' : ''}</p>
      <p className="experience-tech">{entry.technologies.join(' · ')}</p>
      <ul className="experience-points">{entry.points.map(point => <li key={point}>{point}</li>)}</ul>
      <a className="experience-link" href={entry.url} target="_blank" rel="noreferrer"><ArrowUpRight size={13} strokeWidth={1.8} />View<span className="sr-only"> {entry.company} website</span></a>
    </div>
  </article>;
}
