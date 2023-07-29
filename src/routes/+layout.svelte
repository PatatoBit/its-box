<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/globals.scss';
</script>

<slot />

<!-- HTML Meta Tags -->
<title>ITS Box</title>
<meta
	name="description"
	content="An online tool for sharing your opinion for the student council of Intertots Trillingual School."
/>

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://its-box.vercel.app" />
<meta property="og:type" content="website" />
<meta property="og:title" content="ITS Box" />
<meta
	property="og:description"
	content="An online tool for sharing your opinion for the student council of Intertots Trillingual School."
/>
<meta property="og:image" content="/catbox.png" />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="its-box.vercel.app" />
<meta property="twitter:url" content="https://its-box.vercel.app" />
<meta name="twitter:title" content="ITS Box" />
<meta
	name="twitter:description"
	content="An online tool for sharing your opinion for the student council of Intertots Trillingual School."
/>
<meta name="twitter:image" content="/catbox.png" />

<!-- Meta Tags Generated via https://www.opengraph.xyz -->

<Footer />
