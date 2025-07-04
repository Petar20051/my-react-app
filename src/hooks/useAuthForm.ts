import {useState} from 'react';
import type {ZodSchema} from 'zod';

export interface UseAuthFormProps<T extends Record<string, string>> {
	initialData: T;
	schema: ZodSchema<T>;
	onSubmit: (data: T) => boolean | void;
}

export function useAuthForm<T extends Record<string, string>>(initialData: T, schema: ZodSchema<T>, onSubmit: (data: T) => boolean | void) {
	const [formData, setFormData] = useState<T>(initialData);
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value} as T);
	};

	const validateAndSubmit = (): boolean => {
		const result = schema.safeParse(formData);
		if (!result.success) {
			setError(result.error.issues[0].message);
			return false;
		}

		const res = onSubmit(formData);
		if (res === false) {
			setError('Invalid credentials');
			return false;
		}

		setError('');
		return true;
	};

	return {formData, error, handleChange, validateAndSubmit};
}
