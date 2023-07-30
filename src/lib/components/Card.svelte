<script lang="ts">
	import { onMount } from 'svelte';
	import { userStore } from '../../store';
	import { upVote } from './../upvote';
	import CardModal from './CardModal.svelte';
	import { db } from '$lib/firebase';

	export let title: string;
	export let description: string;
	export let upvote: number;
	export let upvoters: string[];
	export let docId: string;

	let userId: string = '';

	let showModal: boolean = false;

	userStore.subscribe((prev) => (userId = prev.uid));

	console.log(userId);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card">
	<div class="card-text" on:click={() => (showModal = true)}>
		<h3>{title}</h3>
		<p class="lineclamp">{description}</p>
	</div>

	<div class="upvote-btn">
		<label for="upvote">{upvote}</label>
		<button
			on:click={async () => await upVote(docId, userId)}
			class="upvote"
			class:activated={upvoters.includes(userId)}
			id="upvote">👍</button
		>
	</div>
</div>

<CardModal {title} {description} {upvote} {upvoters} {docId} {userId} bind:showModal />

<style lang="scss">
	.card {
		min-width: 15rem;
		height: 10rem;
		padding: 1rem;
		color: #72420e;
		background-color: #fff4ea;
		border: 1px solid #c19f7b;
		border-radius: 0.75rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.2rem;
		overflow: hidden;
		flex: 1;
		cursor: pointer;

		transition: all 0.2s ease-in-out;

		.card-text {
			display: flex;
			flex-direction: column;
			gap: 0.35rem;
		}

		.upvote-btn {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 0.4rem;
		}

		.upvote {
			position: relative;
			z-index: 1;
		}
		.activated {
			background-color: #72420e;
		}

		&:hover {
			transition-duration: 0.2s;
			transform: scale(1.04) !important;
		}
	}

	.lineclamp {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
