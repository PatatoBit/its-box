<script lang="ts">
	import { auth } from '$lib/firebase';
	import { upVote } from '$lib/upvote';

	export let showModal: boolean; // boolean

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	export let title: string; // string
	export let description: string;
	export let upvote: number;
	export let upvoters: string[];
	export let docId: string;

	export let userId: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal" on:click|stopPropagation>
		<div class="modal-text">
			<h2>{title}</h2>
			<hr />
			<p>{description}</p>
		</div>

		<div class="upvote-btn">
			<label for="upvote">{upvote}</label>
			<button
				on:click={async () => await upVote(docId, userId)}
				class:activated={upvoters.includes(userId)}
				class="upvote"
				id="upvote">👍</button
			>
		</div>
	</div>
</dialog>

<style lang="scss">
	.modal {
		width: 100%;
		height: 100%;

		box-sizing: border-box;

		justify-content: space-between;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.modal-text {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		hr {
			border: none;
			border-bottom: 2px dashed $primary;
		}
	}

	.upvote-btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		justify-content: flex-end;

		.activated {
			background-color: $primary;
		}
	}

	dialog {
		width: 60em;
		height: 45em;
		border-radius: 0.2em;
		border: none;

		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		position: fixed;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
