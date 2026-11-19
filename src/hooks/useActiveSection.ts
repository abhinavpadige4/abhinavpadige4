import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants/portfolio';
export function useActiveSection() {
  const [active, setActive] = useState('home');
  const { pathname } = useLocation();
  useEffect(() => {
    let frame = 0;
    const sections = NAV_ITEMS.map(name => document.getElementById(name.toLowerCase())).filter((element): element is HTMLElement => Boolean(element));
    const update = () => {
      const anchor = window.innerHeight * .25;
      let current = 'home';
      sections.forEach(section => { if (section.getBoundingClientRect().top <= anchor) current = section.id; });
      setActive(current);
    };
    const scheduleUpdate = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', scheduleUpdate); window.removeEventListener('resize', scheduleUpdate); };
  }, [pathname]);
  return active;
}
