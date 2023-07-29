<script lang="ts">
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
	import { userStore } from '../../store';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();

	let title: string;
	let description: string;
	let anonymous: boolean = true;

	const submitForm = async () => {
		const docRef = await addDoc(collection(db, 'ideas'), {
			title,
			description,
			anonymous,
			upvote: 1,
			upvoters: [$userStore.uid]
		});

		console.log('Document written with ID: ', docRef.id);
		title = '';
		description = '';
		anonymous = true;
		dialog.close();
	};
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="form" on:click|stopPropagation>
		<h2>Suggest an idea</h2>
		<input bind:value={title} type="text" placeholder="Name of your idea" required />
		<textarea
			bind:value={description}
			name="description"
			id="description"
			cols="30"
			rows="10"
			style="resize: none"
			required
			placeholder="A short description of your idea"
		/>

		<div>
			<input bind:value={anonymous} type="checkbox" id="scales" name="Anonymous" />
			<label for="Anonymous">Anonymous</label>
		</div>
		<button on:click={submitForm}>Submit</button>
	</div>
</dialog>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		padding: 1rem;

		input {
			padding: 0.5rem;
			border-radius: 0.25rem;
			order: 1px solid #a3a3a3;
		}

		textarea {
			padding: 0.5rem;
			border-radius: 0.25rem;
			border: 1px solid #a3a3a3;
		}
	}

	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin: 1rem;

		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
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
