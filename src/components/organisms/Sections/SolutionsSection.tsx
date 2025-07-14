import {CARD_TYPE} from '../../../constants/cardTypes';
import {SolutionsCardGrid} from '../../atoms/Layout';
import {CardSectionRenderer} from './SectionRenderer';

import type {SolutionCard as SolutionCardType} from '../../../validation/card-information';
import SolutionCard from '../../molecules/Cards/SolutionCard';
import {useCardLogic} from '../../molecules/Cards/Card.logic';
import {DEFAULT_DELETE_CONFIRM_MESSAGE} from '../../../constants/defaults';

type Props = {
	card: SolutionCardType;
	index: number;
};

const WrappedSolutionCard: React.FC<Props> = ({card, index}) => {
	const {handleEditCard, handleDeleteCard, handleClickCard} = useCardLogic(CARD_TYPE.solutions);

	return (
		<SolutionCard
			card={card}
			index={index}
			actions={{
				onEdit: () => handleEditCard(index),
				onDelete: () => handleDeleteCard(index),
				onClick: () => handleClickCard(index, card),
			}}
		/>
	);
};

export default function SolutionsSection() {
	return (
		<CardSectionRenderer
			cardType={CARD_TYPE.solutions}
			title="Access our full range of solutions"
			subtitle="Varaplus Solutions"
			deleteConfirmMessage={DEFAULT_DELETE_CONFIRM_MESSAGE}
			CardGridWrapper={SolutionsCardGrid}
			CardComponent={WrappedSolutionCard}
		/>
	);
}
