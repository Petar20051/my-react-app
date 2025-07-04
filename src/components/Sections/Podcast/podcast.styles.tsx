import styled from 'styled-components';
import {Card, CardContent, CardImage} from '../../../styles/sections.styles';

export const PodcastCardGrid = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PodcastImage = styled(CardImage)`
	border-radius: 10px;
`;

export const PodcastContentWrapper = styled.div<{hasImage?: boolean}>`
	display: grid;
	grid-template-columns: ${({hasImage}) => (hasImage ? '15% 85%' : '100%')};
	align-items: center;
	gap: 16px;
	padding: 14px;
	box-sizing: border-box;
	flex-grow: 1;
	overflow: hidden;

	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
	}
`;

export const PodcastsCard = styled(Card)`
	display: flex;
	flex-direction: column;
	min-height: 230px;
	height: auto;
	width: 100%;
`;

export const PodcastCardContent = styled(CardContent)`
	padding: 0;
	display: flex;
	flex-direction: column;
	flex: 1;
`;
