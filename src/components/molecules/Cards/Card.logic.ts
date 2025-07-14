import {useNavigate, useLocation} from 'react-router-dom';
import {useCardContext, type CardType} from '../../../context/CardContext';
import type {CardDataFromType} from '../../../validation/card-information';

export function useCardLogic<T extends CardType>(cardType: T) {
	const navigate = useNavigate();
	const location = useLocation();
	const {cards, setCards} = useCardContext();

	const handleEditCard = (index: number) => {
		const params = new URLSearchParams(location.search);
		params.set('modal', 'edit');
		params.set('cardType', cardType);
		params.set('id', index.toString());
		navigate(`${location.pathname}?${params.toString()}`, {replace: true});
	};

	const handleDeleteCard = (index: number) => {
		const updated = [...(cards[cardType] as CardDataFromType<T>[])];
		updated.splice(index, 1);
		setCards[cardType](updated as any);
	};

	const handleClickCard = (index: number, card: CardDataFromType<T>) => {
		navigate(`/single?type=${cardType}&id=${index}`, {
			state: {card},
		});
	};

	return {handleEditCard, handleDeleteCard, handleClickCard};
}
