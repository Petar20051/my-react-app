import styled from 'styled-components';
import {ActionWrapper, CardContent, CardImage, CardLabel} from '../../../styles/sections.styles';

export const FeaturedCardGrid = styled.div`
	display: grid;
	grid-template-columns: 67% 30%;
	gap: 3%;

	@media (max-width: 1270px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 550px) {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;

export const FeaturedCardWrapper = styled.article`
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const FeaturedImage = styled(CardImage)`
	height: 100%;
	border-radius: 10px;
`;

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

export const FeaturedTag = styled(CardLabel)`
	background-color: lightblue;
	color: blue;
`;

export const FeaturedTopic = styled(CardLabel)`
	padding: 5px 20px;
	background-color: white;
	color: gray;
	border-radius: 30px;
	font-size: 14px;
`;

export const FeaturedInfo = styled.div`
	word-wrap: normal;
	opacity: 0.6;
	margin-bottom: 10px;
`;

export const FeaturedDescription = styled.div`
	height: 25px;
	letter-spacing: 1px;
	word-wrap: normal;
	@media (max-width: 450px) {
		flex: 1;
	}
`;

export const FeatureContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
	padding: 16px;
	min-height: 200px;

	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
`;

export const FeatureContentWrapperReverse = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	padding: 16px;
	gap: 10px;
	min-height: 200px;
	flex: 1;
	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

export const ActionWrapperReverse = styled(ActionWrapper)`
	padding: 0 20px;
`;

export const FeaturedReverseCardContent = styled(CardContent)`
	padding: 0;
`;
