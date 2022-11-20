<template>
	<button class="a-button" :class="[`a-button--${color}`, { 'a-button--full': full }, { 'a-button--loading': loading }, { 'a-button--disabled': disabled }]" @click="click">
		<slot v-if="!loading">{{ text }}</slot>
		<a-spinner v-else />
	</button>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
	text: { type: String, default: '' },
	color: { type: String, default: '' },
	full: { type: Boolean, default: false },
	loading: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
});

const click = (event) => {
	if (this.loading || this.disabled) return;
	this.$emit('click', event);
};
</script>

<style lang="scss" scoped>
.a-button {
	padding: 0 12px;
	min-height: 40px;
	border: none;
	border-radius: 7px;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	color: #1e2121;
	background-color: #d4d4d4;
	transition: all 0.2s ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	&--full {
		width: 100%;
	}
	&--primary {
		background-color: blueviolet;
		color: aliceblue;
	}
	&--loading,
	&--disabled {
		cursor: default;
		opacity: 0.7;
	}
	&:hover {
		// opacity: 0.7;
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
	}
}
</style>
