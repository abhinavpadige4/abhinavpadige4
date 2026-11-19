import SectionHeading from '@/components/features/SectionHeading';
import { SKILLS } from '@/constants/portfolio';
import { SKILL_ICONS } from '@/constants/skillIcons';
export default function Skills() {
  return <section id="skills" className="section-block"><SectionHeading title="Skills" /><div className="skills-list">
    {SKILLS.map(category => <div key={category.name} className="skill-row"><h3 className="skill-row-title">{category.name}</h3><div className="skill-tags">{category.items.map(skill => <span key={skill}>{SKILL_ICONS[skill] && <img src={`https://cdn.simpleicons.org/${SKILL_ICONS[skill]}/ffffff`} className="skill-icon" alt="" aria-hidden="true" width={14} height={14} loading="lazy" onError={event => { event.currentTarget.hidden = true; }} />}{skill}</span>)}</div></div>)}
  </div></section>;
}
