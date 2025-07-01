import type {ReactNode} from 'react';
import {useAuth} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

type ProtectedRouteProps = {
	children: ReactNode;
};

export default function ReverseProtectedRoute({children}: ProtectedRouteProps) {
	const {user} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/', {replace: true});
		}
	}, [user, navigate]);

	return !user ? children : null;
}
