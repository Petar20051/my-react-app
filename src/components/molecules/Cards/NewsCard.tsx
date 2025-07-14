import {ActionWrapper, ButtonWrapper} from '../../atoms/Layout';
import {CompactCard, NewsCards, ReversedCard, WideCard} from '../Card';
import {NewsImage} from '../../atoms/Image';
import {CardContent} from '../CardContent';
import {CardDate, CardDescription, CardInfo, CardTitle} from '../../atoms/Typography';
import {CTAButton} from '../../atoms/Button';
import {CardFooter} from '../CardFooter';
import type {NewsCard as NewsCardType} from '../../../validation/card-information';

type Props = {
	card: NewsCardType;
	index: number;
	actions: {
		onEdit: () => void;
		onDelete: () => void;
		onClick?: (index: number, card: NewsCardType) => void;
	};
	variant?: 'default' | 'wide';
};

const NewsCardComponent = ({card, index, actions}: Props) => {
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
			Wrapper = NewsCards;
	}
	return (
		<Wrapper>
			<NewsImage src={card.image} alt={card.title} />
			<CardContent>
				<ActionWrapper>
					<CardInfo>{card.category}</CardInfo>
					<ButtonWrapper>
						<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
						<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
					</ButtonWrapper>
				</ActionWrapper>
				<CardTitle>{card.title}</CardTitle>
				<CardDescription>{card.description}</CardDescription>
				<CardDate>{card.date}</CardDate>
			</CardContent>
			<CardFooter>
				<a onClick={handleClick}>{card.linkText}</a>
			</CardFooter>
		</Wrapper>
	);
};

export default NewsCardComponent;
