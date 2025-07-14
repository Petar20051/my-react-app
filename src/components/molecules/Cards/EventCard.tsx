import React from 'react';
import {CardFooter} from '../CardFooter';
import type {EventCard as EventCardType} from '../../../validation/card-information';
import {CardContent} from '../CardContent';
import {EventsImage} from '../../atoms/Image';
import {CardDate, CardDescription, CardTitle} from '../../atoms/Typography';
import {ActionWrapper, ButtonWrapper} from '../../atoms/Layout';
import {CTAButton} from '../../atoms/Button';
import {CompactCard, EventsCard, ReversedCard, WideCard} from '../Card';

type Props = {
	card: EventCardType;
	index: number;
	actions: {
		onClick?: (index: number, card: EventCardType) => void;
		onEdit?: () => void;
		onDelete?: () => void;
	};
};

const EventCard: React.FC<Props> = ({card, index, actions}) => {
	const {title, description, date, image, linkText} = card;

	const handleClick = () => {
		actions.onClick?.(index, card);
	};

	const variant = card.variant ?? 'default';

	let Wrapper;
	switch (variant) {
		case 'wide':
			Wrapper = WideCard;
			break;
		case 'compact':
			Wrapper = CompactCard;
			break;
		case 'reversed':
			Wrapper = ReversedCard;
			break;
		default:
			Wrapper = EventsCard;
	}
	return (
		<Wrapper>
			<EventsImage src={image} alt={title} />
			<CardContent>
				<ActionWrapper>
					<CardTitle>{title}</CardTitle>
					<ButtonWrapper>
						<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
						<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
					</ButtonWrapper>
				</ActionWrapper>
				<CardDescription>{description}</CardDescription>
				<CardDate>{date}</CardDate>
			</CardContent>
			<CardFooter>
				<a onClick={handleClick}>{linkText}</a>
			</CardFooter>
		</Wrapper>
	);
};
export default EventCard;
