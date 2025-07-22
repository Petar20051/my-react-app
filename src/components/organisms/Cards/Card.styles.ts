import styled from 'styled-components';

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
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
export const ActionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;

export const ActionWrapperReverse = styled(ActionWrapper)`
	padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding-right: 13px;
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

export const FeaturedCardWrapper = styled.article`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 16px;
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

export const SolutionTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 6px;
	align-items: center;
`;
