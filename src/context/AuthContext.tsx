import {createContext, useContext, useState} from 'react';
import type {User} from '../types/auth';
import {getAuthUser, logOut, saveAuthUser, saveUser} from '../utils/authStorage';
import type {LoginData, SignUpData} from '../validation/Auth';
import type {AuthContextType} from '../types/formProps';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
	const [user, setUser] = useState<User | null>(() => getAuthUser());
	const [authReady] = useState(true);

	const login = (data: LoginData) => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]') as User[];
		const foundUser = storedUsers.find((u) => u.email === data.email && u.password === data.password);

		if (foundUser) {
			saveAuthUser(foundUser);
			setUser(foundUser);
		} else {
			alert('Invalid email or password');
		}
	};

	const logout = () => {
		logOut();
		setUser(null);
	};

	const signup = (data: SignUpData) => {
		saveUser(data);
		saveAuthUser(data);
		setUser(data);
	};

	return <AuthContext.Provider value={{user, authReady, login, logout, signup}}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within AuthProvider');
	}
	return context;
};
