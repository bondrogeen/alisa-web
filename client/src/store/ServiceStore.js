import { defineStore } from 'pinia';
import fetch from '@/utils/fetch/';

export default defineStore('service', {
	state: () => ({
		token: '',
		loading: false,
		init: {},
	}),
	actions: {
		async onInit() {
			const res = await fetch.get('/service/init');
			this.init = res;
		},
		async onYandexToken({ username, password }) {
			if (!username || !password) return;
			this.loading = true;
			const data = await fetch.post('/service/token', { username, password });
			if (data?.access_token) {
				this.token = data.access_token;
				return data;
			}
			this.loading = false;
		},
		async onConection() {
			if (!this.token) return;
			this.loading = true;
			const data = await fetch.post('/service/conection', { token: this.token });
			await this.onInit();
			this.loading = false;
			return data;
		},
	},
	getters: {
		isToken: (state) => state?.init?.token || '',
	},
});
