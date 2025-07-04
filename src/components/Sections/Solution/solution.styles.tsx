import styled from 'styled-components';
import {Card, CardDescription, CardGrid} from '../../../styles/sections.styles';

export const SolutionsCardGrid = styled(CardGrid)`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 20px;
	justify-content: space-between;

	@media (max-width: 1380px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

export const SolutionsCard = styled(Card)`
	width: 100%;
	min-height: 430px;
	max-width: 100%;
	margin-bottom: 0;
`;

export const SolutionTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 6px;
	align-items: center;
`;

export const SolutionCardDescription = styled(CardDescription)`
	height: 38%;
`;
