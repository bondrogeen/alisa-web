<template>
	<div class="page-home container">
		<div class="page-home__title">My devices</div>
		<div class="page-home__devices">
			<div v-for="(device, key) in devices" :key="key" class="page-home__card">
				<CardDevice v-bind="device" />
			</div>
			<!-- <div v-if="!devices.length" class="page-home__list page-home__empty">
				<span>Add</span>
			</div> -->
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import CardDevice from '../components/home/CardDevice';

defineProps({
	devices: { type: Array, default: () => [] },
	init: { type: Object, default: () => ({}) },
});
</script>

<style lang="scss" scoped>
.page-home {
	height: 100%;
	display: flex;
	flex-direction: column;
	&__empty {
		margin: 10px 0;
		height: 220px;

		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.3s ease-out;
		// opacity: 0.5;
		&:hover {
			// opacity: 0.6;
			box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
		}
		span {
			font-size: 25px;
			color: rgb(8, 8, 14);
		}
	}
	&__card {
		width: 100%;
		max-width: 300px;
		margin: 15px 0;
	}
	&__devices {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 2%;
	}
	&__title {
		flex: 0 0 80px;
		font-size: 24px;
		line-height: 28px;
	}
}
</style>
