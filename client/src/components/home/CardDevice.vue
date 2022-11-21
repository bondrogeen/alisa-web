<template>
	<div class="device">
		<div class="device__header">
			<div class="device__menu">
				<a-dropdown v-model="menu" :menus="menus" @click="menu = true">
					<template #btn>
						<i class="icon icon-more-horizontal"></i>
					</template>
				</a-dropdown>
			</div>
			<div class="device__status">
				<i :class="`icon ${statusIcon}`"></i>
			</div>
		</div>
		<div class="device__body">
			<div class="device__inner">
				<div class="device__image">
					<!-- <span :class="['device__dot', `device__dot--${status}`]" :title="status"></span> -->
					<img height="100" width="100" :src="image" :alt="platform" />
				</div>
				<p class="device__title">{{ type }}</p>
				<p class="device__subtitle">{{ platform }}</p>
				<p class="device__info">{{ `${ip}:${port}` }}</p>
			</div>
		</div>
		<div class="device__footer">
			<a-button full color="primary" @click="onPlayer">Player</a-button>
			<a-button full color="primary" @click="onControl">Control</a-button>
		</div>
	</div>
</template>

<script setup>
import { defineProps, computed,  } from 'vue';
import { useRouter } from 'vue-router';
import platforms from '@/utils/platforms';


const props = defineProps({
	id: { type: String, default: '' },
	ip: { type: String, default: '' },
	platform: { type: String, default: '' },
	port: { type: Number, default: 0 },
	data: { type: Object, default: () => ({}) },
});

const router = useRouter();

const menu = false;
const menus = [
	{ title: 'Remove', path: '' },
	{ title: 'Exit', path: '' },
];
const iconStatus = {
	BUSY: 'icon-alert-circle',
	LISTENING: 'icon-mic',
	SPEAKING: 'icon-volume-1',
};

const image = computed(() => platforms?.[props.platform]?.image || '');
// const name = computed(() => platforms?.[props.platform]?.name || '');
const type = computed(() => platforms?.[props.platform]?.type || '');
// const message = computed(() => this.$store.getters['socket/getMessage'](this.id));
// const status = computed(() => this.state?.status || 'close');
const statusIcon = computed(() => iconStatus[props.data?.state?.aliceState || '']);

const onPlayer = () => router.push('player/' + props.id);
const onControl = () => router.push('control/' + props.id);
</script>

<style lang="scss" scoped>
.device {
	width: 100%;
	min-width: 200px;
	padding: 10px 20px 20px 20px;
	// height: 220px;
	color: #000;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
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
			background-color: chartreuse;
		}
		&--init {
			background-color: rgb(255, 166, 0);
		}
		&--open {
			background-color: rgb(224, 148, 35);
		}
		&--close {
			background-color: red;
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
		font-size: 14px;
		text-align: center;
		opacity: 0.7;
	}
	&__body {
		flex: 1 1 auto;
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}
	&__header {
		flex: 0 0 20px;
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
		flex: 0 0;
		display: flex;
		gap: 10px;
	}
}
</style>
