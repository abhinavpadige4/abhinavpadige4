import { useEffect } from 'react';
export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-block'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
    sections.forEach(section => {
      section.dataset.reveal = section.getBoundingClientRect().top < window.innerHeight - 32 ? 'visible' : 'pending';
      if (section.dataset.reveal === 'pending') observer.observe(section);
    });
    return () => { observer.disconnect(); sections.forEach(section => { delete section.dataset.reveal; }); };
  }, []);
}
