<template>
	<div class="page-player container">
		<div class="page-player__inner">
			<VPlayer v-bind="data" @command="onCommand" />
		</div>
	</div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import VPlayer from '@/components/player/VPlayer';
import { useRoute } from 'vue-router';

const props = defineProps({
	data: { type: Object, default: () => ({}) },
	devices: { type: Array, default: () => [] },
	onSend: { type: Function, default: null },
});

const route = useRoute();
const id = route.params.id;
const data = computed(() => props.data[id]?.data || {});
const onCommand = (message) => props.onSend(id, message);
</script>

<style lang="scss">
.page-player {
	height: 100%;
	display: flex;
	justify-content: center;
	&__inner {
		width: 800px;
	}
}
</style>
