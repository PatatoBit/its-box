import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from './firebase';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: User;
	firebaseControlled: boolean;
}>({
	isLoggedIn: false,
	firebaseControlled: false
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};

auth.onAuthStateChanged((user) => {
	authStore.set({
		isLoggedIn: user !== null,
		user: user as User,
		firebaseControlled: true
	});
});
