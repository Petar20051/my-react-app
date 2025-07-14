import {ActionWrapper, ButtonWrapper, SolutionTitleWrapper} from '../../atoms/Layout';
import {SolutionsCard, CompactCard, WideCard, ReversedCard} from '../Card';
import {CardImage} from '../../atoms/Image';
import {CardContent} from '../CardContent';
import {CardInfo, CardLabel, CardTitle, SolutionCardDescription} from '../../atoms/Typography';
import {CTAButton} from '../../atoms/Button';
import {CardFooter} from '../CardFooter';
import type {SolutionCard as SolutionCardType} from '../../../validation/card-information';

type Props = {
	card: SolutionCardType;
	index: number;
	actions: {
		onEdit: () => void;
		onDelete: () => void;
		onClick?: () => void;
	};
};

const SolutionCard = ({card, index, actions}: Props) => {
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
			Wrapper = SolutionsCard;
	}

	return (
		<Wrapper>
			<CardImage src={card.image} alt={card.title} />
			<CardContent>
				<ActionWrapper>
					<SolutionTitleWrapper>
						<CardLabel>{card.label}</CardLabel>
						<CardTitle>{card.title}</CardTitle>
					</SolutionTitleWrapper>
					<ButtonWrapper>
						<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
						<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
					</ButtonWrapper>
				</ActionWrapper>
				<SolutionCardDescription>{card.info}</SolutionCardDescription>
				<CardInfo>{card.description}</CardInfo>
			</CardContent>
			<CardFooter>
				<a onClick={actions.onClick}>{card.linkText}</a>
			</CardFooter>
		</Wrapper>
	);
};

export default SolutionCard;
