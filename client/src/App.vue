<template>
	<div class="app">
		<div class="app__header" @click="onClick">
			<AppHeader />
		</div>
		<div class="app__body">
			<router-view :devices="devices" :onSend="onSend" />
		</div>
		<div class="app__footer">
			<AppFooter />
		</div>
	</div>
</template>

<script setup>
import { io } from 'socket.io-client';
import { socketStore, storeToRefs } from '@/store/';

import AppHeader from '@/components/app/AppHeader';
import AppFooter from '@/components/app/AppFooter';

const store = socketStore();
const { onMessage, onConnect, onDisconnect, onSend } = store;
// const app = appStore();
const { socket, devices } = storeToRefs(store);

socket.value = io();
socket.value.on('connect', onConnect);
socket.value.on('disconnect', onDisconnect);
socket.value.on('data', onMessage);

const onClick = () => {
	onSend('192.168.10.22', {
		command: 'setVolume',
		volume: 0.3,
	});
};
</script>

<style lang="scss" scoped>
.app {
	height: 100%;
	display: flex;
	flex-direction: column;
	background: #091227;
	&__header {
		flex: 0 0 50px;
	}
	&__body {
		flex: 1 1 100%;
		padding: 20px;
	}
	&__footer {
		flex: 0 0 50px;
	}
}
</style>
