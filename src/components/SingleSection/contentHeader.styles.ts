import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	width: 100%;
	padding: 40px 70px;
	background: linear-gradient(135deg, #222294, #067287);
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		padding: 30px 20px;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	margin: 0;
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const Description = styled.p`
	font-size: 1.2rem;
	margin-top: 10px;
	color: #e1e1e1;
`;
