import z from 'zod';
import {INVALID_EMAIL, INVALID_PASSWORD, INVALID_USERNAME} from '../constants/authValidation';

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
