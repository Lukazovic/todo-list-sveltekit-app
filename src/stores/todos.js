import { writable } from 'svelte/store';

export const todos = writable([]);

export const addNewTodo = ({ title }) => {
	const dateTime = new Date().getTime();
	const newTodo = {
		id: dateTime.toString(),
		title,
		completed: false,
		createdAt: dateTime,
	};

	todos.update((previousTodos) => [...previousTodos, newTodo]);
};

export const toggleCompletedTodo = (id) => {
	todos.update((previousTodos) => {
		const updatedTodos = previousTodos.map((currentTodo) => {
			if (currentTodo.id === id) {
				return { ...currentTodo, completed: !currentTodo.completed };
			}

			return currentTodo;
		});

		return updatedTodos;
	});
};

export const deleteTodoById = (id) => {
	todos.update((previousTodos) => {
		const updatedTodos = previousTodos.filter(
			(currentTodo) => currentTodo.id !== id
		);

		return updatedTodos;
	});
};
