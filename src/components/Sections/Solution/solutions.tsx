import {
	CTAButton,
	ButtonWrapper,
	ActionWrapper,
	CardLabel,
	CardTitle,
	CardInfo,
	CardFooter,
	CardContent,
	CardImage,
} from '../../../styles/sections.styles';

import {SolutionsCardGrid, SolutionsCard, SolutionTitleWrapper, SolutionCardDescription} from './solution.styles';
import {SolutionCardArraySchema, type SolutionCard} from '../../../validation/card-information';
import {CardSectionRenderer} from '../cardSectionRenderer';
import {CARD_TYPE} from '../../../constants/cardTypes';
import {transformInputToSolutionCard} from '../../../utils/cardTransformers';
import {DATA_PATHS} from '../../../constants/paths';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

const SolutionsSection = () => (
	<CardSectionRenderer<SolutionCard>
		subtitle="VaraPlus Solutions"
		title="Acccess out full range of solutions"
		cardType={CARD_TYPE.solutions}
		dataPath={DATA_PATHS.SOLUTIONS}
		schema={SolutionCardArraySchema}
		transformInputToCard={transformInputToSolutionCard}
		deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
		CardGridWrapper={SolutionsCardGrid}
		renderCard={(card, index, actions) => (
			<SolutionsCard key={index}>
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
			</SolutionsCard>
		)}
	/>
);

export default SolutionsSection;
