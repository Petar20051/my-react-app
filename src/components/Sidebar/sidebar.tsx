import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCalendar, faNewspaper, faPodcast, faRotateLeft, faRotateBack} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import ConfirmDialog from '../ConfirmDialog/confirmDialog';
import {NavItem, NavLink, NavList, SidebarNav, SidebarWrapper} from './sidebar.styles';
import type {SidebarProps} from '../../types/formProps';
import {useSidebarLogic} from '../../hooks/useSidebarLogic';

const Sidebar: React.FC<SidebarProps> = ({isOpen, closeSidebar, ignoreRef}) => {
	const {sidebarRef, showLogoutConfirm, handleLogout, confirmLogout, cancelLogout} = useSidebarLogic({isOpen, closeSidebar, ignoreRef});

	return (
		<SidebarWrapper open={isOpen} ref={sidebarRef}>
			<SidebarNav>
				<NavList>
					<NavItem>
						<Link to="/" onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faHome} />
								Home
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/content?type=events" onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faCalendar} />
								Events
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/content?type=news" onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faNewspaper} />
								News
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/content?type=podcasts" onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faPodcast} />
								Podcasts
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<NavLink href="#" onClick={handleLogout}>
							<FontAwesomeIcon icon={faRotateBack} />
							Logout
						</NavLink>
					</NavItem>
				</NavList>
			</SidebarNav>

			<Link
				to=""
				onClick={() => {
					closeSidebar();
					window.scrollTo({top: 0, behavior: 'smooth'});
				}}
			>
				<NavLink>
					<FontAwesomeIcon icon={faRotateLeft} />
					Restart the tour
				</NavLink>
			</Link>

			<ConfirmDialog
				message="Are you sure you want to log out?"
				visible={showLogoutConfirm}
				onConfirm={confirmLogout}
				onCancel={cancelLogout}
			/>
		</SidebarWrapper>
	);
};

export default Sidebar;
