<script lang="ts">
	import CardModal from './CardModal.svelte';

	export let title: string;
	export let description: string;
	export let upvote: number;

	let showModal: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={() => (showModal = true)}>
	<div>
		<h3>{title}</h3>
	</div>

	<div class="para">
		<p class="lineclamp">{description}</p>
	</div>

	<div class="upvote-btn">
		<label for="upvote">{upvote}</label>
		<button class="upvote" id="upvote">👍</button>
	</div>
</div>

<CardModal {title} {description} {upvote} bind:showModal />

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
		gap: 0.2rem;
		overflow: hidden;
		flex: 1;
		cursor: pointer;

		.upvote-btn {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 0.4rem;
		}

		&:hover {
			transition-duration: 0.2s;
			transform: rotate(1deg) scale(1.14) !important;
		}

		div {
			flex: 1;
		}

		div.para {
			flex: 2;
		}
	}

	.lineclamp {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
