<script>
	export let id,
		value,
		name,
		placeholder = '',
		label = '',
		error = '',
		disabled = false,
		required = false;

	$: hasError = !!error;
</script>

<div class="flex flex-col">
	{#if !!label}
		<label class={`mb-2${!!id ? ' cursor-pointer' : ''}`} for={id}>{label}</label>
	{/if}
	<input
		class={`border-2 bg-gray-800 border-gray-800 rounded-md text-white py-2 px-4 placeholder-gray-500 ${
			hasError ? 'border-red-500' : ''
		}`}
		{id}
		type="text"
		bind:value
		{name}
		{placeholder}
		{disabled}
		{required}
	/>
	{#if hasError}
		<p class="text-red-500">{error}</p>
	{/if}
</div>
