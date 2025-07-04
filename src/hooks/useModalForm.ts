import {useState} from 'react';
import {DEFAULT_IMAGE_URL, FIELD_MAX_LENGTHS} from '../constants/defaults';
import {capitalize, getMaxLengthMap} from '../utils/formHelpers';

export function useModalForm(fields: string[], initialData: Record<string, string>, onSubmit: (data: Record<string, string>) => void) {
	const maxLengthMap = getMaxLengthMap();

	const [formData, setFormData] = useState(() =>
		Object.fromEntries(
			fields.map((field) => [field, field === 'image' ? initialData[field] || DEFAULT_IMAGE_URL : initialData[field] || ''])
		)
	);

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = e.target;
		const maxLength = maxLengthMap[name];
		const error = maxLength && value.length > maxLength ? `${capitalize(name)} exceeds ${maxLength} characters.` : '';

		setFormData((prev) => ({...prev, [name]: value}));
		setErrors((prev) => ({...prev, [name]: error}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const hasErrors = Object.values(errors).some(Boolean);
		if (hasErrors) {
			alert('Please fix validation errors before submitting.');
			return;
		}

		for (const {field, maxLength} of FIELD_MAX_LENGTHS) {
			if (formData[field]?.length > maxLength) {
				alert(`${capitalize(field)} exceeds max length of ${maxLength} characters.`);
				return;
			}
		}

		onSubmit(formData);
	};

	return {formData, errors, handleChange, handleSubmit};
}
