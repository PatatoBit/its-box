import { writable } from 'svelte/store';

export const userStore = writable<{ username: string | null; email: string | null; uid: string }>(
	undefined
);
