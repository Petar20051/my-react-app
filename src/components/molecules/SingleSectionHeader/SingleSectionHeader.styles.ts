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
