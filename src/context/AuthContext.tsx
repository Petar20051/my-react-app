import {createContext, useContext, useEffect, useState} from 'react';
import {getAuthUser, logOut, saveAuthUser, saveUser} from '../utils/authStorage';
import type {LoginData, SignUpData, User} from '../components/organisms/Auth/Auth.static';

type AuthContextType = {
	user: User | null;
	authReady: boolean;
	login: (data: LoginData) => void;
	logout: () => void;
	signup: (data: SignUpData) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
	const [user, setUser] = useState<User | null>(null);
	const [authReady, setAuthReady] = useState(false);

	useEffect(() => {
		const storedUser = getAuthUser();
		if (storedUser) {
			setUser(storedUser);
		}
		setAuthReady(true);
	}, []);

	const login = (data: LoginData) => {
		const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];
		const found = users.find((u) => u.email === data.email && u.password === data.password);
		if (!found) return alert('Invalid credentials');
		saveAuthUser(found);
		setUser(found);
	};

	const signup = (data: SignUpData) => {
		saveUser(data);
		saveAuthUser(data);
		setUser(data);
	};

	const logout = () => {
		logOut();
		setUser(null);
	};

	return <AuthContext.Provider value={{user, authReady, login, logout, signup}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
