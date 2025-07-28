import styled from 'styled-components';

export const FeaturedTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-items: center;
	flex-wrap: wrap;
`;

export const TopicsWrapper = styled(FeaturedTitleWrapper)`
	flex-wrap: wrap;
	padding-top: 10px;
`;
