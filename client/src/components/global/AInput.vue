<template>
	<input v-model="input" :type="type" autocomplete="token" class="a-input" name="token" :placeholder="placeholder" @focus="onFocus" />
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
	modelValue: { type: String, default: '' },
	type: { type: String, default: 'text' },
	placeholder: { type: String, default: '' },
	value: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue', 'focus']);

const input = computed({
	set: (value) => {
		console.log(value);
		emit('update:modelValue', value);
	},
	get: () => props.modelValue,
});

const onFocus = (e) => emit('focus', e);
</script>

<style lang="scss" scoped>
.a-input {
	font-size: 18px;
	font-weight: 500;
	line-height: 18px;
	height: 44px;
	border: none;
	border-bottom: 2px solid #8a2be2;
	color: #000;
	position: relative;
	width: 100%;
	margin: 0;
	padding: 0;

	vertical-align: top;
	outline: 0;
	background: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	&::placeholder {
		color: rgba(114, 114, 117, 0.514);
		font-size: 0.7em;
		font-weight: 400;
	}
}
</style>
