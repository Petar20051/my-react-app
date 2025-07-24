import z from 'zod';
export const INVALID_PASSWORD = 'Password must be at least 4 characters long';
export const INVALID_EMAIL = 'Invalid email';
export const INVALID_USERNAME = 'Username minimal length is 3 symbols';

export const SignUpSchema = z.object({
	username: z.string().min(3, INVALID_USERNAME),
	email: z.string().email(INVALID_EMAIL),
	password: z.string().min(4, INVALID_PASSWORD),
});

export const LoginSchema = z.object({
	email: z.string().email(INVALID_EMAIL),
	password: z.string().min(4, INVALID_PASSWORD),
});

export type SignUpData = z.infer<typeof SignUpSchema>;
export type LoginData = z.infer<typeof LoginSchema>;

export type User = {
	username: string;
	email: string;
	password: string;
};

type FieldConfig<T> = {
	name: keyof T;
	type: string;
	placeholder: string;
};

export const loginFormConfig = {
	initialData: {email: '', password: ''} satisfies LoginData,
	fields: [
		{name: 'email', type: 'email', placeholder: 'Email'},
		{name: 'password', type: 'password', placeholder: 'Password'},
	] satisfies FieldConfig<LoginData>[],
};

export const signupFormConfig = {
	initialData: {username: '', email: '', password: ''} satisfies SignUpData,
	fields: [
		{name: 'username', type: 'text', placeholder: 'Username'},
		{name: 'email', type: 'email', placeholder: 'Email'},
		{name: 'password', type: 'password', placeholder: 'Password'},
	] satisfies FieldConfig<SignUpData>[],
};
