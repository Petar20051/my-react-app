import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useCardContext} from '../../../context/CardContext';
import {DEFAULT_IMAGE_URL} from '../../../constants/defaults';
import {CardSchema, type Card, type CardSectionType} from '../Cards/Card.static';
import {fieldMap} from '../../../constants/defaults';

type FieldMap = typeof fieldMap;
type Field = FieldMap[CardSectionType][number];

type FormData = Record<Field, string> & {
	layout: 'normal' | 'compact' | 'wide';
	orientation: 'vertical' | 'horizontal' | 'reversed';
};

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
			: (Object.fromEntries(
					fields.map((field) => {
						if (field === 'image') return [field, DEFAULT_IMAGE_URL];
						return [field, ''];
					})
			  ) as Partial<Card>);

	const initialFormData: FormData = {
		...fields.reduce((acc, field) => {
			const rawValue = initialRaw?.[field as keyof Card];

			acc[field] = Array.isArray(rawValue) ? rawValue.join(', ') : rawValue?.toString() ?? '';

			return acc;
		}, {} as Record<Field, string>),

		layout: (initialRaw.layout as FormData['layout']) ?? (cardType === 'podcasts' ? 'compact' : 'normal'),
		orientation: (initialRaw.orientation as FormData['orientation']) ?? (cardType === 'featured' ? 'horizontal' : 'vertical'),
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name as Field]: value}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const transformed: Partial<Card> & {
			layout: 'normal' | 'compact' | 'wide';
			orientation: 'vertical' | 'horizontal' | 'reversed';
		} = {
			layout: formData.layout,
			orientation: formData.orientation,
		};

		for (const field of fields) {
			const value = formData[field];

			switch (field) {
				case 'topics':
					(transformed as any)[field] = value
						.split(',')
						.map((s) => s.trim())
						.filter(Boolean);
					break;
				case 'date': {
					const date = new Date(value);
					(transformed as any)[field] = isNaN(date.getTime()) ? undefined : date.toISOString().split('T')[0];
					break;
				}
				default:
					(transformed as any)[field] = value;
			}
		}

		const rawVariant = cardType.slice(0, -1);
		const allowedVariants = ['default', 'event', 'news', 'podcast', 'solution', 'featured'] as const;
		(transformed as any).variant = allowedVariants.includes(rawVariant as any) ? (rawVariant as Card['variant']) : 'default';

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
