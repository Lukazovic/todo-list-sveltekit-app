const createTodoFormValidate = ({ title }) => {
	let formErrors = {};

	if (!title) {
		formErrors = { ...formErrors, title: 'Title is required!' };
	}

	return formErrors;
};

export default { createTodoFormValidate };
