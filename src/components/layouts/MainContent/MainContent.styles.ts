import styled from 'styled-components';

export const MainWrapper = styled.div`
	width: 100%;
`;

export const SectionsWrapper = styled.div`
	padding: 40px 70px;
	display: flex;
	flex-direction: column;
	background-color: aliceblue;
	max-width: 1700px;
	margin: 0 auto;

	@media (max-width: 970px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}

	@media (max-width: 400px) {
		width: 90%;
		margin: 0 auto;
	}
`;
export const SectionSplitter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	gap: 3%;

	> section {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 1370px) {
		flex-direction: column;

		> section {
			width: 100%;
		}
	}
`;
