<template>
	<ul class="a-list">
		<li v-for="(item, i) of list" :key="'list_' + i" class="a-list__item" @click="onClick(item)">
			<slot :item="item"> {{ item.name }} </slot>
		</li>
	</ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
	list: { type: Array, default: () => [] },
});

const emit = defineEmits(['click']);

const onClick = (item) => emit('click', item);
</script>

<style lang="scss">
.a-list {
	position: relative;
	padding: 0;
	margin: 0;
	&__item {
		padding: 5px 20px;
		&:hover {
			background-color: rgb(224, 235, 245);
		}
	}
}
</style>
