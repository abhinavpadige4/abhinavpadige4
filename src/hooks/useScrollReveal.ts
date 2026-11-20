import { useEffect } from 'react';
const REVEAL_SELECTOR = '.section-heading, .stat-card, .book-call-row, .contact-row, .contact-compose, .experience-item, .project-item, .achievement-item, .skill-row, .education-card';
export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    targets.forEach(target => {
      const siblings = Array.from(target.parentElement?.children ?? []).filter(child => child instanceof HTMLElement && child.matches(REVEAL_SELECTOR));
      target.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(target), 5) * 70}ms`);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.reveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(target => {
      target.dataset.reveal = target.getBoundingClientRect().top < window.innerHeight - 40 ? 'visible' : 'pending';
      if (target.dataset.reveal === 'pending') observer.observe(target);
    });
    return () => {
      observer.disconnect();
      targets.forEach(target => {
        delete target.dataset.reveal;
        target.style.removeProperty('--reveal-delay');
      });
    };
  }, []);
}
