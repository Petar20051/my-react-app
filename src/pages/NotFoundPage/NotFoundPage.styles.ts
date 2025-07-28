import styled from 'styled-components';

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

export const NotFoundContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 40px 20px;
	gap: 20px;
`;
