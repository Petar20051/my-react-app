import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider, useAuth} from './context/AuthContext';
import Layout from './components/pages/MainPage/MainPageLayout';
import NotFound from './components/pages/NotFoundPage/NotFound';
import './styles/global.css';
import LoginForm from './components/pages/Auth/LoginForm';
import SignupForm from './components/pages/Auth/SignUpForm';
import MainContent from './components/layouts/MainContent/MainContent';
import SingleContentPage from './components/layouts/SIngleSectionPage/SingleSectionPage';
import SingleCardPage from './components/layouts/SingleCardPage/singleCardPage';
import {CardProvider} from './context/CardContext';
import {ROUTES} from './constants/routes';

function AppRoutes() {
	const {user, authReady} = useAuth();

	if (!authReady) return <div>Loading...</div>;

	if (!user) {
		return (
			<Routes>
				<Route path={ROUTES.LOGIN} element={<LoginForm />} />
				<Route path={ROUTES.SIGNUP} element={<SignupForm />} />
				<Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.LOGIN} replace />} />
			</Routes>
		);
	}

	return (
		<CardProvider>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<MainContent />} />
					<Route path={ROUTES.CONTENT.slice(1)} element={<SingleContentPage />} />
					<Route path={ROUTES.SINGLE.slice(1)} element={<SingleCardPage />} />
				</Route>
				<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
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
