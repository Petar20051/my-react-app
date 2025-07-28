import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCalendar, faNewspaper, faPodcast, faRotateLeft, faRotateBack} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {NavItem, NavLink, NavList, SidebarNav, SidebarWrapper} from './Sidebar.styles';
import {useSidebarLogic} from './Sidebar.logic';
import {content_types, routes} from '../../../constants/routes';

export type SidebarProps = {
	isOpen: boolean;
	closeSidebar: () => void;
	ignoreRef?: React.RefObject<HTMLElement>;
};

const Sidebar: React.FC<SidebarProps> = ({isOpen, closeSidebar, ignoreRef}) => {
	const {sidebarRef, handleLogout} = useSidebarLogic({
		isOpen,
		closeSidebar,
		ignoreRef,
	});

	return (
		<SidebarWrapper open={isOpen} ref={sidebarRef}>
			<SidebarNav>
				<NavList>
					<NavItem>
						<Link to={routes.home} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faHome} />
								Home
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${routes.content}?type=${content_types.events}`} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faCalendar} />
								Events
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${routes.content}?type=${content_types.news}`} onClick={closeSidebar}>
							<NavLink>
								<FontAwesomeIcon icon={faNewspaper} />
								News
							</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={`${routes.content}?type=${content_types.podcasts}`} onClick={closeSidebar}>
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
		</SidebarWrapper>
	);
};

export default Sidebar;
