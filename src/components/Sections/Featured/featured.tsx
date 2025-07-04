import {
	Section,
	CTAButton,
	ButtonWrapper,
	ActionWrapper,
	CardLabel,
	CardTitle,
	CardFooter,
	CardContent,
} from '../../../styles/sections.styles';

import {
	FeatureContentWrapper,
	FeatureContentWrapperReverse,
	FeaturedCardGrid,
	FeaturedCardWrapper,
	FeaturedDescription,
	FeaturedImage,
	FeaturedInfo,
	FeaturedReverseCardContent,
	FeaturedTag,
	FeaturedTitleWrapper,
	FeaturedTopic,
} from './featured.styles';

import {FeaturedCardArraySchema, type FeaturedCard} from '../../../validation/card-information';
import {CardSectionRenderer} from '../cardSectionRenderer';
import {CARD_TYPE} from '../../../constants/cardTypes';
import {transformInputToFeaturedCard} from '../../../utils/cardTransformers';
import {DATA_PATHS} from '../../../constants/paths';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

const FeaturedSection = () => (
	<Section>
		<CardSectionRenderer<FeaturedCard>
			title="Optimize your grassland"
			subtitle="featured solutions"
			cardType={CARD_TYPE.featured}
			dataPath={DATA_PATHS.FEATURED}
			schema={FeaturedCardArraySchema}
			transformInputToCard={transformInputToFeaturedCard}
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={FeaturedCardGrid}
			renderCard={(card, index, actions) => (
				<FeaturedCardWrapper key={index}>
					{index % 2 === 0 ? (
						<FeatureContentWrapper>
							<FeaturedImage src={card.image} alt={card.title} />
							<CardContent>
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
								<FeaturedDescription>{card.info}</FeaturedDescription>
								<FeaturedInfo>{card.description}</FeaturedInfo>
								<FeaturedTitleWrapper>
									{card.topics?.map((topic, i) => (
										<FeaturedTopic key={i}>{topic}</FeaturedTopic>
									))}
								</FeaturedTitleWrapper>
							</CardContent>
						</FeatureContentWrapper>
					) : (
						<FeatureContentWrapperReverse>
							<FeaturedReverseCardContent>
								<ActionWrapper>
									<FeaturedTitleWrapper>
										{card.label && <CardLabel>{card.label}</CardLabel>}
										<CardTitle>{card.title}</CardTitle>
										{card.tag && <FeaturedTag>{card.tag}</FeaturedTag>}
									</FeaturedTitleWrapper>
									<ButtonWrapper>
										<CTAButton as="button" onClick={actions.onEdit}>
											✏️
										</CTAButton>
										<CTAButton as="button" onClick={actions.onDelete}>
											🗑️
										</CTAButton>
									</ButtonWrapper>
								</ActionWrapper>
								<FeaturedDescription>{card.description}</FeaturedDescription>
								<FeaturedTitleWrapper>
									{card.topics?.map((topic, i) => (
										<FeaturedTopic key={i}>{topic}</FeaturedTopic>
									))}
								</FeaturedTitleWrapper>
							</FeaturedReverseCardContent>
							<FeaturedImage src={card.image} alt={card.title} />
						</FeatureContentWrapperReverse>
					)}
					<CardFooter>
						<a onClick={actions.onClick}>{card.linkText}</a>
					</CardFooter>
				</FeaturedCardWrapper>
			)}
		/>
	</Section>
);

export default FeaturedSection;
