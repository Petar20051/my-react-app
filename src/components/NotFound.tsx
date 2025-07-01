import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
	padding: 60px 20px;
`;

const NotFoundImage = styled.div`
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

const Message = styled.h2`
	margin-top: 30px;
	font-size: 24px;
	color: #333;
`;

const HomeLink = styled.a`
	display: inline-block;
	margin-top: 20px;
	text-decoration: none;
	color: white;
	background-color: #007bff;
	padding: 10px 20px;
	border-radius: 4px;

	&:hover {
		background-color: #0056b3;
	}
`;

export default function NotFound() {
	return (
		<Wrapper>
			<NotFoundImage />
			<Message>Oops! That page doesn’t exist.</Message>
			<HomeLink href="/">Return to Homepage</HomeLink>
		</Wrapper>
	);
}
