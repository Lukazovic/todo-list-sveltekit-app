<script>
	import TextField from './TextField.svelte';
	import Button from './Button.svelte';

	import ValidationTools from '../services/tools/validation';

	const initialState = { title: '' };

	let formData = { ...initialState };
	let formErros = { ...initialState };

	const handleSubmit = (event) => {
		event.preventDefault();
		formErros = initialState;

		const fieldsErros = ValidationTools.createTodoFormValidate(formData);

		if (Object.values(fieldsErros).length) {
			formErros = { ...fieldsErros };
			return;
		}

		formData = { ...initialState };
	};
</script>

<h3 class="font-bold text-2xl">Create new Todo</h3>

<form class="mt-6" on:submit={handleSubmit}>
	<TextField
		id="title"
		name="title"
		label="Title"
		placeholder="What do you need to do?"
		bind:value={formData.title}
		error={formErros?.title}
	/>

	<div class="mt-6 flex justify-end">
		<Button type="submit">Create</Button>
	</div>
</form>
