import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, AlertCircle, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { contactSchema, type ContactValues } from '@/lib/validations';
export default function ContactForm() {
  const [draft, setDraft] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(`Hi Abhinav,\n\n${values.message}\n\n${values.name}\n${values.email}`);
    setDraft(`mailto:abhinavpadige06@gmail.com?subject=${subject}&body=${body}`);
    toast.success('Email draft ready. Open your email app below to send it.');
  };
  return <form onSubmit={handleSubmit(onSubmit)} onChange={() => setDraft('')} className="mt-3 rounded-[10px] border border-border bg-card p-4" noValidate>
    <h3 className="mb-5 text-base font-semibold text-foreground">Have something in mind?</h3>
    <div className="grid gap-5 sm:grid-cols-2">{(['name', 'email'] as const).map(field => <div key={field}><label htmlFor={field} className="mb-2 block text-xs text-muted-foreground">{field === 'name' ? 'Your name' : 'Your email'}</label><input {...register(field)} id={field} type={field === 'email' ? 'email' : 'text'} autoComplete={field} placeholder={field === 'name' ? 'Alex Smith' : 'alex@example.com'} className="field" aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} />{errors[field] && <p id={`${field}-error`} className="mt-2 flex items-start gap-1.5 text-xs text-destructive"><AlertCircle size={13} className="shrink-0" />{errors[field]?.message}</p>}</div>)}</div>
    <div className="mt-5"><label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">Your message</label><textarea {...register('message')} id="message" rows={4} placeholder="Tell me about your project or opportunity…" className="field resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <p id="message-error" className="mt-2 flex items-start gap-1.5 text-xs text-destructive"><AlertCircle size={13} className="shrink-0" />{errors.message.message}</p>}</div>
    {draft ? <Button asChild className="mt-5 h-12 w-full bg-foreground text-background hover:bg-foreground/90"><a href={draft}><Mail size={16} className="mr-2" />Open email app to send<ArrowUpRight size={16} className="ml-2" /></a></Button> : <Button type="submit" disabled={isSubmitting} className="mt-5 h-12 w-full bg-foreground text-background hover:bg-foreground/90">Prepare email<ArrowUpRight size={16} className="ml-2" /></Button>}
    <p className="mt-3 text-center text-[11px] leading-5 text-muted-foreground">Creates a draft in your email app. No message is sent automatically.</p>
  </form>;
}
