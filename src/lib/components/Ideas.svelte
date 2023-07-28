<script lang="ts">
	import { auth, db } from '$lib/firebase';
	import { getDocs, collection, onSnapshot } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import IdeaModal from './IdeaModal.svelte';

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

	interface Idea {
		title: string;
		description: string;
	}

	let ideas: Idea[] = [];

	onMount(async () => {
		const q = collection(db, 'ideas');
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			ideas = [];
			querySnapshot.forEach((doc) => {
				ideas = [...ideas, doc.data() as Idea];
			});
			console.log('Current data ', ideas.join(', '));
		});
	});

	let showModal: boolean = false;
</script>

<div class="wrapper">
	<div class="nav">
		<button on:click={logOut}>Logout</button>
		<button on:click={() => (showModal = true)}>Suggest</button>
	</div>

	<IdeaModal bind:showModal />

	<div class="cards">
		{#each ideas as idea}
			<Card title={idea.title} description={idea.description} />
		{/each}
	</div>
</div>

<style lang="scss">
	button {
		margin: 1rem 0;
	}

	.cards {
		gap: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
