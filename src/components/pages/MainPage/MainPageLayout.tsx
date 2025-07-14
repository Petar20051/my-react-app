import Navigation from '../../organisms/Navigation/navigation';
import Sidebar from '../../organisms/Sidebar/sidebar';
import {Outlet} from 'react-router-dom';
import {useRef, useState} from 'react';
import {LayoutContainer, LayoutInner, MainContainer} from './MainPageLayout.styles';
import GlobalModalRenderer from '../../organisms/Modals/GlobalModalRenderer';

const Layout = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const burgerMenuRef = useRef<HTMLDivElement>(null!);

	return (
		<LayoutContainer>
			<Navigation toggleSidebar={() => setSidebarOpen((prev) => !prev)} menuRef={burgerMenuRef} />
			<LayoutInner>
				<Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} ignoreRef={burgerMenuRef} />
				<MainContainer>
					<Outlet />
				</MainContainer>
			</LayoutInner>
			<GlobalModalRenderer />
		</LayoutContainer>
	);
};

export default Layout;
