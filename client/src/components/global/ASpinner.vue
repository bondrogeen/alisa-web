<template>
	<div class="a-spinner" :style="{ width: `${radius * 2}px`, height: `${radius * 2}px` }">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
export default {
	name: 'a-spinner',
	props: {
		radius: {
			type: Number,
			default: 14,
		},
	},
};
</script>
<style lang="scss">
.a-spinner {
	position: relative;
	div {
		position: absolute;
		display: block;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		border: 4px solid color('app', 'white');
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: color('app', 'white') transparent transparent transparent;
	}
}
.a-spinner div:nth-child(1) {
	animation-delay: -0.45s;
}
.a-spinner div:nth-child(2) {
	animation-delay: -0.3s;
}
.a-spinner div:nth-child(3) {
	animation-delay: -0.15s;
}
@keyframes lds-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
