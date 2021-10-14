<script>
		import { todos } from '../stores/todos';

	import TodoCard from './TodoCard.svelte';
</script>

<ul class="mt-10">
	{#each $todos as todo}
		<TodoCard
			id={todo.id}
			title={todo.title}
			completed={todo.completed}
			createdAt={todo.createdAt}
		/>
	{/each}
</ul>
