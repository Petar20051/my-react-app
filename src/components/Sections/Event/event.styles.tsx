import styled from 'styled-components';
import {Card, CardGrid, CardImage} from '../../../styles/sections.styles';

export const EventsCard = styled(Card)`
	display: flex;
	flex-direction: column;
	min-height: 450px;
	height: auto;
	width: 100%;
`;

export const EventsCardGrid = styled(CardGrid)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;

	@media (max-width: 970px) {
		grid-template-columns: 1fr;
	}
`;

export const EventsImage = styled(CardImage)`
	height: 225px;
`;
