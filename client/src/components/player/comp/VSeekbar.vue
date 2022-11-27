<template>
	<div class="player-seekbar">
		<div class="player-seekbar__time">
			<span>{{ lastTime }}</span>
			<span>{{ time }}</span>
		</div>
		<div ref="slider" :class="['player-seekbar__slider', { 'player-seekbar__slider--disabled': !hasProgressBar }]">
			<div class="player-seekbar__line" @click="click"></div>
			<div class="player-seekbar__pointer" :style="`left: calc(${line}% - 10px)`" @mousedown="mousedown"></div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
	duration: { type: Number, default: 0 },
	progress: { type: Number, default: 0 },
	type: { type: String, default: '' },
	hasProgressBar: { type: Boolean, default: false },
});

const emit = defineEmits(['command']);

const hasMove = ref(false);
const position = ref(0);
// const saveState = ref(0);
const slider = ref(null);

const line = computed(() => {
	const state = hasMove.value && position.value ? position.value : Math.round((props.progress * 1000) / props.duration) / 10;
	return isNaN(state) ? 0 : state;
});
const time = computed(() => {
	var date = new Date(null);
	date.setSeconds(props.duration);
	return date.toISOString().substr(14, 5);
});
const lastTime = computed(() => {
	var date = new Date(null);
	date.setSeconds(props.progress);
	return date.toISOString().substr(14, 5);
});

const click = ({ layerX }) => {
	if (props.hasProgressBar) {
		const width = slider.value.clientWidth;
		const percent = Math.round((layerX * 100) / width);
		position.value = percent;
		sendRewind(percent);
	}
};
const onMouseMove = ({ clientX }) => {
	if (hasMove.value && slider.value) {
		const { offsetLeft, clientWidth } = slider.value;
		const left = offsetLeft;
		const right = offsetLeft + clientWidth;
		if (clientX > left && clientX < right) {
			const percent = Math.round(((clientX - offsetLeft) * 100) / clientWidth);
			position.value = percent;
		}
	}
};
const sendRewind = (percent) => {
	emit('command', {
		command: 'rewind',
		position: Math.round((props.duration / 100) * percent),
	});
};
const mousedown = () => {
	hasMove.value = true;
};
const mouseup = () => {
	if (hasMove.value) {
		hasMove.value = false;
		sendRewind(position.value);
	}
};

onMounted(() => {
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', mouseup);
});
onUnmounted(() => {
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('mouseup', mouseup);
});
</script>

<style lang="scss">
.player-seekbar {
	&__time {
		display: flex;
		justify-content: space-between;
		margin: 0 0 10px 0;
		user-select: none;
	}
	&__slider {
		user-select: none;
		position: relative;
		height: 10px;
		display: flex;
		align-items: center;
		&--disabled {
			opacity: 0.7;
			cursor: default;
		}
	}
	&__line {
		height: 8px;
		width: 100%;
		cursor: pointer;
		padding: 3px 0;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			background-color: color('yellow', 'base');
		}
	}
	&__pointer {
		position: absolute;
		top: calc(50% - 10px);
		left: 30px;
		height: 20px;
		width: 20px;
		background-color: color('yellow', 'darken-1');
		border-radius: 50%;
		cursor: grab;
	}
}
</style>
