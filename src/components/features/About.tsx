import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/features/SectionHeading';
export default function About() {
  return <section id="about" className="section-block">
    <SectionHeading title="About" />
    <p className="section-lead">An AI engineer and builder specializing in <strong>AI Systems</strong> and <strong>Full-Stack Development</strong>.</p>
    <a href="#education" className="education-card">
      <span className="education-icon" aria-hidden="true"><GraduationCap size={20} strokeWidth={1.8} /></span>
      <div><h3 className="education-institution">CVR College of Engineering, Hyderabad</h3><p className="education-degree">B.Tech in Computer Science · Data Science</p><p className="education-meta">August 2023 – June 2027</p></div>
    </a>
    <div className="about-stats">
      <div className="stat-card"><span className="stat-number">40–60%</span><span className="stat-label">Less QA regression effort</span></div>
      <a href="#projects" className="stat-card"><span className="stat-number">167M+</span><span className="stat-label">Smart-meter readings analyzed</span></a>
    </div>
  </section>;
}
