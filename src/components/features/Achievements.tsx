import SectionHeading from '@/components/features/SectionHeading';
import { ACHIEVEMENTS } from '@/constants/achievements';
export default function Achievements() {
  return <section id="achievements" className="section-block"><SectionHeading title="Achievements" /><div className="achievement-list">{ACHIEVEMENTS.map(item => <article key={item.title} className="achievement-item"><span className="achievement-rank">{item.rank}</span><div className="achievement-body"><div className="achievement-heading"><h3>{item.title}</h3><span>{item.year}</span></div><p>{item.description}</p></div></article>)}</div></section>;
}
