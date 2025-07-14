import styled from 'styled-components';

export const CardContent = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

export const FeaturedReverseCardContent = styled(CardContent)`
	padding: 0;
`;

export const PodcastCardContent = styled(CardContent)`
	padding: 0;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const StyledCardContent = styled(CardContent)`
	padding: 32px;
	gap: 20px;
	display: flex;
	flex-direction: column;
`;
