import styled from 'styled-components';
import {Card, CardImage} from '../../../styles/sections.styles';

export const NewsCards = styled(Card)`
	width: 300px;
	max-width: 1000px;
	height: auto;

	@media (max-width: 1370px) {
		width: 47%;
	}

	@media (max-width: 670px) {
		width: 100%;
	}
`;

export const NewsImage = styled(CardImage)`
	height: 200px;
`;
