export type User = {
	username: string;
	email: string;
	password: string;
};

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

export function authenticate({email, password}: {email: string; password: string}) {
	const storedUsers = getUsers();
	return storedUsers.find((u) => u.email === email && u.password === password) || null;
}

export function getAuthUser() {
	const authUser = localStorage.getItem(AUTH_KEY);
	return authUser ? JSON.parse(authUser) : null;
}

export function saveAuthUser(user: User): void {
	localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function logOut() {
	localStorage.removeItem(AUTH_KEY);
}
