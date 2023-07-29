<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="card">
	<h3>{title}</h3>
	<p class="lineclamp">{description}</p>
</div>

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

		&:hover {
			transition-duration: 0.2s;
			transform: rotate(1deg) scale(1.14) !important;
		}
	}

	.lineclamp {
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
