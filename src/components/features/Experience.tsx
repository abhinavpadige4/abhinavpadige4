import SectionHeading from '@/components/features/SectionHeading';
import ExperienceCard from '@/components/features/ExperienceCard';
import { EXPERIENCE } from '@/constants/portfolio';
export default function Experience() {
  return <section id="experience" className="section-block"><SectionHeading title="Experience" /><div className="experience-list">{EXPERIENCE.map((entry, index) => <ExperienceCard key={entry.company} entry={entry} index={index} />)}</div></section>;
}
