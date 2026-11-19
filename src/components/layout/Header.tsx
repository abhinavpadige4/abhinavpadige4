import { NAV_ITEMS } from '@/constants/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
export default function Header() {
  const active = useActiveSection();
  return <nav className="section-rail" aria-label="Portfolio sections">{NAV_ITEMS.map(name => <a key={name} href={`#${name.toLowerCase()}`} aria-current={active === name.toLowerCase() ? 'location' : undefined}>{name}</a>)}</nav>;
}
