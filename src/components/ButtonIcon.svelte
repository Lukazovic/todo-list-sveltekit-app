<script>
	export let type = 'button',
		variant = 'primary',
		disabled = false,
		click;
</script>

{#if variant === 'danger'}
	<button
		class="bg-red-800 p-2 font-bold rounded-md hover:bg-red-700 active:bg-red-800 transition-colors duration-300"
		{type}
		{disabled}
		on:click={click}
	>
		<slot />
	</button>
{:else}
	<button
		class="bg-blue-800 p-2 font-bold rounded-md hover:bg-blue-700 active:bg-blue-600 transition-colors duration-300"
		{type}
		{disabled}
		on:click={click}
	>
		<slot />
	</button>
{/if}
