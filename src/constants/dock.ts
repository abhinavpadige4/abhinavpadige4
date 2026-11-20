import { Home, FileText, Github, Linkedin, Mail, CalendarDays, type LucideIcon } from 'lucide-react';
import { LINKS } from '@/constants/portfolio';
export interface DockEntry { key: string; label: string; icon?: LucideIcon; text?: string; url: string | null; external?: boolean; pending?: string; separatorBefore?: boolean }
export const DOCK_ITEMS: DockEntry[] = [
  { key: 'home', label: 'Home', icon: Home, url: '#home' },
  { key: 'resume', label: 'Resume', icon: FileText, url: LINKS.resume, external: true },
  { key: 'github', label: 'GitHub', icon: Github, url: LINKS.github, external: true, separatorBefore: true },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: LINKS.linkedin, external: true },
  { key: 'email', label: 'Email', icon: Mail, url: LINKS.email },
  { key: 'leetcode', label: 'LeetCode', text: 'LC', url: LINKS.leetcode, external: true, separatorBefore: true },
  { key: 'booking', label: 'Book a call', icon: CalendarDays, url: LINKS.booking, external: true }
];
