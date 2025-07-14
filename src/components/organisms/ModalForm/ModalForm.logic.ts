import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useCardContext, type CardType} from '../../../context/CardContext';
import {schemaMap, type CardDataFromType} from '../../../validation/card-information';
import {DEFAULT_IMAGE_URL, fieldMap} from '../../../constants/defaults';

type FieldMap = typeof fieldMap;
type FieldsFor<T extends CardType> = FieldMap[T];

type UseModalFormProps<T extends CardType> = {
	mode: 'add' | 'edit';
	cardType: T;
	fields: FieldsFor<T>;
	onClose: () => void;
};

export function useModalForm<T extends CardType>({mode, cardType, fields, onClose}: UseModalFormProps<T>) {
	const [searchParams] = useSearchParams();
	const {cards, setCards} = useCardContext();
	const indexParam = searchParams.get('id');
	const index = indexParam ? parseInt(indexParam, 10) : null;

	const cardArray = cards[cardType] as CardDataFromType<T>[];
	const setCardArray = setCards[cardType] as (value: CardDataFromType<T>[]) => void;

	const allFields = fields.includes('variant' as FieldsFor<T>[number]) ? fields : ([...fields, 'variant'] as FieldsFor<T>);

	const initialRawData: Partial<CardDataFromType<T>> =
		mode === 'edit' && index !== null && cardArray[index]
			? cardArray[index]
			: (Object.fromEntries(
					allFields.map((f) => {
						if (f === 'variant') return [f, 'default'];
						if (f === 'image') return [f, DEFAULT_IMAGE_URL];
						return [f, ''];
					})
			  ) as Partial<CardDataFromType<T>>);

	const initialData: Record<string, string> = Object.fromEntries(
		allFields.map((field) => {
			const value = initialRawData?.[field as keyof CardDataFromType<T>];
			return [field, Array.isArray(value) ? value.join(', ') : value?.toString() ?? ''];
		})
	);

	const [formData, setFormData] = useState<Record<string, string>>(initialData);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const transformedFormData: Record<string, any> = {...formData};

		for (const [key, value] of Object.entries(formData)) {
			if (key === 'topics') {
				transformedFormData[key] = value
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0);
			} else if (key === 'episode') {
				const num = parseInt(value, 10);
				transformedFormData[key] = isNaN(num) ? undefined : num;
			} else if (key === 'date') {
				const parsedDate = new Date(value);
				transformedFormData[key] = isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString().split('T')[0];
			} else if (key === 'variant') {
				transformedFormData[key] = value === 'compact' || value === 'wide' || value === 'reversed' ? value : 'default';
			} else {
				transformedFormData[key] = value;
			}
		}

		const schema = schemaMap[cardType];
		const result = schema.safeParse(transformedFormData);

		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors;
			setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([key, value]) => [key, value?.join(', ') ?? ''])));
			return;
		}

		const validatedCard = result.data as CardDataFromType<T>;
		const updated = [...cardArray];

		if (mode === 'add') {
			setCardArray([...updated, validatedCard]);
		} else if (mode === 'edit' && index !== null) {
			updated[index] = validatedCard;
			setCardArray(updated);
		}

		onClose();
	};

	useEffect(() => {
		setErrors({});
	}, [formData]);

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
	};
}
