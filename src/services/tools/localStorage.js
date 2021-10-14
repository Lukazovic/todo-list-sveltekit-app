const APP_KEY = 'SVELTE_TODO';

const getItem = (key) => {
	if (typeof window === 'undefined') return;

	const data = window.localStorage.getItem(`${APP_KEY}/${key}`);

	if (!data) return null;
	return JSON.parse(data);
};

const setItem = (key, value) => {
	if (typeof window === 'undefined') return;

	const data = JSON.stringify(value);

	return window.localStorage.setItem(`${APP_KEY}/${key}`, data);
}

export default {getItem, setItem}