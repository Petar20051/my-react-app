import styled from 'styled-components';

export const NavigationWrapper = styled.header`
	width: 100%;
	height: 70px;
	background-color: darkblue;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	color: white;
	z-index: 1000;

	@media (max-width: 500px) {
		flex-wrap: wrap;
		height: 80px;
		justify-content: center;
	}

	@media (max-width: 350px) {
		height: 100px;
	}
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 20px;
`;

export const Logo = styled.img`
	height: 40px;
`;

export const CompanyTitle = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

export const MenuIcon = styled.div`
	display: none;

	@media (max-width: 970px) {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		gap: 5px;
		margin-right: 10px;

		span {
			width: 25px;
			height: 3px;
			background: white;
			display: block;
		}
	}
`;

export const RightSection = styled.nav`
	display: flex;
	align-items: center;
	gap: 20px;
	padding-right: 30px;
`;

export const LocationSelector = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	background-color: #09144a;
	border-radius: 5px;
	padding: 3px 5px;
`;

export const LocationOption = styled.div`
	display: flex;
	flex-direction: column;
	color: white;

	label {
		font-size: 10px;
	}

	select {
		border: none;
		font-size: 12px;
		color: white;
		background-color: transparent;
	}
`;

export const NavigationIcons = styled.ul`
	list-style: none;
	display: flex;
	gap: 20px;
	margin: 0;
	padding: 0;

	li a {
		color: white;
		font-size: 24px;

		&:hover {
			color: #add8e6;
		}
	}
`;
