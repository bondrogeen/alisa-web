<template>
	<div class="card-device">
		<div class="card-device__header">
			<div class="card-device__menu">
				<a-dropdown top="0">
					<template #activator="{ on }">
						<i class="icon icon-more-horizontal" v-on="on"></i>
					</template>
					<a-list :list="menus" @click="onEvent"></a-list>
				</a-dropdown>
			</div>
			<div class="card-device__status">
				<i :class="`icon ${statusIcon}`"></i>
			</div>
		</div>
		<div class="card-device__body">
			<div class="card-device__inner">
				<div class="card-device__image">
					<span :class="['card-device__dot', `card-device__dot--${status}`]" :title="status"></span>
					<img height="100" width="100" :src="image" :alt="platform" />
				</div>
				<p class="card-device__title">{{ type }}</p>
				<p class="card-device__subtitle">{{ platform }}</p>
				<p class="card-device__info">{{ `${ip}:${port}` }}</p>
			</div>
		</div>
		<div class="card-device__footer">
			<a-button full color="primary" @click="onPlayer">Player</a-button>
			<!-- <a-button full color="primary" @click="onControl">Info</a-button> -->
		</div>
	</div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import platforms from '@/utils/platforms';

const props = defineProps({
	id: { type: String, default: '' },
	ip: { type: String, default: '' },
	platform: { type: String, default: '' },
	port: { type: Number, default: 0 },
	connected: { type: Boolean, default: false },
	data: { type: Object, default: () => ({}) },
});

const router = useRouter();

const menus = [
	{ name: 'Info', path: '' },
	{ name: 'Remove', path: '' },
	{ name: 'Exit', path: '' },
];

const iconStatus = {
	BUSY: 'icon-alert-circle',
	LISTENING: 'icon-mic',
	SPEAKING: 'icon-volume-1',
	PLAY: 'icon-play',
};

const image = computed(() => platforms?.[props.platform]?.image || '');
const type = computed(() => platforms?.[props.platform]?.type || '');
const state = computed(() => props.data?.state || {});
const status = computed(() => (props.connected ? 'active' : 'close'));
const aliceState = computed(() => iconStatus[state.value?.aliceState]);
const playing = computed(() => state.value?.playing || false);
const statusIcon = computed(() => (playing.value ? aliceState.value || iconStatus['PLAY'] : aliceState.value));

const onEvent = ({ name }) => {
	if (name === 'Info') router.push('info/' + props.id);
};
const onPlayer = () => router.push('player/' + props.id);
</script>

<style lang="scss">
.card-device {
	width: 100%;
	min-width: 200px;
	padding: 20px;
	color: color('app', 'black');
	background-color: color('app', 'white');
	border-radius: 10px;
	transition: all 0.2s ease-out;
	&:hover {
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
	}

	&__image {
		display: flex;
		justify-content: center;
		position: relative;
	}
	&__dot {
		display: block;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		position: absolute;
		right: 0;
		top: 0;
		&--active {
			background-color: color('green', 'base');
		}
		&--close {
			background-color: color('red', 'base');
		}
	}
	&__title {
		font-size: 18px;
		text-align: center;
	}
	&__subtitle {
		font-size: 14px;
		text-align: center;
	}
	&__info {
		font-size: 12px;
		text-align: center;
		opacity: 0.7;
	}
	&__body {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}
	&__header {
		position: relative;
	}
	&__menu {
		position: absolute;
		right: 0;
		font-size: 1.2em;
	}
	&__status {
		position: absolute;
		left: 0;
		font-size: 1.2em;
	}
	&__inner {
		display: flex;
		flex-direction: column;
	}
	&__footer {
		display: flex;
		gap: 10px;
	}
}
</style>
