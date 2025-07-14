import {ActionWrapper, ButtonWrapper, PodcastContentWrapper} from '../../atoms/Layout';
import {CompactCard, PodcastsCard, ReversedCard, WideCard} from '../Card';
import {PodcastImage} from '../../atoms/Image';
import {PodcastCardContent} from '../CardContent';
import {CardDate, CardDescription, CardInfo, CardTitle} from '../../atoms/Typography';
import {CTAButton} from '../../atoms/Button';
import {CardFooter} from '../CardFooter';
import type {PodcastCard as PodcastCardType} from '../../../validation/card-information';

type Props = {
	card: PodcastCardType;
	index: number;
	actions: {
		onEdit: () => void;
		onDelete: () => void;
		onClick?: (index: number, card: PodcastCardType) => void;
	};
};

const PodcastCard = ({card, index, actions}: Props) => {
	const hasImage = !!card.image;

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
			Wrapper = PodcastsCard;
	}
	return (
		<Wrapper>
			<PodcastContentWrapper hasImage={hasImage}>
				{hasImage && <PodcastImage src={card.image} alt={card.title} />}
				<PodcastCardContent>
					<ActionWrapper>
						<CardInfo>{card.episode}</CardInfo>
						<ButtonWrapper>
							<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
							<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
						</ButtonWrapper>
					</ActionWrapper>
					<CardTitle>{card.title}</CardTitle>
					<CardDescription>{card.description}</CardDescription>
					<CardDate>{card.date}</CardDate>
				</PodcastCardContent>
			</PodcastContentWrapper>
			<CardFooter>
				<a onClick={handleClick}>{card.linkText}</a>
			</CardFooter>
		</Wrapper>
	);
};

export default PodcastCard;
