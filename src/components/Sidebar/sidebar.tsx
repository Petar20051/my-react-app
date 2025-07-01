import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCalendar, faNewspaper, faPodcast, faRotateLeft, faRotateBack} from '@fortawesome/free-solid-svg-icons';
import {useAuth} from '../../context/AuthContext';

const SidebarWrapper = styled.aside`
	height: calc(100% - 70px);
	background-color: white;
	border-right: 1px solid #e0e0e0;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const SidebarNav = styled.nav`
	width: 100%;
`;

const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: left;
`;

const NavItem = styled.li`
	gap: 10px;
`;

const NavLink = styled.a`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 30px;
	font-size: 16px;
	text-decoration: none;
	border-radius: 8px;
	justify-content: flex-start;

	&:hover {
		background-color: aliceblue;
		color: cyan;
		padding-right: 60px;
	}
`;

export default function Sidebar() {
	const {logout} = useAuth();
	return (
		<SidebarWrapper>
			<SidebarNav>
				<NavList>
					<NavItem>
						<NavLink href="#">
							<FontAwesomeIcon icon={faHome} />
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<FontAwesomeIcon icon={faCalendar} />
							Events
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<FontAwesomeIcon icon={faNewspaper} />
							News
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<FontAwesomeIcon icon={faPodcast} />
							Podcasts
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							href="#"
							onClick={(e) => {
								e.preventDefault();
								alert('Logging out...');
								logout();
							}}
						>
							<FontAwesomeIcon icon={faRotateBack} />
							Logout
						</NavLink>
					</NavItem>
				</NavList>
			</SidebarNav>
			<NavLink href="#">
				<FontAwesomeIcon icon={faRotateLeft} />
				Restart the tour
			</NavLink>
		</SidebarWrapper>
	);
}
