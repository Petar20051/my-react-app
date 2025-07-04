import styled from 'styled-components';

export const SidebarWrapper = styled.aside<{open: boolean}>`
	background-color: white;
	position: fixed;
	z-index: 2;
	padding: 10px 0px;
	left: ${({open}) => (open ? '0' : '-260px')};
	width: 260px;
	height: 100%;
	transition: left 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 971px) {
		position: static;
		left: 0;
		transition: none;
		width: 100%;
	}
`;

export const SidebarNav = styled.nav`
	padding-top: 20px;
`;

export const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 30px;
	font-size: 16px;
	text-decoration: none;
	border-radius: 8px;
	padding-left: 50px;

	&:hover {
		color: cyan;
	}
`;
