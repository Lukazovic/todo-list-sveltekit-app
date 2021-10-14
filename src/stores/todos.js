import { writable } from 'svelte/store';

import TodosResources from '../services/resources/todo';

export const todos = writable([]);

export const fetchStoredTodos = () => {
	const allTodos = TodosResources.getAllTodos();

	todos.set(allTodos);
};

export const addNewTodo = ({ title }) => {
	const dateTime = new Date().getTime();

	const newTodo = {
		id: dateTime.toString(),
		title,
		completed: false,
		createdAt: dateTime,
	};

	TodosResources.saveNewTodo(newTodo);
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

		TodosResources.saveAllTodos(updatedTodos);
		return updatedTodos;
	});
};

export const deleteTodoById = (id) => {
	todos.update((previousTodos) => {
		const updatedTodos = previousTodos.filter(
			(currentTodo) => currentTodo.id !== id
		);

		TodosResources.saveAllTodos(updatedTodos);
		return updatedTodos;
	});
};
