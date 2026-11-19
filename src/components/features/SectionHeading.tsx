import type { ReactNode } from 'react';
interface SectionHeadingProps { title: string; number?: string; label?: string; description?: string; action?: ReactNode }
export default function SectionHeading({ title, description, action }: SectionHeadingProps) {
  return <div className="section-heading"><div className="section-heading-row"><h2 className="section-title">{title}</h2>{action}</div>{description && <p className="section-lead">{description}</p>}</div>;
}
