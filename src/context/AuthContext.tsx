import React, {createContext, useContext, useState} from 'react';
import {getAuthUser, authenticate, logOut as clearAuth, saveUser, type User, saveAuthUser} from '../utils/auth';

type AuthContextType = {
	user: User | null;
	login: (email: string, password: string) => boolean;
	signup: (user: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const [user, setUser] = useState<User | null>(getAuthUser());

	const login = (email: string, password: string): boolean => {
		const found = authenticate({email, password});
		if (found) {
			setUser(found);
			saveAuthUser(found);
			return true;
		}
		return false;
	};

	const signup = (newUser: User) => {
		saveUser(newUser);
		saveAuthUser(newUser);
		setUser(newUser);
	};

	const logout = () => {
		clearAuth();
		setUser(null);
	};

	return <AuthContext.Provider value={{user, login, signup, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
