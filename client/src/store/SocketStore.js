import { defineStore } from 'pinia';

export default defineStore('socket', {
	state: () => ({
		devices: {},
		isConnected: false,
		socket: null,
		init: null,
	}),
	actions: {
		onMessage(message) {
			const { id, ip, data } = message;
			if (id && ip && data) {
				this.devices[id] = message;
			}
			console.log(message);
		},
		onInit(message) {
			this.init = message;
			console.log(message);
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
	getters: {
		isDevice: (state) => Boolean(Object.keys(state.devices).length),
		isToken: (state) => Boolean(state?.init?.token),
	},
});
