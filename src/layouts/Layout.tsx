import styled from 'styled-components';
import Navigation from '../components/Navigation/navigation';
import Sidebar from '../components/Sidebar/sidebar';
import {Outlet} from 'react-router-dom';

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const LayoutInner = styled.div`
	display: grid;
	grid-template-columns: 15% 1fr;
	width: 100%;
	padding: 0;
	margin: 0;
	margin-top: 60px;
	min-height: calc(100% - 70px);
`;

const Layout = () => {
	return (
		<LayoutContainer>
			<Navigation />
			<LayoutInner>
				<Sidebar />
				<div style={{width: '100%'}}>
					<Outlet />
				</div>
			</LayoutInner>
		</LayoutContainer>
	);
};

export default Layout;
