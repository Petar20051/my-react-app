import styled from 'styled-components';

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

export const CardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const EventsCardGrid = styled(CardGrid)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;

	@media (max-width: 970px) {
		grid-template-columns: 1fr;
	}
`;

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

export const PodcastCardGrid = styled.div`
	display: flex;
	flex-direction: column;
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
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	height: 100%;
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

export const FeaturedTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-items: center;
	flex-wrap: wrap;
`;

export const SolutionTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 6px;
	align-items: center;
`;

export const SectionTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const TopicsWrapper = styled(FeaturedTitleWrapper)`
	flex-wrap: wrap;
	padding-top: 10px;
`;

export const HeroContainer = styled.section`
	width: 100%;
	height: 200px;
	background-image: url('/assets/hero-background.jpeg');
	background-color: green;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 70px;

	@media (max-width: 768px) {
		padding: 0 20px;
		height: auto;
	}
`;

export const Section = styled.section`
	margin-bottom: 60px;
	width: 100%;

	@media (max-width: 400px) {
		width: auto;
	}
`;

export const Wrapper = styled.div`
	text-align: center;
	padding: 60px 20px;
`;
