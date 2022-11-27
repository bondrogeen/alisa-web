<template>
	<button class="a-button" :class="[`a-button--${color}`, { 'a-button--full': full }, { 'a-button--loading': loading }, { 'a-button--disabled': disabled }]" @click="click">
		<slot v-if="!loading">{{ text }}</slot>
		<a-spinner v-else />
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
	text: { type: String, default: '' },
	color: { type: String, default: '' },
	full: { type: Boolean, default: false },
	loading: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);

const click = (event) => {
	if (props.loading || props.disabled) return;
	emit('click', event);
};
</script>

<style lang="scss">
.a-button {
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 12px;
	border: none;
	border-radius: 7px;
	font-size: 16px;
	font-weight: 700;
	background-color: color('app', 'white');
	cursor: pointer;
	transition: all 0.2s ease-out;
	&--full {
		width: 100%;
	}
	&--primary {
		background-color: color('app', 'primary');
		color: color('app', 'white');
	}
	&--loading,
	&--disabled {
		cursor: default;
		opacity: 0.7;
		background-color: color('grey', 'base');
	}
}
</style>
