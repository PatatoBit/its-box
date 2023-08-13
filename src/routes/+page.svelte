<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import Ideas from '$lib/components/Ideas.svelte';
	import { auth } from '$lib/firebase';
	import { onMount } from 'svelte';

	import { userStore } from '../store';
	import authStore from '$lib/authStore';

	let isUser: boolean = false;
	onMount(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// The user is signed in.
				isUser = true;
				console.log(`The user is signed in as ${user.displayName}`);

				userStore.set({
					username: user.displayName,
					email: user.email,
					uid: user.uid
				});
			} else {
				// The user is not signed in.
				isUser = false;
				console.log('The user is not signed in');
			}
		});
	});
</script>

{#if isUser == false}
	<!-- content here -->
	<Landing />
{:else}
	<!-- The actual page -->
	<Ideas />
{/if}
