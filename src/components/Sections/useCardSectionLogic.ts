import {useEffect, useMemo} from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import type {ZodSchema} from 'zod';
import {useFetchAndValidateJSON} from '../../hooks/useFetch';
import {useGenericCardManager} from '../../hooks/useGenericCardManager';
import type {CardType} from '../../types/cards';

type TransformFn<T> = (input: Record<string, string>) => T;
type ReverseTransformFn<T> = (card: T) => Record<string, string>;

export function useCardSectionLogic<T>(
	cardType: CardType,
	dataPath: string,
	schema: ZodSchema<T[]>,
	transformInputToCard: TransformFn<T>,
	transformEditCardForModal?: ReverseTransformFn<T>
) {
	const {data: fetchedCards, loading, error} = useFetchAndValidateJSON<T[]>(dataPath, schema);
	const initialData = useMemo(() => fetchedCards ?? [], [fetchedCards]);

	const {cards, addCard, editCard, deleteCard, startEditing} = useGenericCardManager<T>(initialData);

	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const modalType = searchParams.get('modal');
	const typeParam = searchParams.get('cardType');
	const cardId = searchParams.get('id');
	const validEditIndex = useMemo(() => {
		if (modalType !== 'edit' || typeParam !== cardType || cardId === null) return null;
		const parsed = parseInt(cardId, 10);
		return isNaN(parsed) ? null : parsed;
	}, [modalType, typeParam, cardId, cardType]);

	const editCardRaw = useMemo(() => {
		return validEditIndex !== null ? cards[validEditIndex] ?? null : null;
	}, [validEditIndex, cards]);

	const editCardTransformed = useMemo(() => {
		if (transformEditCardForModal && editCardRaw) {
			return transformEditCardForModal(editCardRaw);
		}
		return editCardRaw;
	}, [transformEditCardForModal, editCardRaw]);

	useEffect(() => {
		if (validEditIndex !== null) {
			startEditing(validEditIndex);
		}
	}, [validEditIndex, startEditing]);

	const openModal = (type: 'add' | 'edit', index?: number) => {
		const params = new URLSearchParams(location.search);
		params.set('modal', type);
		params.set('cardType', cardType);

		if (type === 'edit' && typeof index === 'number') {
			params.set('id', index.toString());
		} else {
			params.delete('id');
		}

		navigate(`${location.pathname}?${params.toString()}`, {replace: true});
	};

	const closeModal = () => {
		const params = new URLSearchParams(location.search);
		params.delete('modal');
		params.delete('cardType');
		params.delete('id');

		const url = params.toString() ? `${location.pathname}?${params.toString()}` : location.pathname;

		navigate(url, {replace: true});
	};

	const onAddCard = (input: Record<string, string>) => {
		addCard(transformInputToCard(input));
		closeModal();
	};

	const onEditCard = (input: Record<string, string>) => {
		editCard(transformInputToCard(input));
		closeModal();
	};

	return {
		cards,
		loading,
		error,
		modalType,
		typeParam,
		editCard: editCardTransformed,
		openAddModal: () => openModal('add'),
		openEditModal: (index: number) => openModal('edit', index),
		closeModal,
		onAddCard,
		onEditCard,
		handleDeleteCard: deleteCard,
	};
}
