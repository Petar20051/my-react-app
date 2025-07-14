import styled from 'styled-components';

export const CardImage = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
`;

export const NotFoundImage = styled.div`
	width: 100%;
	max-width: 500px;
	height: 350px;
	margin: 0 auto;
	background-image: url('https://httpstatusdogs.com/img/404.jpg');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 8px;
`;

export const EventsImage = styled(CardImage)`
	height: 225px;
`;

export const FeaturedImage = styled(CardImage)`
	height: 100%;
	border-radius: 10px;
`;

export const NewsImage = styled(CardImage)`
	height: 200px;
`;

export const PodcastImage = styled(CardImage)`
	border-radius: 10px;
`;

export const StyledCardImage = styled(CardImage)`
	height: 380px;
	object-fit: cover;
	border-radius: 20px 20px 0 0;
`;
