import styled from 'styled-components';
import heroBackground from '../../assets/hero-background.jpeg';
import {getAuthUser} from '../../utils/auth';

const HeroContainer = styled.section`
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

const HeroTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	margin-bottom: 10px;
`;

const HeroDescription = styled.p`
	font-size: 1rem;
	font-weight: 300;
	max-width: 70%;
	line-height: 1.6;
	letter-spacing: 1.2px;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const HeroSection = () => {
	const {username} = getAuthUser();

	return (
		<HeroContainer>
			<HeroTitle>Welcome, {username}!</HeroTitle>
			<HeroDescription>
				Access all our solutions, products and knowledge in one place to enhance your crop nutrition decisions.
			</HeroDescription>
		</HeroContainer>
	);
};

export default HeroSection;
