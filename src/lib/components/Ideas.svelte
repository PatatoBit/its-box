<script lang="ts">
	import { auth, db } from '$lib/firebase';
	import { getDocs, collection, onSnapshot } from 'firebase/firestore';
	import { onDestroy, onMount } from 'svelte';
	import Card from './Card.svelte';
	import IdeaModal from './IdeaModal.svelte';
	import type { Unsubscribe } from 'firebase/auth';

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
		docId: string;
		title: string;
		description: string;
		upvote: number;
		upvoters: string[];
	}

	let ideas: Idea[] = [];

	let unsubscribe: Unsubscribe;

	onMount(async () => {
		const q = collection(db, 'ideas');
		unsubscribe = onSnapshot(q, (querySnapshot) => {
			ideas = [];
			querySnapshot.forEach((doc) => {
				ideas = [
					...ideas,
					{
						docId: doc.id,
						title: doc.data().title,
						description: doc.data().description,
						upvote: doc.data().upvote,
						upvoters: doc.data().upvoters
					}
				];
			});
			ideas.sort(compare);
		});
	});

	onDestroy(() => {
		unsubscribe();
	});

	let showModal: boolean = false;

	const compare = (a: Idea, b: Idea) => {
		return b.upvote - a.upvote;
	};
</script>

<div class="wrapper">
	<div class="nav">
		<button class="secondary" on:click={logOut}>Logout</button>
		<button on:click={() => (showModal = true)}>Suggest</button>
	</div>

	<IdeaModal bind:showModal />

	<div class="banner">
		<img src="/graphics/pigeon.svg" alt="man" id="banner1" />
		<img src="/graphics/sakura.svg" alt="flower" id="banner2" />

		<strong class="fancy title">Every idea matters</strong>
		<p>If you have an idea, you have to give it away. Otherwise, it dies.</p>
	</div>

	<div class="cards">
		{#if ideas.length > 0}
			{#each ideas as idea (idea.docId)}
				<Card
					title={idea.title}
					description={idea.description}
					upvote={idea.upvote}
					docId={idea.docId}
					upvoters={idea.upvoters}
				/>
			{/each}
		{:else}
			<!-- else content here -->

			<div>
				<h1>Hmm..</h1>
				<p>Seems like there are no ideas yet!</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	button {
		margin: 1rem 0;
	}

	.banner {
		width: 100%;
		height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		position: relative;

		overflow: hidden;

		margin-bottom: 1rem;

		strong,
		p {
			z-index: 10;
			text-align: center;
		}

		img {
			position: absolute;
			z-index: 0;
		}

		#banner1 {
			width: 5rem;
			top: 0;
			right: 0;
		}

		#banner2 {
			width: 10rem;
			bottom: 0;
			left: 0;
		}
	}

	@media only screen and (max-width: 800px) {
		img {
			opacity: 0.35;
		}
	}

	.cards {
		transition: all 0.2s ease-in-out;
		gap: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}

	.nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
