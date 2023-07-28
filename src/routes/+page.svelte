<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { auth } from '../lib/firebase';
	import { onMount } from 'svelte';
	import Ideas from '$lib/components/Ideas.svelte';

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
</script>

{#if isUser == false}
	<!-- content here -->
	<Landing />
{:else}
	<!-- The actual page -->
	<Ideas />

	<!-- else content here -->
{/if}
