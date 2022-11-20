import { defineStore } from 'pinia';

export default defineStore('app', {
	state: () => ({
		isLoading: false,
		dialog: false,
		content: {
			message: '',
		},
		headerShadow: false,
	}),
	actions: {
		async setDialog(data) {
			this.dialog = true;
			this.content = data;
			this.content.message = data?.message || '';
		},

		setLoader(flag) {
			const loader = document.querySelector('#app-loader');
			if (loader) loader.style.display = flag ? 'block' : 'none';
		},
	},
});
