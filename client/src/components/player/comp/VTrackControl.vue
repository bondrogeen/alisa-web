<template>
	<div class="player-track">
		<i class="icon icon-skip-back" :class="{ disabled: !hasPrev }" @click="command('prev', hasPrev)"></i>
		<i v-if="playing" class="icon icon-pause" @click="command('stop', true)"></i>
		<i v-else class="icon icon-play" @click="command('play', true)"></i>
		<i class="icon icon-skip-forward" :class="{ disabled: !hasNext }" @click="command('next', hasNext)"></i>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
	playing: { type: Boolean, default: false },
	hasNext: { type: Boolean, default: false },
	hasPause: { type: Boolean, default: false },
	hasPlay: { type: Boolean, default: false },
	hasPrev: { type: Boolean, default: false },
});
const emit = defineEmits(['command']);

const command = (comm, isTrue) => {
	if (isTrue) {
		emit('command', { command: comm });
	}
};
</script>

<style lang="scss">
.player-track {
	display: flex;
	gap: 20px;
}
</style>
