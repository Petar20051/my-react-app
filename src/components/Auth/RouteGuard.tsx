import {useEffect} from 'react';
import {useNavigate, Navigate} from 'react-router-dom';
import type {RouteGuardProps} from '../../types/formProps';
import {useAuth} from '../../context/AuthContext';

export default function RouteGuard({children, allowIfAuthenticated, redirectTo}: RouteGuardProps) {
	const {user, authReady} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!authReady) return;

		if (user && !allowIfAuthenticated) {
			navigate(redirectTo, {replace: true});
		}
	}, [user, allowIfAuthenticated, navigate, redirectTo, authReady]);

	if (!authReady) return null;

	if (!user && allowIfAuthenticated) {
		return <Navigate to={redirectTo} replace />;
	}

	return (allowIfAuthenticated && user) || (!allowIfAuthenticated && !user) ? children : null;
}
