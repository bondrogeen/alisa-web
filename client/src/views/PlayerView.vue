<template>
	<div class="page-player" @click="onClick">
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

const onClick = () => {
	console.log('sdsdsdsd');
	// onCommand({
	// 	command: 'playMusic',
	// 	id: '44731403',
	// 	type: 'track',
	// });
	// onCommand({
	// 	command: 'serverAction',
	// 	serverActionEventPayload: {
	// 		type: 'server_action',
	// 		name: 'bass_action',
	// 		payload: {
	// 			data: {
	// 				video_descriptor: {
	// 					provider_item_id: 'S_n8CCgk8D0',
	// 					provider_name: 'youtube',
	// 				},
	// 			},
	// 			name: 'quasar.play_video_by_descriptor',
	// 		},
	// 	},
	// });
};
</script>

<style lang="scss" scoped>
.page-player {
	height: 100%;
	display: flex;
	justify-content: center;
	&__inner {
		width: 800px;
	}
}
</style>
