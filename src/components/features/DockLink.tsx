import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { DockEntry } from '@/constants/dock';
interface DockLinkProps { item: DockEntry; index: number; active: boolean; registerItem: (index: number, element: HTMLElement | null) => void; activate: (index: number | null) => void }
export default function DockLink({ item, index, active, registerItem, activate }: DockLinkProps) {
  const Icon = item.icon;
  const content = Icon ? <Icon size={18} strokeWidth={1.8} /> : item.text;
  const label = item.url ? item.label : item.pending;
  return <Tooltip><TooltipTrigger asChild>
    <span className="dock-trigger" ref={element => registerItem(index, element)} onMouseEnter={() => activate(index)} onMouseLeave={() => activate(null)} onFocus={() => activate(index)} onBlur={() => activate(null)} tabIndex={item.url ? undefined : 0} aria-label={item.url ? undefined : label}>
      {item.url ? <a className={`dock-item${active ? ' is-active' : ''}`} data-color={item.key} href={item.url} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} aria-label={item.label}>{content}</a> : <button type="button" disabled className="dock-item" data-color={item.key} aria-label={label}>{content}</button>}
    </span>
  </TooltipTrigger><TooltipContent side="top" sideOffset={14} className="rounded-lg border-border bg-popover px-3 py-2 text-xs text-popover-foreground">{label}</TooltipContent></Tooltip>;
}
