<template>
	<div class="app">
		<div class="app__header">
			<AppHeader v-bind="init" @event="onEvent" />
		</div>
		<div class="app__body">
			<router-view :devices="devices" :data="data" :onSend="onSend" />
		</div>
		<div class="app__footer">
			<AppFooter />
		</div>
	</div>
</template>

<script setup>
import { io } from 'socket.io-client';
import { socketStore, serviceStore, storeToRefs } from '@/store/';

import AppHeader from '@/components/app/AppHeader';
import AppFooter from '@/components/app/AppFooter';

const store = socketStore();
const service = serviceStore();
const { onMessage, onConnect, onDisconnect, onSend } = store;
const { onConnection } = service;
const { socket, data } = storeToRefs(store);
const { init, devices } = storeToRefs(service);

socket.value = io();
socket.value.on('connect', onConnect);
socket.value.on('disconnect', onDisconnect);
socket.value.on('data', onMessage);

const onEvent = async ({ name }) => {
	if (name === 'Scan') await onConnection();
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
