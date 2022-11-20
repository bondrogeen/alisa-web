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
			<a-button full color="primary" :disabled="notEmpty" :loading="loading" @click="getToken ? getDevices() : getYandexToken()">
				{{ getToken ? 'Login' : 'Get token' }}
			</a-button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const getToken = ref(true);
const username = ref('');
const password = ref('');
const token = ref('');
const error = ref('');
const loading = ref(false);

// 	computed: {
// 		notEmpty() {
// 			if (this.getToken) {
// 				return !this.token;
// 			} else {
// 				return !this.username || !this.password;
// 			}
// 		},
// 		isToken() {
// 			return this.$store.getters['socket/getToken'];
// 		},
// 	},
// 	sockets: {
// 		token: function ({ status, message }) {
// 			if (status === 'done') {
// 				this.$router.push('/');
// 			} else {
// 				this.error = message || 'WTF';
// 			}
// 			this.loading = false;
// 		},
// 	},
// 	methods: {
// 		async getDevices() {
// 			this.loading = true;
// 			this.$socket.emit('token', { token: this.token });
// 		},
// 		async getYandexToken() {
// 			if (this.username || this.password) {
// 				this.loading = true;
// 				const formData = new FormData();
// 				const data = {
// 					grant_type: 'password',
// 					client_id: '23cabbbdc6cd418abb4b39c32c41195d',
// 					client_secret: '53bc75238f0c4d08a118e51fe9203300',
// 					username: this.username,
// 					password: this.password,
// 				};
// 				for (const name in data) {
// 					formData.append(name, data[name]);
// 				}
// 				try {
// 					const data = await fetch('https://oauth.yandex.com/token', {
// 						method: 'POST',
// 						body: formData,
// 					}).then((response) => {
// 						return response.json();
// 					});
// 					if (data?.error && !data?.access_token) {
// 						this.error = data.error_description;
// 					} else {
// 						this.getToken = true;
// 						this.token = data.access_token;
// 					}
// 					console.log(data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			}
// 			this.loading = false;
// 		},
// 	},
// };
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
