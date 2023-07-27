<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { auth, db } from '../lib/firebase';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { userStore } from 'sveltefire';

	let isUser: boolean = false;
	onMount(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// The user is signed in.
				isUser = true;
				console.log(`The user is signed in as ${user.displayName}`);
			} else {
				// The user is not signed in.
				isUser = false;
				console.log('The user is not signed in');
			}
		});
	});

	const logOut = () => {
		auth.signOut().then(
			() => {
				console.log('The user is signed out');
			},
			(error) => {
				console.log(error);
			}
		);
	};
</script>

<main>
	{#if isUser == false}
		<!-- content here -->
		<Landing />
	{:else}
		<!-- The actual page -->

		<p>Logged in as {auth.currentUser?.displayName}</p>
		<p>{auth.currentUser?.email}</p>
		<button on:click={logOut}>Logout</button>
		<!-- else content here -->
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		max-width: 60rem;
		height: 100vh;
		margin-inline: auto;
	}
</style>
