import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignUpForm';
import NotFound from './components/NotFound';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Layout from './layouts/Layout';
import MainContent from './components/Main';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ReverseProtectedRoute from './components/Auth/ReverseProtectedRoute';

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route
						path="login"
						element={
							<ReverseProtectedRoute>
								<LoginForm />
							</ReverseProtectedRoute>
						}
					/>
					<Route
						path="signup"
						element={
							<ReverseProtectedRoute>
								<SignupForm />
							</ReverseProtectedRoute>
						}
					/>

					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Layout />
							</ProtectedRoute>
						}
					>
						<Route index element={<MainContent />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
