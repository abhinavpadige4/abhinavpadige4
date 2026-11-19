import { useCallback, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import type { DockEntry } from '@/constants/dock';
interface HighlightStyle extends CSSProperties { '--dock-color': string }
export function useDockHighlight(items: DockEntry[]) {
  const dockRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [position, setPosition] = useState({ x: 12, y: 8 });
  const activate = useCallback((index: number | null) => setActive(index), []);
  const registerItem = useCallback((index: number, element: HTMLElement | null) => { itemRefs.current[index] = element; }, []);
  useLayoutEffect(() => {
    if (active === null || !dockRef.current) return;
    const dock = dockRef.current;
    const measure = () => {
      const element = itemRefs.current[active];
      if (element) setPosition({ x: element.offsetLeft - dock.scrollLeft, y: element.offsetTop - (items[active].url ? 3 : 0) });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(dock);
    dock.addEventListener('scroll', measure, { passive: true });
    return () => { observer.disconnect(); dock.removeEventListener('scroll', measure); };
  }, [active, items]);
  const highlightStyle: HighlightStyle = { transform: `translate3d(${position.x}px, ${position.y}px, 0)`, opacity: active === null ? 0 : 1, '--dock-color': `var(--dock-${items[active ?? 0].key})` };
  return { dockRef, active, activate, registerItem, highlightStyle };
}
