<template>
	<div class="header">
		<div class="header__inner container">
			<div class="header__brand" @click="$router.push({ name: 'Home' })">Alisa Web</div>
			<div class="header__center"></div>
			<div class="header__profile">
				<a-dropdown>
					<template #activator="{ on }">
						<i class="icon" :class="token ? 'icon-settings' : 'icon-user'" @click="on.click"></i>
					</template>
					<a-list :list="menus"></a-list>
				</a-dropdown>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
	token: { type: String, default: '' },
});

const menus = [
	{ name: 'Profile', icon: 'icon-user', path: '' },
	{ name: 'Exit', icon: 'icon-log-out', path: '' },
];
</script>

<style lang="scss" scoped>
.header {
	height: 100%;
	background: #3c1199;
	user-select: none;
	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
	&__brand {
		font-size: 1.5em;
		font-weight: 700;
	}
	&__profile {
		i {
			font-size: 1.5em;
		}
	}
}
</style>
