<template>
	<div class="page-info container">
		<div class="page-home__title text-h4 my-6">TTS</div>
		<div class="page-info__body">
			<div class="page-info__form">
				<a-field label="Text">
					<a-textarea v-model="text" type="text" placeholder="TTS" />
				</a-field>
				<a-checkbox v-model="whisper" class="mb-6">whisper</a-checkbox>
				<div class="page-info__body">
					<a-dropdown>
						<template #activator="{ on }">
							<a-field label="Effects" v-on="on">
								<a-input v-model="effect.name" readonly type="text" />
							</a-field>
						</template>
						<a-list :list="effects" @click="onEffect"></a-list>
					</a-dropdown>
					<a-dropdown>
						<template #activator="{ on }">
							<a-field label="Voice" v-on="on">
								<a-input v-model="voice.name" readonly type="text" />
							</a-field>
						</template>
						<a-list :list="voices" @click="onVoice"></a-list>
					</a-dropdown>
				</div>
			</div>
			<div class="page-info__view">
				{{ valueText }}
			</div>
		</div>
		<div class="page-info__footer">
			<a-button color="primary" @click="onSend"> Отправить </a-button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
	data: { type: Object, default: () => ({}) },
	devices: { type: Array, default: () => [] },
	onSend: { type: Function, default: null },
});

const text = ref('Привет я Алиса');
const whisper = ref(false);
const effect = ref({ name: 'Нет', value: '' });
const voice = ref({ name: 'Алиса', value: '' });

const effects = [
	{ name: 'Нет', value: '' },
	{ name: 'Хомяка', value: 'hamster' },
	{ name: 'Мегафон', value: 'megaphone' },
	{ name: 'Низкий голос', value: 'pitch_down' },
	{ name: 'Психоделический голос', value: 'psychodelic' },
	{ name: 'Голос с прерываниями', value: 'pulse' },
	{ name: 'Громкоговоритель', value: 'train_announce' },
];

const voices = [
	{ name: 'Алиса', value: '' },
	{ name: 'Оксана', value: 'oksana' },
	{ name: 'Джейн', value: 'jane' },
	{ name: 'Захар', value: 'zahar' },
	{ name: 'Эрмил', value: 'ermil' },
	{ name: 'Эркан Явас', value: 'erkanyavas' },
	{ name: 'Костя', value: 'kostya' },
];

const route = useRoute();
const id = route.params.id;
const data = computed(() => props.data[id]?.data || {});
const onCommand = (message) => props.onSend(id, message);

const onEffect = (item) => (effect.value = item);
const onVoice = (item) => {
	whisper.value = false;
	voice.value = item;
};
const getVoice = computed(() => (voice.value.value ? `voice='${voice.value.value}'` : ''));
const getWhisper = computed(() => (whisper.value ? `is_whisper="true"` : ''));
const getEffect = computed(() => (effect.value.value ? `effect='${effect.value.value}'` : ''));

const valueText = computed(() => `<speaker ${getWhisper.value} ${getVoice.value} ${getEffect.value}>${text.value}`);

const onSend = () => {
	console.log(data);
	onCommand({
		command: 'serverAction',
		serverActionEventPayload: {
			type: 'server_action',
			name: 'update_form',
			payload: {
				form_update: {
					name: 'personal_assistant.scenarios.repeat_after_me',
					slots: [
						{
							type: 'string',
							name: 'request',
							value: valueText.value,
						},
					],
				},
				resubmit: true,
			},
		},
	});
};
</script>

<style lang="scss">
.page-info {
	height: 100%;
	&__body {
		display: flex;
		margin-bottom: 30px;
		gap: 20px;
		color: color('app', 'black');
	}
	&__view {
		flex: 0 0 50%;
		padding: 20px;
		border-radius: 10px;
		background-color: color('app', 'white');
	}
	&__form {
		flex: 0 0 50%;
		padding: 20px;
		border-radius: 10px;
		background-color: color('app', 'white');
	}
}
</style>
