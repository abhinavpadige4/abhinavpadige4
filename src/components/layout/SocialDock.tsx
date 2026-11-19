import { Fragment } from 'react';
import { DOCK_ITEMS } from '@/constants/dock';
import { useDockHighlight } from '@/hooks/useDockHighlight';
import DockLink from '@/components/features/DockLink';
export default function SocialDock() {
  const { dockRef, active, activate, registerItem, highlightStyle } = useDockHighlight(DOCK_ITEMS);
  return <nav className="social-dock" aria-label="Social and quick links" ref={dockRef}>
    <span className="dock-highlight" style={highlightStyle} aria-hidden="true" />
    {DOCK_ITEMS.map((item, index) => <Fragment key={item.key}>{item.separatorBefore && <span className="dock-separator" aria-hidden="true" />}<DockLink item={item} index={index} active={active === index} activate={activate} registerItem={registerItem} /></Fragment>)}
  </nav>;
}
