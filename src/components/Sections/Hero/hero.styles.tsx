import styled from 'styled-components';
import heroBackground from '/Users/petarpetrov/my-react-app/src/assets/hero-background.jpeg';

export const HeroContainer = styled.section`
	width: 100%;
	height: 200px;
	background-image: url(${heroBackground});
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

export const HeroTitle = styled.h1`
	margin-bottom: 10px;
`;

export const HeroDescription = styled.p`
	font-size: 16px;
	font-weight: 300;
	max-width: 70%;
	line-height: 1.6;
	letter-spacing: 1.2px;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
