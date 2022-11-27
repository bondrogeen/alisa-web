import { defineStore } from 'pinia';
import api from '@/api/';

console.log(api);

export default defineStore('service', {
	state: () => ({
		token: '',
		init: {},
	}),
	actions: {
		async onState() {
			const { data } = await api.service.state();
			this.init = data;
		},
		async onYandexToken({ username, password }) {
			if (!username || !password) return;
			const { data } = await api.service.token({ username, password });
			if (data?.access_token) {
				this.token = data.access_token;
				return data;
			}
		},
		async onInit() {
			try {
				if (!this.token) return;
				const { data } = await api.service.init({ token: this.token });
				await this.onConnection();
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async onConnection() {
			const { data } = await api.service.connection();
			await this.onState();
			return data;
		},
	},
	getters: {
		isToken: (state) => state?.init?.token || '',
		devices: (state) => state?.init?.devices || '',
	},
});
