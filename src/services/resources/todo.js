import LocalStorageTools from '../tools/localStorage';

const STORAGE_KEY = 'TODOS';

const saveNewTodo = (newTodo) => {
	const todos = getAllTodos();

	const updatedTodos = todos ? [...todos, newTodo] : [newTodo];

	LocalStorageTools.setItem(STORAGE_KEY, updatedTodos);

	return updatedTodos;
};

const saveAllTodos = (todos) => {
	LocalStorageTools.setItem(STORAGE_KEY, todos);
};

const getAllTodos = () => {
	const todos = LocalStorageTools.getItem(STORAGE_KEY);

	return todos || [];
};

export default { saveNewTodo, saveAllTodos, getAllTodos };
