import Navigation from '../../components/Navigation/navigation';
import Sidebar from '../../components/Sidebar/sidebar';
import {Outlet} from 'react-router-dom';
import {useRef, useState} from 'react';
import {LayoutContainer, LayoutInner, MainContainer} from './MainPageLayout.styles';

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
		</LayoutContainer>
	);
};

export default Layout;
