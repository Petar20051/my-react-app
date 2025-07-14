import {CARD_TYPE} from '../../../constants/cardTypes';
import {PodcastCardGrid} from '../../atoms/Layout';
import {CardSectionRenderer} from './SectionRenderer';
import type {PodcastCard as PodcastCardType} from '../../../validation/card-information';
import {useCardLogic} from '../../molecules/Cards/Card.logic';
import PodcastCard from '../../molecules/Cards/PodcastCard';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

type Props = {
	card: PodcastCardType;
	index: number;
};

const WrappedPodcastCard: React.FC<Props> = ({card, index}) => {
	const {handleEditCard, handleDeleteCard, handleClickCard} = useCardLogic(CARD_TYPE.podcasts);

	return (
		<PodcastCard
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
export default function PodcastsSection() {
	return (
		<CardSectionRenderer
			cardType={CARD_TYPE.podcasts}
			title="Podcasts"
			headerBtn="See all Podcasts"
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={PodcastCardGrid}
			CardComponent={WrappedPodcastCard}
		/>
	);
}
