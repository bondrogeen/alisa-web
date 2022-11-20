<template>
	<div v-click-outside="outside" class="a-dropdown">
		<slot name="btn">
			<i class="icon icon-umbrella"></i>
		</slot>
		<div class="a-dropdown__content" :class="[{ 'a-dropdown__content--hide': !value }]">
			<ul class="a-dropdown__menus">
				<li v-for="({ title, icon }, i) of menus" :key="`menu_${i}`" class="a-dropdown__menu">
					<i v-if="icon" :class="`icon ${icon}`"></i>
					<span>{{ title }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
	menus: { type: Array, default: () => [] },
	value: { type: Boolean, default: false },
});

const outside = () => {
	this.$emit('input', false);
};

// const click = (event) => {
// 	if (this.loading) return;
// 	this.$emit('click', event);
// };
</script>

<style lang="scss" scoped>
.a-dropdown {
	position: relative;
	display: inline-block;
	&__content {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
		color: black;
		background-color: #fff;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
		&--hide {
			display: none;
		}
	}
	&__menus {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	&__menu {
		padding: 5px 20px;
		font-size: 1em;
		transition: all 0.2s ease-out;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		i {
			margin: 0 10px 0 0;
		}
		span {
			margin-left: auto;
		}
		&:hover {
			background-color: #6839cf45;
		}
	}
}
</style>
