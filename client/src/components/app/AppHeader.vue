<template>
	<div class="app-header">
		<div class="app-header__inner container">
			<div class="app-header__brand text-h4" @click="$router.push({ name: 'Home' })">Alisa Web</div>
			<div class="app-header__center"></div>
			<div class="app-header__profile">
				<a-dropdown v-if="token">
					<template #activator="{ on }">
						<i class="icon icon-settings" @click="on.click"></i>
					</template>
					<a-list :list="menus" @click="onEvent"></a-list>
				</a-dropdown>
				<i v-else class="icon icon-user"></i>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
	token: { type: String, default: '' },
	devices: { type: Array, default: () => [] },
});

const emit = defineEmits(['event']);

const menus = [{ name: 'Scan', icon: 'icon-user', path: '' }];

const onEvent = (item) => emit('event', item);
</script>

<style lang="scss" scoped>
.app-header {
	height: 100%;
	background: color('app', 'secondary');
	user-select: none;
	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
	&__profile {
		i {
			font-size: 24px;
		}
	}
}
</style>
