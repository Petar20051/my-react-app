import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider, useAuth} from './context/AuthContext';
import './styles/global.css';
import {CardProvider} from './context/CardContext';
import {routes} from './constants/routes';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignUpForm';
import Layout from './pages/MainPage/MainPage';

import NotFound from './pages/NotFoundPage/NotFoundPage';
import MainContent from './layouts/MainContent/MainContent';
import SingleContentPage from './layouts/SIngleSectionPage/SingleSectionPage';
import SingleCardPage from './layouts/SingleCardPage/singleCardPage';

function AppRoutes() {
	const {user, authReady} = useAuth();

	if (!authReady) return <div>Loading...</div>;

	if (!user) {
		return (
			<Routes>
				<Route path={routes.login} element={<LoginForm />} />
				<Route path={routes.signup} element={<SignupForm />} />
				<Route path={routes.not_found} element={<Navigate to={routes.login} replace />} />
			</Routes>
		);
	}

	return (
		<CardProvider>
			<Routes>
				<Route path={routes.home} element={<Layout />}>
					<Route index element={<MainContent />} />
					<Route path={routes.content.slice(1)} element={<SingleContentPage />} />
					<Route path={routes.single.slice(1)} element={<SingleCardPage />} />;
				</Route>
				<Route path={routes.not_found} element={<NotFound />} />
			</Routes>
		</CardProvider>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</BrowserRouter>
	);
}
