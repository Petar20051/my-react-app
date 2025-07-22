import {useNavigate, useSearchParams} from 'react-router-dom';
import {useCardContext} from '../../../context/CardContext';
import type {CardMap, CardSectionType} from '../../../validation/card-information';

export function useCardLogic(cardType: CardSectionType) {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const {cards, setCards} = useCardContext();

	const handleEditCard = (index: number) => {
		const updatedParams = new URLSearchParams(searchParams);
		updatedParams.set('modal', 'edit');
		updatedParams.set('cardType', cardType);
		updatedParams.set('id', index.toString());
		setSearchParams(updatedParams);
	};

	const handleDeleteCard = (index: number) => {
		const updatedCards = [...cards[cardType]];
		updatedCards.splice(index, 1);
		setCards(cardType, updatedCards as CardMap[typeof cardType]);
	};

	const handleClickCard = (index: number) => {
		navigate(`/single?type=${cardType}&id=${index}`, {});
	};

	return {handleEditCard, handleDeleteCard, handleClickCard};
}
