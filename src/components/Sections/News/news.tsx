import {
	CardFooter,
	CardTitle,
	CardDescription,
	CardInfo,
	CardContent,
	CardDate,
	ButtonWrapper,
	CTAButton,
	ActionWrapper,
	CardGrid,
} from '../../../styles/sections.styles';

import {NewsCards, NewsImage} from './news.styles';
import {NewsCardArraySchema, type NewsCard} from '../../../validation/card-information';
import {CardSectionRenderer} from '../cardSectionRenderer';
import {CARD_TYPE} from '../../../constants/cardTypes';
import {transformInputToNewsCard} from '../../../utils/cardTransformers';
import {DATA_PATHS} from '../../../constants/paths';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

const NewsSection = () => (
	<CardSectionRenderer<NewsCard>
		title="News"
		headerBtn="See all news"
		cardType={CARD_TYPE.news}
		dataPath={DATA_PATHS.NEWS}
		schema={NewsCardArraySchema}
		transformInputToCard={transformInputToNewsCard}
		deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
		CardGridWrapper={CardGrid}
		renderCard={(card, index, actions) => (
			<NewsCards key={index}>
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
					<a onClick={actions.onClick}>{card.linkText}</a>
				</CardFooter>
			</NewsCards>
		)}
	/>
);

export default NewsSection;
