import {getUsers} from './authStorage';

export function authenticate({email, password}: {email: string; password: string}) {
	const storedUsers = getUsers();
	return storedUsers.find((u) => u.email === email && u.password === password) || null;
}
