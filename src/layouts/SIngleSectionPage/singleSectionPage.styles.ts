import styled from 'styled-components';

export const PageWrapper = styled.div`
	background-color: aliceblue;
	width: 100%;
	overflow-x: hidden;
	min-height: 850px;
`;

export const ContentWrapper = styled.div`
	padding: 40px 70px;
	max-width: 1700px;
	width: 100%;
	margin: 0 auto;
	min-height: 950px;

	@media (max-width: 970px) {
		padding: 20px;
	}
`;

export const StyledErrorMessage = styled.p`
	padding: 40px;
	color: red;
	font-size: 16px;
	text-align: center;
`;
