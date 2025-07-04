import {
	CardContent,
	CardTitle,
	CTAButton,
	ButtonWrapper,
	ActionWrapper,
	CardDate,
	CardFooter,
	CardDescription,
} from '../../../styles/sections.styles';

import {EventCardArraySchema, type EventCard} from '../../../validation/card-information';
import {EventsCard, EventsCardGrid, EventsImage} from './event.styles';
import {CardSectionRenderer} from '../cardSectionRenderer';
import {CARD_TYPE} from '../../../constants/cardTypes';
import {transformInputToEventCard} from '../../../utils/cardTransformers';
import {DATA_PATHS} from '../../../constants/paths';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

const EventsSection = () => (
	<CardSectionRenderer<EventCard>
		title="Events"
		headerBtn="See all events"
		cardType={CARD_TYPE.events}
		dataPath={DATA_PATHS.EVENTS}
		schema={EventCardArraySchema}
		transformInputToCard={transformInputToEventCard}
		deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
		CardGridWrapper={EventsCardGrid}
		renderCard={(card, index, actions) => (
			<EventsCard key={index}>
				<EventsImage src={card.image} alt={card.title} />
				<CardContent>
					<CardTitle>{card.title}</CardTitle>
					<CardDescription>{card.description}</CardDescription>
					<ActionWrapper>
						<CardDate>{card.date}</CardDate>
						<ButtonWrapper>
							<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
							<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
						</ButtonWrapper>
					</ActionWrapper>
				</CardContent>
				<CardFooter>
					<a onClick={actions.onClick}>{card.linkText}</a>
				</CardFooter>
			</EventsCard>
		)}
	/>
);

export default EventsSection;
