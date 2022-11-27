<template>
	<div class="page-info container">
		<div class="page-home__title text-h4 my-6">Info</div>
		<div class="page-info__body">
			<div class="page-info__view">
				{{ state }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
	data: { type: Object, default: () => ({}) },
	devices: { type: Array, default: () => [] },
	onSend: { type: Function, default: null },
});

const route = useRoute();
const id = route.params.id;
// const data = computed(() => props.data[id]?.data || {});

const state = computed(() => props.data[id]?.data?.state || {});

</script>

<style lang="scss">
.page-info {
	height: 100%;
	&__body {
		display: flex;
		margin-bottom: 30px;
		gap: 20px;
		color: color('app', 'black');
	}
	&__view {
		white-space: pre;
		flex: 0 0 50%;
		padding: 20px;
		border-radius: 10px;
		background-color: color('app', 'white');
	}
}
</style>
