<script>
	import ButtonIcon from './ButtonIcon.svelte';
	import TrashIcon from '../icons/Trash.svelte';

	import DateTools from '../services/tools/date';

	export let id, title, completed, createdAt;

	const handleCompletedChange = () => {
		console.log('handleCompletedChange:',id);
	};

	const handleDelete = () => {
    console.log('handleDelete:',id);
	};
</script>

<li class="mb-4 rounded-md border border-gray-700 px-4 py-2">
	<header class="flex items-center justify-between">
		<div class="flex items-center">
			<input
				class="cursor-pointer p-2 rounded-md text-blue-600 bg-gray-800 border-gray-600"
				id={`todo-${id}`}
				type="checkbox"
				checked={completed}
				on:change={handleCompletedChange}
			/>
			<label
				class={`cursor-pointer pl-4 text-xl ${completed ? 'line-through' : ''}`}
				for={`todo-${id}`}>{title}</label
			>
		</div>

		<ButtonIcon variant="danger" click={handleDelete}>
			<TrashIcon width="18" />
		</ButtonIcon>
	</header>

	<footer class="mt-4 flex justify-end">
		<p>Created at: {DateTools.getFormattedDate(createdAt)}</p>
	</footer>
</li>
