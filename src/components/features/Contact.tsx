import { Mail, Phone } from 'lucide-react';
import { LINKS } from '@/constants/portfolio';
import SectionHeading from '@/components/features/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
export default function Contact() {
  return <section id="contact" className="section-block"><SectionHeading title="Contact" /><p className="section-lead">Got a project, idea, or just want to chat? Let's connect.</p>
    <div className="book-call-row">{LINKS.booking ? <a className="portfolio-button button-primary" href={LINKS.booking} target="_blank" rel="noreferrer">Book a call</a> : <><button className="portfolio-button button-ghost" type="button" disabled title="Cal.com URL not yet provided">Book a 15-min call</button><button className="portfolio-button button-primary" type="button" disabled title="Cal.com URL not yet provided">Book a 30-min call</button></>}</div>
    {!LINKS.booking && <p className="booking-note">Call booking will be available once your Cal.com link is added.</p>}
    <div className="contact-list"><a className="contact-row" href={LINKS.email}><Mail size={16} strokeWidth={1.8} /><span>abhinavpadige06@gmail.com</span></a><a className="contact-row" href="tel:+918639081837"><Phone size={16} strokeWidth={1.8} /><span>+91 8639081837</span></a></div>
    <details className="contact-compose"><summary>Send a message<span aria-hidden="true">+</span></summary><ContactForm /></details>
  </section>;
}
