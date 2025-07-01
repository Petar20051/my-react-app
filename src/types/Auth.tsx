import z from 'zod';

export const SignUpSchema = z.object({
	username: z.string().min(3, 'Username minimal length is 3 symbols'),
	email: z.string().email('Invalid email'),
	password: z.string().min(4, 'Password must be at least 4 characters long'),
});

export const LoginSchema = z.object({
	email: z.string().email('Invalid email'),
	password: z.string().min(4, 'Password must be at least 4 characters long'),
});

export type SignUpData = z.infer<typeof SignUpSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
