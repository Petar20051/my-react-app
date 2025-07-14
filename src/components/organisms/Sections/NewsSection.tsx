import {CARD_TYPE} from '../../../constants/cardTypes';
import {CardSectionRenderer} from './SectionRenderer';

import type {NewsCard as NewsCardType} from '../../../validation/card-information';
import NewsCard from '../../molecules/Cards/NewsCard';
import {CardGrid} from '../../atoms/Layout';
import {useCardLogic} from '../../molecules/Cards/Card.logic';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

type Props = {
	card: NewsCardType;
	index: number;
};

const WrappedNewsCard: React.FC<Props> = ({card, index}) => {
	const {handleEditCard, handleDeleteCard, handleClickCard} = useCardLogic(CARD_TYPE.news);

	return (
		<NewsCard
			card={card}
			index={index}
			actions={{
				onEdit: () => handleEditCard(index),
				onDelete: () => handleDeleteCard(index),
				onClick: () => handleClickCard(index, card),
			}}
		/>
	);
};

export default function NewsSection() {
	return (
		<CardSectionRenderer
			cardType={CARD_TYPE.news}
			title="News"
			headerBtn="See all News"
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={CardGrid}
			CardComponent={WrappedNewsCard}
		/>
	);
}
