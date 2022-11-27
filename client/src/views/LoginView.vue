<template>
	<div class="page-login">
		<div class="page-login__inner">
			<div class="card-login">
				<div v-if="!isFormToken" class="card-login__fab" @click="isFormToken = true">
					<i class="icon icon-chevron-left"></i>
				</div>
				<div class="card-login__header">
					<img width="70" height="70" src="/images/logo-alisa.jpg" alt="" />
					<h2>{{ isFormToken ? 'Connection' : 'Login Yandex' }}</h2>
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
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { serviceStore, storeToRefs } from '@/store/';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = serviceStore();

const { token } = storeToRefs(store);
const form = ref({ username: '', password: '' });
const isFormToken = ref(true);
const loading = ref(false);

const disabled = computed(() => Boolean(isFormToken.value ? !token.value : !form.value.username || !form.value.password));

const onConection = async () => {
	loading.value = true;
	const res = await store.onInit();
	if (res) router.push('/');
	loading.value = false;
};

const onYandexToken = async () => {
	loading.value = true;
	const res = await store.onYandexToken(form.value);
	if (res) isFormToken.value = true;
	loading.value = false;
};
</script>

<style lang="scss">
.page-login {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	&__inner {
		width: 400px;
		max-width: 400px;
	}
}
.card-login {
	position: relative;
	height: 100%;
	width: 100%;
	color: color('app', 'black');
	background-color: color('app', 'white');
	border-radius: 10px;
	padding: 20px;
	user-select: none;
	&__fab {
		position: absolute;
		top: 30px;
		left: -20px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: color('app', 'white');
		box-shadow: 2px 1px 4px 0px rgb(0 0 0 / 46%);
		cursor: pointer;
		i {
			font-size: 30px;
		}
	}
	&__header {
		text-align: center;
		img {
			margin: 10px auto;
		}
	}
	&__body {
		span {
			display: block;
			color: color('app', 'primary');
			cursor: pointer;
		}
	}
	&__footer {
		margin: 20px 0 0 0;
		width: 100%;
	}
}
</style>
