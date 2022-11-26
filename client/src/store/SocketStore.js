import { defineStore } from 'pinia';

export default defineStore('socket', {
	state: () => ({
		data: {},
		isConnected: false,
		socket: null,
	}),
	actions: {
		onMessage(message) {
			const { id, ip, data } = message;
			if (id && ip && data) {
				this.data[id] = message;
			}
			console.log(message);
		},
		onSend(id, message) {
			if (this.socket && this.isConnected) this.socket.emit('send', id, message);
		},
		onConnect() {
			this.isConnected = true;
		},
		onDisconnect() {
			this.isConnected = false;
		},
	},
	getters: {},
});
