import type {User} from '../types/auth';

const USERS_KEY = 'users';
const AUTH_KEY = 'authUser';

export function getUsers(): User[] {
	const storedUsers = localStorage.getItem(USERS_KEY);
	return storedUsers ? JSON.parse(storedUsers) : [];
}

export function saveUser(user: User): void {
	const users = getUsers();
	localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
}

export function getAuthUser(): User | null {
	const authUser = localStorage.getItem(AUTH_KEY);
	return authUser ? JSON.parse(authUser) : null;
}

export function saveAuthUser(user: User): void {
	localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function logOut(): void {
	localStorage.removeItem(AUTH_KEY);
}
