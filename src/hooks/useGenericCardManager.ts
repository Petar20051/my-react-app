import {useEffect, useState} from 'react';
import type {CardManagerReturn} from '../types/formProps';

export function useGenericCardManager<T>(initialData: T[]): CardManagerReturn<T> {
	const [cards, setCards] = useState(initialData);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);

	useEffect(() => {
		setCards(initialData);
	}, [initialData]);

	const startEditing = (index: number) => setEditingIndex(index);
	const cancelEditing = () => setEditingIndex(null);

	const addCard = (card: T) => {
		setCards((prev) => [...prev, card]);
	};

	const editCard = (updatedCard: T) => {
		if (editingIndex === null) return;

		setCards((prev) => prev.map((card, i) => (i === editingIndex ? updatedCard : card)));
		cancelEditing();
	};

	const deleteCard = (index: number) => {
		setCards((prev) => prev.filter((_, i) => i !== index));
		if (editingIndex === index) cancelEditing();
	};

	return {
		cards,
		editingIndex,
		startEditing,
		cancelEditing,
		addCard,
		editCard,
		deleteCard,
	};
}
