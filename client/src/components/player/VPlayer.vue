<template>
	<div class="card-player">
		<div class="card-player__header hover">
			<i class="icon icon-arrow-left" @click="$router.push('/')"></i>
			<h1>Play now</h1>
		</div>
		<div class="card-player__preview">
			<img height="200" width="200" :src="`https://${coverURI}`" alt="" />
		</div>
		<div class="card-player__body">
			<div>
				<h3 class="card-player__title">{{ playerState.title }}</h3>
				<p class="card-player__subtitle">{{ playerState.subtitle }}</p>
			</div>
		</div>
		<div class="card-player__control">
			<div class="card-player__seekbar">
				<VSeekbar v-bind="playerState" @command="$emit('command', $event)" />
			</div>
			<div class="card-player__buttons">
				<div class="card-player__volume">
					<VVolume :volume="volume" @command="$emit('command', $event)" />
				</div>
				<div class="card-player__track">
					<VTrackControl v-bind="playerState" :playing="isPlaying" @command="$emit('command', $event)" />
				</div>
				<div class="card-player__like hover">
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

const isPlaying = computed(() => {
	return props.state?.playing ?? false;
});
const playerState = computed(() => {
	return props.state?.playerState || {};
});
const isMy = computed(() => {
	return (playerState.value?.playlistType ?? '') === 'Playlist';
});
const volume = computed(() => {
	return props.state?.volume || 0;
});
const coverURI = computed(() => {
	const url = extra.value?.coverURI || '';
	return url.replace('%%', '200x200');
});
const extra = computed(() => {
	return playerState.value?.extra || {};
});

const text = (text) => emit('command', { command: 'sendText', text });
</script>

<style lang="scss" scoped>
$fontSize: 32px;

.card-player {
	height: 100%;
	display: flex;
	flex-direction: column;
	color: #56617e;
	&__title {
		color: aliceblue;
		font-size: 1.5em;
		text-align: center;
		min-height: 30px;
	}
	&__subtitle {
		min-height: 30px;
		text-align: center;
		font-size: 1.2em;
	}
	&__header {
		flex: 0 0 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
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
		background: radial-gradient(closest-side, #3c1199, #091227);
		img {
			border-radius: 10px;
			box-shadow: blue($color: #000000);
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
		i {
			// margin: 0 10px;
		}
	}
	&__volume {
		// position: absolute;
		// left: 0;
		margin-right: auto;
	}
	&__track {
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
		background-color: azure;
	}
}
.hover {
	i {
		cursor: pointer;
		font-size: $fontSize;
		transition: all 0.2s ease-out;
		&:hover {
			color: azure;
		}
	}
}
</style>
