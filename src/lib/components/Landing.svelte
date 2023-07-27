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
	<h1 class="fancy title">ITS Box</h1>
	<button on:click={googleLogin}>Login</button>
</main>
