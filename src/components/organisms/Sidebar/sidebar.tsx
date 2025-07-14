import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCalendar, faNewspaper, faPodcast, faRotateLeft, faRotateBack} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import ConfirmDialog from '../../molecules/ConfirmDialog/confirmDialog';
import {NavItem, NavLink, NavList, SidebarNav, SidebarWrapper} from './sidebar.styles';
import {useSidebarLogic} from './Sidebar.logic';
import {CONTENT_TYPES, ROUTES} from '../../../constants/routes';

export type SidebarProps = {
	isOpen: boolean;
	closeSidebar: () => void;
	ignoreRef?: React.RefObject<HTMLElement>;
};

const Sidebar: React.FC<SidebarProps> = ({isOpen, closeSidebar, ignoreRef}) => {
	const {sidebarRef, showLogoutConfirm, handleLogout, confirmLogout, cancelLogout} = useSidebarLogic({
		isOpen,
		closeSidebar,
		ignoreRef,
	});

	return (
		<SidebarWrapper open={isOpen} ref={sidebarRef}>
			<SidebarNav>
				<NavList>
					<NavItem>
						<Link to={ROUTES.HOME} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faHome} />
								Home
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${ROUTES.CONTENT}?type=${CONTENT_TYPES.EVENTS}`} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faCalendar} />
								Events
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${ROUTES.CONTENT}?type=${CONTENT_TYPES.NEWS}`} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faNewspaper} />
								News
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${ROUTES.CONTENT}?type=${CONTENT_TYPES.PODCASTS}`} onClick={closeSidebar}>
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
