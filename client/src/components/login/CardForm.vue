<template>
	<div class="card-login">
		<div v-if="!isFormToken" class="card-login__fab" @click="isFormToken = true">
			<i class="icon icon-chevron-left"></i>
		</div>
		<div class="card-login__header">
			<img width="70" height="70" src="/images/logo-alisa.jpg" alt="" />
			<span>{{ isFormToken ? 'Log' : 'Get Yandex token ' }}</span>
		</div>
		<div class="card-login__body">
			<template v-if="isFormToken">
				<a-field label="Token" :error="error">
					<a-input v-model="token" type="text" placeholder="Enter your token" @focus="error = ''" />
				</a-field>
			</template>
			<template v-else>
				<a-field label="Login">
					<a-input v-model="form.username" type="text" placeholder="Enter your login" @focus="error = ''" />
				</a-field>
				<a-field :error="error" label="Password">
					<a-input v-model="form.password" type="password" placeholder="Enter your password" @focus="error = ''" />
				</a-field>
			</template>
			<span v-if="isFormToken" @click="isFormToken = false">Get token</span>
		</div>
		<div class="card-login__footer">
			<a-button full color="primary" :disabled="disabled" :loading="loading" @click="isFormToken ? onConection() : onYandexToken()">
				{{ isFormToken ? 'Connecting' : 'Get token' }}
			</a-button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { serviceStore, storeToRefs } from '@/store/';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = serviceStore();

const { token, error, loading } = storeToRefs(store);
const form = ref({ username: '', password: '' });
const isFormToken = ref(true);

const disabled = computed(() => Boolean(isFormToken.value ? !token.value : !form.value.username || !form.value.password));

const onConection = async () => {
	const res = await store.onConection();
	console.log(res);
	if (res) router.push('/');
};

const onYandexToken = async () => {
	const res = await store.onYandexToken(form);
	if (res) isFormToken.value = false;
};
</script>

<style lang="scss">
.card-login {
	height: 100%;
	width: 100%;
	background-color: azure;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	color: black;
	user-select: none;
	position: relative;
	&__fab {
		position: absolute;
		top: 30px;
		left: -20px;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		background-color: azure;
		display: flex;
		align-items: center;
		box-shadow: 0 4px 8px #00000075;
		padding: 0 0 0 2px;
		i {
			font-size: 30px;
		}
	}
	&__header {
		text-align: center;
		font-size: 24px;
		img {
			margin: 10px auto;
		}
	}
	&__body {
		flex: 1 1 auto;
		span {
			display: block;
			color: rgb(75, 75, 214);
			cursor: pointer;
		}
	}
	&__footer {
		flex: 0 0 auto;
		margin: 20px 0 0 0;
		width: 100%;
	}
}
</style>
