import { FileText } from 'lucide-react';
import { LINKS, PROFILE_IMAGE } from '@/constants/portfolio';
export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-main">
      <div className="hero-avatar"><img src={PROFILE_IMAGE} alt="Abhinav Padige" width={150} height={150} fetchPriority="high" /></div>
      <div className="hero-text"><h1 className="hero-name">Hey, I'm Abhinav</h1><p className="hero-tagline">CSE · CVR College · AI Engineer · Full-Stack Developer</p></div>
    </div>
    <div className="hero-actions">{LINKS.resume ? <a href={LINKS.resume} className="hero-icon" target="_blank" rel="noreferrer" aria-label="View resume" title="Resume"><FileText size={20} strokeWidth={1.8} /></a> : <button className="hero-icon" type="button" disabled aria-label="Resume PDF not yet provided" title="Resume PDF not yet provided"><FileText size={20} strokeWidth={1.8} /></button>}</div>
  </section>;
}
