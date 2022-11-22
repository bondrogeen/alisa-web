<template>
	<div v-outside="outside" :class="['player-volume', { 'player-volume--hover': hover || value }]" @mouseover="hover = true" @mouseleave="hover = false">
		<slot name="btn">
			<i class="icon icon-volume-2" @click="value = !value"></i>
		</slot>
		<div ref="body" :class="['player-volume__body', { 'player-volume__body--show': value || hover }]" @wheel="wheel" @click="click">
			<div class="player-volume__value" :style="getValue"></div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
	volume: { type: Number, default: 0 },
});
const emit = defineEmits(['command']);

const value = ref(false);
const body = ref(null);
// const move = ref(false);
const hover = ref(false);

const volumeTemp = computed({
	set(value) {
		emit('command', {
			command: 'setVolume',
			volume: value / 100,
		});
	},
	get() {
		return props.volume * 100;
	},
});

const getValue = computed(() => {
	return { width: `${volumeTemp.value}%` };
});

const outside = () => {
	value.value = false;
};
const click = ({ layerX }) => {
	const width = body.value.clientWidth;
	volumeTemp.value = Math.round((layerX * 100) / width / 10) * 10;
};
const wheel = ({ deltaY }) => {
	const value = volumeTemp.value + (deltaY < 0 ? 10 : -10);
	if (value >= 0 && value <= 100) {
		volumeTemp.value = value;
	}
};
</script>

<style lang="scss" scoped>
.player-volume {
	position: relative;
	&--hover {
		color: azure;
	}
	&__body {
		position: absolute;
		top: 0;
		left: 30px;
		width: 150px;
		height: 30px;
		background-color: white;
		border-radius: 15px;
		// padding: 2px;
		overflow: hidden;
		border: 2px solid white;
		display: none;
		&--show {
			display: block;
		}
	}
	&__value {
		transition: all 0.2s ease-out;
		background-color: #6839cf;
		border-radius: 15px;
		width: 100%;
		height: 100%;
	}
	.icon {
		font-size: 32px;
	}
}
</style>
