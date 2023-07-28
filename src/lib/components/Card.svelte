<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="card">
	<h2>{title}</h2>
	<p>{description}</p>
</div>

<style lang="scss">
	.card {
		min-width: 10rem;
		max-width: 20rem;
		padding: 0.8rem;
		background-color: #e4e4e4;
		border: 2px solid #a3a3a3;
		border-radius: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		overflow: hidden;
		flex: 1;
	}
</style>
