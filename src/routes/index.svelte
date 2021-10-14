<script>
	import { onMount } from 'svelte';

	import { fetchStoredTodos } from '../stores/todos';

	import Title from '../components/Title.svelte';
	import CreateTodoForm from '../components/CreateTodoForm.svelte';
	import TodoList from '../components/TodoList.svelte';

	onMount(() => {
		fetchStoredTodos();
	});
</script>

<svelte:head>
	<title>Svelte Todo App</title>
</svelte:head>

<Title>Todo Svelte App</Title>
<main class="max-w-xl mx-auto mt-12">
	<CreateTodoForm />
	<TodoList />
</main>
