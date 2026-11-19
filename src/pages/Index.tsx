import Hero from '@/components/features/Hero';
import About from '@/components/features/About';
import Experience from '@/components/features/Experience';
import Projects from '@/components/features/Projects';
import Achievements from '@/components/features/Achievements';
import Skills from '@/components/features/Skills';
import Education from '@/components/features/Education';
import Contact from '@/components/features/Contact';
import ErrorBoundary from '@/components/features/ErrorBoundary';
import { useScrollReveal } from '@/hooks/useScrollReveal';
export default function Index() {
  useScrollReveal();
  return <main><Hero /><About /><Experience /><ErrorBoundary><Projects /></ErrorBoundary><Achievements /><Skills /><Education /><ErrorBoundary><Contact /></ErrorBoundary></main>;
}
