<script lang="ts">
	import { signInWithPopup } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();
	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
</script>

<main>
	<img src="/cox.png" alt="Cat in a box" />
	<h1 class="fancy title">The Box</h1>
	<div>
		<button on:click={googleLogin}>Login</button>
		<a href="/about">
			<button class="secondary"> About </button>
		</a>
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 20rem;
		height: auto;
	}

	.title {
		font-size: 3rem;
		margin-block: 1rem;
	}

	a {
		text-decoration: none;
		color: #1e1e1e;
	}
</style>
