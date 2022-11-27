<template>
	<div class="card-player">
		<div class="card-player__header">
			<i class="icon icon-arrow-left" @click="$router.push('/')"></i>
			<h1>Play now</h1>
		</div>
		<div class="card-player__preview">
			<a :href="`https://music.yandex.ru/album/${album}/track/${id}`" target="_blank">
				<img height="200" width="200" :src="`https://${coverURI}`" alt="" />
			</a>
		</div>
		<div class="card-player__body">
			<div>
				<h3 class="card-player__title text-h5 mb-2">{{ playerState.title }}</h3>
				<p class="card-player__subtitle text-title-1">{{ playerState.subtitle }}</p>
			</div>
		</div>
		<div class="card-player__control">
			<div class="card-player__seekbar">
				<VSeekbar v-bind="bindSeekbar" @command="$emit('command', $event)" />
			</div>
			<div class="card-player__buttons">
				<div class="card-player__volume">
					<VVolume :volume="volume" @command="$emit('command', $event)" />
				</div>
				<div class="card-player__track">
					<VTrackControl v-bind="bindTrack" :playing="isPlaying" @command="$emit('command', $event)" />
				</div>
				<div class="card-player__like">
					<i v-if="isMy" class="icon icon-heart-on"></i>
					<i v-else class="icon icon-heart" @click="text('Поставь лайк')"></i>
				</div>
			</div>
		</div>
		<div class="card-player__footer">
			<span class="card-player__line"></span>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import VSeekbar from './comp/VSeekbar';
import VVolume from './comp/VVolume';
import VTrackControl from './comp/VTrackControl';

const props = defineProps({
	experiments: { type: Object, default: () => {} },
	extra: { type: Object, default: () => {} },
	state: { type: Object, default: () => {} },
	supported_features: { type: Object, default: () => {} },
	unsupported_features: { type: Object, default: () => {} },
});

const emit = defineEmits(['command']);

const isPlaying = computed(() => props.state?.playing || false);
const playerState = computed(() => props.state?.playerState || {});
const bindTrack = computed(() => {
	const { playing, hasNext, hasPause, hasPlay, hasPrev } = playerState.value;
	return { playing, hasNext, hasPause, hasPlay, hasPrev };
});
const bindSeekbar = computed(() => {
	const { duration, progress, type, hasProgressBar } = playerState.value;
	return { duration, progress, type, hasProgressBar };
});
const isMy = computed(() => (playerState.value?.playlistType || '') === 'Playlist');
const volume = computed(() => props.state?.volume || 0);

const id = computed(() => playerState.value?.id || 0);
const album = computed(() => coverURI.value.match(/(\d*)-\d\//)?.[1]);

const coverURI = computed(() => {
	const url = extra.value?.coverURI || '';
	return url.replace('%%', '200x200');
});
const extra = computed(() => playerState.value?.extra || {});

const text = (text) => emit('command', { command: 'sendText', text });
</script>

<style lang="scss">
.card-player {
	height: 100%;
	display: flex;
	flex-direction: column;
	color: color('blue', 'darken-1');
	&__title {
		color: color('app', 'white');
		text-align: center;
	}
	&__subtitle {
		text-align: center;
	}
	&__header {
		position: relative;
		flex: 0 0 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		i {
			position: absolute;
			left: 10px;
			margin: 0 10px;
		}
	}
	&__preview {
		margin: auto;
		height: 250px;
		width: 250px;
		background: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(closest-side, color('app', 'primary'), color('app', 'black'));
		img {
			border-radius: 10px;
		}
	}
	&__body {
		flex: 1 1 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		i {
			position: absolute;
			right: 10px;
			margin: 0 10px;
		}
	}
	&__control {
		flex: 1 1 auto;
	}
	&__buttons {
		padding: 20px 0;
		display: flex;
		justify-content: center;
		position: relative;
	}
	&__volume {
		margin-right: auto;
	}
	&__like {
		margin-left: auto;
	}
	&__footer {
		flex: 0 0 50px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	&__line {
		height: 3px;
		width: 30%;
		display: block;
		background-color: color('app', 'white');
		margin-bottom: 20px;
	}

	i {
		font-size: 32px;
		cursor: pointer;
		transition: all 0.2s ease-out;
		&:hover {
			color: color('app', 'white');
		}
	}
}
</style>
