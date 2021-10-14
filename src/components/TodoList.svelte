<script>
	const todos = [
		{id: '1', title: 'todo 1', completed: false, createdAt: new Date().getTime()},
		{id: '2', title: 'todo 2', completed: false, createdAt: new Date().getTime()},
		{id: '3', title: 'todo 3', completed: false, createdAt: new Date().getTime()},
		{id: '4', title: 'todo 4', completed: false, createdAt: new Date().getTime()},
		{id: '5', title: 'todo 5', completed: false, createdAt: new Date().getTime()},
	]

	import TodoCard from './TodoCard.svelte';
</script>

<ul class="mt-10">
	{#each todos as todo}
		<TodoCard
			id={todo.id}
			title={todo.title}
			completed={todo.completed}
			createdAt={todo.createdAt}
		/>
	{/each}
</ul>
