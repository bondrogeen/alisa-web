<template>
	<div class="card-login">
		<div v-if="!getToken" class="card-login__fab" @click="getToken = true">
			<i class="icon icon-chevron-left"></i>
		</div>
		<div class="card-login__header">
			<div>
				<img width="70px" height="70px" src="/images/logo-alisa.jpg" alt="" />
				<p v-if="getToken">Log in wich Yandex Token</p>
				<p v-else>Log in wich Yandex ID</p>
			</div>
		</div>
		<div class="card-login__body">
			<template v-if="getToken">
				<a-field label="Token" :error="error">
					<a-input v-model="token" type="text" placeholder="Enter your token" @focus="error = ''" />
				</a-field>
			</template>
			<template v-else>
				<a-field label="Login">
					<a-input v-model="username" type="text" placeholder="Enter your login" @focus="error = ''" />
				</a-field>
				<a-field :error="error" label="Password">
					<a-input v-model="password" type="password" placeholder="Enter your password" @focus="error = ''" />
				</a-field>
			</template>
			<span v-if="getToken" @click="getToken = false">Get token</span>
			<!-- <span v-else @click="getToken = true">Login token</span> -->
		</div>
		<div class="card-login__footer">
			<a-button full color="primary" :disabled="disabled" :loading="loading" @click="getToken ? onConection() : onYandexToken()">
				{{ getToken ? 'Login' : 'Get token' }}
			</a-button>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { serviceStore, storeToRefs } from '@/store/';

const store = serviceStore();
const { onYandexToken, onConection } = store;
const { token, getToken, username, password, error, loading } = storeToRefs(store);

const disabled = computed(() => Boolean(!username.value || !password.value));
</script>

<style lang="scss" scoped>
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
		display: flex;
		justify-content: center;
		flex: 0 0 130px;
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
