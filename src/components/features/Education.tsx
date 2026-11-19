import { GraduationCap, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/features/SectionHeading';
export default function Education() {
  return <section id="education" className="section-block"><SectionHeading title="Education" />
    <div className="education-card education-card-inline"><span className="education-icon" aria-hidden="true"><GraduationCap size={20} strokeWidth={1.8} /></span><div><h3 className="education-institution">CVR College of Engineering, Hyderabad</h3><p className="education-degree">B.Tech · Computer Science & Data Science</p><p className="education-meta">August 2023 – June 2027</p></div></div>
    <div className="education-card"><span className="education-icon" aria-hidden="true"><GraduationCap size={20} strokeWidth={1.8} /></span><div><h3 className="education-institution">IIT Madras</h3><p className="education-degree">Data Science Program</p><p className="education-meta">Pursuing alongside undergraduate studies</p></div></div>
    <details className="certifications"><summary>Certifications & continued learning<ChevronDown size={16} strokeWidth={1.8} /></summary><ul>{['Become a Data Analyst', 'AWS Academy — Machine Learning Foundations', 'Getting Started as a Business Analyst', 'Oracle Academy — Database Programming & Design', 'Data Science Master Virtual Internship'].map(cert => <li key={cert}>{cert}</li>)}</ul></details>
  </section>;
}
