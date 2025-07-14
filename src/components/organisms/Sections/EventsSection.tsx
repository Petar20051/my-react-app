import {CARD_TYPE} from '../../../constants/cardTypes';
import {EventsCardGrid} from '../../atoms/Layout';
import {CardSectionRenderer} from './SectionRenderer';

import type {EventCard as EventCardType} from '../../../validation/card-information';
import EventCard from '../../molecules/Cards/EventCard';
import {useCardLogic} from '../../molecules/Cards/Card.logic';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

type Props = {
	card: EventCardType;
	index: number;
};

const WrappedEventCard: React.FC<Props> = ({card, index}) => {
	const {handleEditCard, handleDeleteCard, handleClickCard} = useCardLogic(CARD_TYPE.events);

	return (
		<EventCard
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

export default function EventsSection() {
	return (
		<CardSectionRenderer
			cardType={CARD_TYPE.events}
			title="Events"
			subtitle=""
			headerBtn="See all Events"
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={EventsCardGrid}
			CardComponent={WrappedEventCard}
		/>
	);
}
