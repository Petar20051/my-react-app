import {CARD_TYPE} from '../../../constants/cardTypes';
import {FeaturedCardGrid} from '../../atoms/Layout';
import {CardSectionRenderer} from './SectionRenderer';
import type {FeaturedCard as FeaturedCardType} from '../../../validation/card-information';
import FeaturedCardComponent from '../../molecules/Cards/FeaturedCard';
import {useCardLogic} from '../../molecules/Cards/Card.logic';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

type Props = {
	card: FeaturedCardType;
	index: number;
};

const WrappedFeaturedCard: React.FC<Props> = ({card, index}) => {
	const {handleEditCard, handleDeleteCard, handleClickCard} = useCardLogic(CARD_TYPE.featured);

	return (
		<FeaturedCardComponent
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

export default function FeaturedSection() {
	return (
		<CardSectionRenderer
			cardType={CARD_TYPE.featured}
			title="Optimize your grassland"
			subtitle="Featured Solution"
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={FeaturedCardGrid}
			CardComponent={WrappedFeaturedCard}
		/>
	);
}
