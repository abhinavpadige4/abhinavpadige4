import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least two characters.').max(100, 'Keep your name under 100 characters.'),
  email: z.string().trim().email('Please enter a valid email address.').max(254),
  message: z.string().trim().min(10, 'Please write at least 10 characters.').max(3000, 'Keep your message under 3,000 characters.')
});
export type ContactValues = z.infer<typeof contactSchema>;
