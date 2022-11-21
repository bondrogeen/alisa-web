<template>
	<div class="page-login">
		<div class="page-login__inner">
			<CardForm />
		</div>
	</div>
</template>

<script setup>
import CardForm from '@/components/login/CardForm';
</script>

<style lang="scss" scoped>
.page-login {
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	&__inner {
		width: 400px;
	}
}
</style>
