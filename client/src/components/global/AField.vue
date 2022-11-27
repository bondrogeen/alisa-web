<template>
	<div class="a-field">
		<label class="a-field__label">{{ label }}</label>
		<div class="a-field__body">
			<slot></slot>
		</div>
		<div class="a-field__hint">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
	label: { type: String, default: '' },
	error: { type: String, default: '' },
});
</script>

<style lang="scss">
.a-field {
	&__label {
		color: color('app', 'black');
		font-weight: 600;
		font-size: 18px;
	}
	&__hint {
		height: 20px;
		color: color('red', 'base');
	}
}
</style>
