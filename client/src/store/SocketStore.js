import { defineStore } from 'pinia';

export default defineStore('socket', {
	state: () => ({
		devices: [],
		isConnected: false,
		socket: null,
	}),
	actions: {
		onMessage(data) {
			console.log(data);
		},
		onSend(id, message) {
			console.log(id, message);
			if (this.socket && this.isConnected) this.socket.emit('send', id, message);
		},
		onConnect(socket) {
			this.isConnected = true;
			console.log(socket);
		},
		onDisconnect(socket) {
			this.isConnected = false;
			console.log(socket);
		},
	},
});
