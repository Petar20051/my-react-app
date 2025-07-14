import styled from 'styled-components';

export const Card = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-radius: 10px;
	border: 1px solid rgb(225, 222, 222);
	background-color: white;
	overflow: hidden;
	margin-bottom: 20px;
`;

export const EventsCard = styled(Card)`
	display: flex;
	flex-direction: column;
	min-height: 450px;
	height: auto;
	width: 100%;
`;

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

export const PodcastsCard = styled(Card)`
	display: flex;
	flex-direction: column;
	min-height: 230px;
	height: auto;
	width: 100%;
`;

export const SolutionsCard = styled(Card)`
	width: 100%;
	min-height: 430px;
	max-width: 100%;
	margin-bottom: 0;
`;

export const StyledCard = styled(Card)`
	border-radius: 20px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
	transition: all 0.3s ease;
	margin: 40px auto;
	max-width: 960px;

	&:hover {
		transform: translateY(-6px);
		box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
	}
`;

export const WideCard = styled(Card)`
	width: 600px;
`;

export const CompactCard = styled(Card)`
	width: 240px;
	padding: 12px;
	background: #f9f9f9;
	border: 1px solid #ccc;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const ReversedCard = styled.div`
	display: flex;
	flex-direction: column-reverse;
	background: #fff;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	margin: 10px 0;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
