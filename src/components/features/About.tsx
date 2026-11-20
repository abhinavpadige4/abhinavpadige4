import SectionHeading from '@/components/features/SectionHeading';
import { LINKS } from '@/constants/portfolio';
export default function About() {
  return <section id="about" className="section-block">
    <SectionHeading title="About" />
    <p className="section-lead">An engineer building <strong>AI systems</strong> and <strong>full-stack applications</strong>.</p>
    <div className="about-stats">
      <a href="#experience" className="stat-card"><span className="stat-number">2</span><span className="stat-label">Industry internships</span></a>
      <a href={LINKS.company} className="stat-card" target="_blank" rel="noreferrer"><span className="stat-number">3+</span><span className="stat-label">Production apps delivered</span></a>
    </div>
  </section>;
}
