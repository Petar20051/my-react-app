import styled from 'styled-components';

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 0;
	background-color: aliceblue;
`;

export const LayoutInner = styled.div`
	display: grid;
	grid-template-columns: 15% 1fr;
	width: 100%;
	padding: 0;
	margin: 0;
	margin-top: 60px;

	@media (max-width: 970px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 400px) {
		display: flex;
		margin: 0 auto;
		margin-top: 70px;
	}
`;

export const MainContainer = styled.div`
	width: 100%;
`;
