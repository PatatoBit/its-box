<script lang="ts">
	import { auth, db } from '../lib/firebase';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { userStore } from 'sveltefire';

	const provider = new GoogleAuthProvider();

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

	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
	<h1 class="fancy title">ITS Box</h1>

	<div>
		{#if isUser == false}
			<!-- content here -->
			<button on:click={googleLogin}>Login</button>
		{:else}
			<p>Logged in as {auth.currentUser?.displayName}</p>
			<p>{auth.currentUser?.email}</p>
			<button on:click={logOut}>Logout</button>
			<!-- else content here -->
		{/if}

		<button>Learn more</button>
	</div>
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
