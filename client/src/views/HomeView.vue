<template>
	<div class="page-home container">
		<div class="page-home__title text-h4 my-6">My devices</div>
		<div class="page-home__devices">
			<div v-for="device in devices" :key="device.id" class="page-home__card">
				<CardDevice v-bind="device" :data="getData(device)" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import CardDevice from '../components/home/CardDevice';

const props = defineProps({
	devices: { type: Array, default: () => [] },
	data: { type: Object, default: () => ({}) },
	init: { type: Object, default: () => ({}) },
});

const getData = ({ id }) => props.data?.[id]?.data;
</script>

<style lang="scss">
.page-home {
	&__card {
		width: 100%;
		max-width: 300px;
	}
	&__devices {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 30px;
	}
}
</style>
