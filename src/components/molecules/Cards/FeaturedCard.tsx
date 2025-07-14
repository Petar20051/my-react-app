import {
	ActionWrapper,
	ButtonWrapper,
	FeatureContentWrapper,
	FeatureContentWrapperReverse,
	FeaturedCardWrapper,
	FeaturedTitleWrapper,
} from '../../atoms/Layout';
import {FeaturedImage} from '../../atoms/Image';
import {CardContent, FeaturedReverseCardContent} from '../CardContent';
import {CardLabel, CardTitle, FeaturedDescription, FeaturedInfo, FeaturedTag, FeaturedTopic} from '../../atoms/Typography';
import {CTAButton} from '../../atoms/Button';
import {CardFooter} from '../CardFooter';
import type {FeaturedCard as FeaturedCardType} from '../../../validation/card-information';
import {CompactCard, ReversedCard, WideCard} from '../Card';

type Props = {
	card: FeaturedCardType;
	index: number;
	actions: {
		onEdit: () => void;
		onDelete: () => void;
		onClick?: (index: number, card: FeaturedCardType) => void;
	};
	variant?: 'default' | 'wide';
};

const FeaturedCardComponent = ({card, index, actions}: Props) => {
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
			Wrapper = FeaturedCardWrapper;
	}

	const renderCardContent = () => (
		<>
			<ActionWrapper>
				<FeaturedTitleWrapper>
					{card.label && <CardLabel>{card.label}</CardLabel>}
					<CardTitle>{card.title}</CardTitle>
					{card.tag && <FeaturedTag>{card.tag}</FeaturedTag>}
				</FeaturedTitleWrapper>
				<ButtonWrapper>
					<CTAButton onClick={actions.onEdit}>✏️</CTAButton>
					<CTAButton onClick={actions.onDelete}>🗑️</CTAButton>
				</ButtonWrapper>
			</ActionWrapper>
			<FeaturedDescription>{index % 2 === 0 ? card.info : card.description}</FeaturedDescription>
			{index % 2 === 0 && <FeaturedInfo>{card.description}</FeaturedInfo>}
			<FeaturedTitleWrapper>
				{card.topics?.map((topic, i) => (
					<FeaturedTopic key={i}>{topic}</FeaturedTopic>
				))}
			</FeaturedTitleWrapper>
		</>
	);

	return (
		<Wrapper>
			{index % 2 === 0 ? (
				<FeatureContentWrapper>
					<FeaturedImage src={card.image} alt={card.title} />
					<CardContent>{renderCardContent()}</CardContent>
				</FeatureContentWrapper>
			) : (
				<FeatureContentWrapperReverse>
					<FeaturedReverseCardContent>{renderCardContent()}</FeaturedReverseCardContent>
					<FeaturedImage src={card.image} alt={card.title} />
				</FeatureContentWrapperReverse>
			)}
			<CardFooter>
				<a onClick={handleClick}>{card.linkText}</a>
			</CardFooter>
		</Wrapper>
	);
};

export default FeaturedCardComponent;
