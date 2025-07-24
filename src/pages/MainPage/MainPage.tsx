import {Outlet} from 'react-router-dom';
import {useRef, useState} from 'react';
import {LayoutContainer, LayoutInner, MainContainer} from './MainPage.styles';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import GlobalModalRenderer from '../../components/organisms/Modals/GlobalModalRenderer';

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
