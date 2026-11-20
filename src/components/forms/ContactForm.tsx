import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { contactSchema, type ContactValues } from '@/lib/validations';
const EMAIL_SERVICE_ID = 'service_eg5efu9';
const EMAIL_TEMPLATE_ID = 'template_u9cakid';
const EMAIL_PUBLIC_KEY = 'nhoeAq9OQ1AhSp5Dp';
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  const onSubmit = async (values: ContactValues) => {
    try {
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
        name: values.name,
        from_name: values.name,
        email: values.email,
        reply_to: values.email,
        message: values.message,
        to_name: 'Abhinav',
        title: 'Portfolio inquiry',
        subject: `Portfolio inquiry from ${values.name}`
      }, { publicKey: EMAIL_PUBLIC_KEY });
      toast.success('Message sent. I’ll get back to you soon.');
    } catch {
      toast.error('Could not send. Email me directly at abhinavpadige06@gmail.com.');
    }
  };
  return <form onSubmit={handleSubmit(onSubmit)} className="mt-3 rounded-[10px] border border-border bg-card p-4" noValidate>
    <h3 className="mb-5 text-base font-semibold text-foreground">Have something in mind?</h3>
    <div className="grid gap-5 sm:grid-cols-2">{(['name', 'email'] as const).map(field => <div key={field}><label htmlFor={field} className="mb-2 block text-xs text-muted-foreground">{field === 'name' ? 'Your name' : 'Your email'}</label><input {...register(field)} id={field} type={field === 'email' ? 'email' : 'text'} autoComplete={field} placeholder={field === 'name' ? 'Alex Smith' : 'alex@example.com'} className="field" aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} />{errors[field] && <p id={`${field}-error`} className="mt-2 flex items-start gap-1.5 text-xs text-destructive"><AlertCircle size={13} className="shrink-0" />{errors[field]?.message}</p>}</div>)}</div>
    <div className="mt-5"><label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">Your message</label><textarea {...register('message')} id="message" rows={4} placeholder="Tell me about your project or opportunity…" className="field resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <p id="message-error" className="mt-2 flex items-start gap-1.5 text-xs text-destructive"><AlertCircle size={13} className="shrink-0" />{errors.message.message}</p>}</div>
    <Button type="submit" disabled={isSubmitting} className="mt-5 h-12 w-full bg-foreground text-background hover:bg-foreground/90">{isSubmitting ? 'Sending…' : 'Send message'}<ArrowUpRight size={16} className="ml-2" /></Button>
    <p className="mt-3 text-center text-[11px] leading-5 text-muted-foreground">Your message goes straight to my inbox.</p>
  </form>;
}
