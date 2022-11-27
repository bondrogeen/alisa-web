<template>
	<textarea v-model="input" class="a-textarea" rows="3" cols="50" :placeholder="placeholder" @focus="onFocus" />
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
	modelValue: { type: String, default: '' },
	placeholder: { type: String, default: '' },
	value: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue', 'focus']);

const input = computed({
	set: (value) => emit('update:modelValue', value),
	get: () => props.modelValue,
});

const onFocus = (e) => emit('focus', e);
</script>

<style lang="scss">
.a-textarea {
	position: relative;
	border: none;
	border-bottom: 2px solid color('app', 'primary');
	width: 100%;
	margin: 0;
	padding: 0;
	vertical-align: top;
	outline: 0;
	background: none;
	overflow: auto;
	resize: none;
	&::placeholder {
		color: color('grey', 'base');
	}
}
</style>
