import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import {AuthProvider} from './context/AuthContext';

import Layout from './layouts/MainPage/MainPageLayout';

import LoginForm from './layouts/Auth/LoginForm';
import SignupForm from './layouts/Auth/SignUpForm';
import NotFound from './layouts/NotFoundPage/NotFound';
import MainContent from './layouts/MainContent/MainContent';
import SingleContentPage from './layouts/SIngleSectionPage/SingleSectionPage';
import SingleCardPage from './layouts/SingleCardPage/singleCardPage';

import RouteGuard from './components/Auth/RouteGuard';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<AuthProvider>
				<Routes>
					<Route
						path="login"
						element={
							<RouteGuard allowIfAuthenticated={false} redirectTo="/">
								<LoginForm />
							</RouteGuard>
						}
					/>
					<Route
						path="signup"
						element={
							<RouteGuard allowIfAuthenticated={false} redirectTo="/">
								<SignupForm />
							</RouteGuard>
						}
					/>

					<Route
						path="/"
						element={
							<RouteGuard allowIfAuthenticated={true} redirectTo="/login">
								<Layout />
							</RouteGuard>
						}
					>
						<Route index element={<MainContent />} />
						<Route path="content" element={<SingleContentPage />} />
						<Route path="single" element={<SingleCardPage />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
