import type {LoginData, SignUpData} from '../validation/Auth';

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
