<script>
	import Header from '../components/Header.svelte';
	import Container from '../components/Container.svelte';
</script>

<Header />
<Container>
	<slot />
</Container>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-gray-900;
		@apply text-gray-200;
	}
</style>
