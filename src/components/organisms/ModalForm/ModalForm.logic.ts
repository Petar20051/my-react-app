import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useCardContext} from '../../../context/CardContext';
import {DEFAULT_IMAGE_URL} from '../../../constants/defaults';
import {CardSchema, type Card, type CardSectionType} from '../Cards/Card.static';

type Field = keyof Card;
type FormData = Record<Field, string>;

type UseModalFormProps = {
	mode: 'add' | 'edit';
	cardType: CardSectionType;
	fields: Field[];
	onClose: () => void;
};

export function useModalForm({mode, cardType, fields, onClose}: UseModalFormProps) {
	const [searchParams] = useSearchParams();
	const {cards, setCards} = useCardContext();
	const indexParam = searchParams.get('id');
	const index = indexParam ? parseInt(indexParam, 10) : null;

	const cardArray = cards[cardType];
	const setCardArray = (value: Card[]) => setCards(cardType, value);

	const initialRaw: Partial<Card> =
		mode === 'edit' && index !== null && cardArray[index]
			? cardArray[index]
			: Object.fromEntries(
					fields.map((field) => {
						if (field === 'image') return [field, DEFAULT_IMAGE_URL];
						return [field, ''];
					})
			  );

	const initialFormData: FormData = Object.fromEntries(
		fields.map((field) => {
			const value = initialRaw?.[field];
			return [field, Array.isArray(value) ? value.join(', ') : value?.toString() ?? ''];
		})
	) as FormData;

	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const transformed: Partial<Card> = {};

		for (const field of fields) {
			const value = formData[field];
			if (field === 'topics') {
				transformed[field] = value
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
			} else if (field === 'episode') {
				transformed[field] = value;
			} else if (field === 'date') {
				const date = new Date(value);
				transformed[field] = isNaN(date.getTime()) ? undefined : date.toISOString().split('T')[0];
			} else if (field === 'variant') {
				const allowedVariants = ['default', 'event', 'news', 'podcast', 'solution', 'featured'] as const;
				transformed[field] = allowedVariants.includes(value as any) ? (value as (typeof allowedVariants)[number]) : 'default';
			} else {
				transformed[field] = value;
			}
		}

		const result = CardSchema.safeParse(transformed);

		if (!result.success) {
			const flattened = result.error.flatten().fieldErrors;
			setErrors(Object.fromEntries(Object.entries(flattened).map(([k, v]) => [k, v?.join(', ') ?? ''])) as any);
			return;
		}

		const updated = [...cardArray];

		if (mode === 'add') {
			setCardArray([...updated, result.data]);
		} else if (mode === 'edit' && index !== null) {
			updated[index] = result.data;
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
