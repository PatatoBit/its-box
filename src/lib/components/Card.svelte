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
		<label for="upvote"><strong>{upvote}<strong /></strong></label>
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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		gap: 0.2rem;
		padding: 1rem;

		position: relative;

		min-width: 15rem;
		height: 10rem;

		color: $text;
		background-color: #d9e8fc;
		border: 1px solid $primary;
		border-radius: 0.75rem;
		overflow: hidden;
		cursor: pointer;

		transition: all 0.2s ease-in-out;

		.card-text {
			display: flex;
			flex-direction: column;
			gap: 0.35rem;
		}

		.upvote-btn {
			position: absolute;
			bottom: 0.5rem;
			right: 0.5rem;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 0.4rem;
			background-color: #d9e8fc;
		}

		.upvote {
			position: relative;
			z-index: 1;
		}
		.activated {
			background-color: $primary;
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
