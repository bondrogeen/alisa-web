<template>
	<div v-outside="onOutside" class="a-dropdown" :class="{ 'a-dropdown--opened': show }">
		<div class="a-dropdown__activator">
			<slot name="activator" :on="{ click: onClick }" :show="show"></slot>
		</div>

		<transition name="slide-up">
			<div v-if="show" :style="getStyle" class="a-dropdown__content" @click="onClick">
				<slot :on-show="onShow" :on-hide="onHide" :show="show"></slot>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
	top: { type: String, default: 'calc(100% + 5px)' },
	left: { type: String, default: '' },
	right: { type: String, default: '0' },
	hideOnClick: { type: Boolean, default: true },
	height: { type: String, default: '200px' },
	width: { type: String, default: '100%' },
});

const emit = defineEmits(['click', 'show', 'close']);

const show = ref(false);

const getStyle = computed(() => ({
	top: props.top,
	left: props.left,
	right: props.right,
	'min-width': props.width,
}));

const onOutside = (e) => {
	console.log(e);
	if (show.value) onHide();
};

const onClick = () => {
	if (!show.value) onShow();
	else if (props.hideOnClick) onHide();
	emit('click', show.value);
};

const onShow = () => {
	show.value = true;
	emit('show');
};

const onHide = () => {
	show.value = false;
	emit('close');
};
</script>

<style lang="scss">
.a-dropdown {
	position: relative;

	&__activator {
		cursor: pointer;
	}
	&__content {
		position: absolute;
		z-index: 2;
		top: calc(100% + 5px);
		overflow: auto;
		min-width: 100%;
		transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
		border-radius: 5px;
		background-color: color('app', 'white');
		color: color('app', 'black');
		box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
	}
}
</style>
