import { defineStore } from 'pinia';
import fetch from '@/utils/fetch/';

export default defineStore('service', {
	state: () => ({
		getToken: true,
		username: '',
		password: '',
		token: '',
		error: '',
		loading: false,
	}),
	actions: {
		async onYandexToken() {
			const { username, password } = this;
			if (username || password) {
				this.loading = true;
				const res = await fetch.post('/service/token', { username, password });
				const data = await res.json();
				if (data.access_token) {
					this.token = data.access_token;
					this.getToken = true;
				}
				console.log(data);
				this.loading = false;
			}
		},
		async onConection() {
			if (this.token) {
				this.loading = true;
				const res = await fetch.post('/service/conection', { token: this.token });
				const data = await res.json();
				console.log(data);
				this.loading = false;
			}
		},
	},
});
