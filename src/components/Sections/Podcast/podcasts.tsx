import {
	CardFooter,
	CardDescription,
	CardInfo,
	CardDate,
	ButtonWrapper,
	CTAButton,
	CardTitle,
	ActionWrapper,
} from '../../../styles/sections.styles';

import {PodcastCardArraySchema, type PodcastCard} from '../../../validation/card-information';
import {PodcastsCard, PodcastCardContent, PodcastCardGrid, PodcastContentWrapper, PodcastImage} from './podcast.styles';
import {CardSectionRenderer} from '../cardSectionRenderer';
import {CARD_TYPE} from '../../../constants/cardTypes';
import {transformInputToPodcastCard} from '../../../utils/cardTransformers';
import {DATA_PATHS} from '../../../constants/paths';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

const PodcastsSection = () => (
	<CardSectionRenderer<PodcastCard>
		title="Podcasts"
		headerBtn="See all podcasts"
		cardType={CARD_TYPE.podcasts}
		dataPath={DATA_PATHS.PODCASTS}
		schema={PodcastCardArraySchema}
		transformInputToCard={transformInputToPodcastCard}
		deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
		CardGridWrapper={PodcastCardGrid}
		renderCard={(card, index, actions) => {
			const hasImage = !!card.image;

			return (
				<PodcastsCard key={index}>
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
						<a onClick={actions.onClick}>{card.linkText}</a>
					</CardFooter>
				</PodcastsCard>
			);
		}}
	/>
);

export default PodcastsSection;
