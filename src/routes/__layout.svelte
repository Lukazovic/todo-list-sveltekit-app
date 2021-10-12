<div>
	<slot />
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-gray-900;
		@apply text-gray-200;
	}
</style>