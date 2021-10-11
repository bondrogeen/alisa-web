<template>
  <div class="header">
    <div class="header__brand" @click="$router.push('/login')">Alisa Web</div>
    <div class="header__center"></div>
    <div class="header__profile" @click="settings = true">
      <a-dropdown v-model="settings" :menus="menus">
        <template  v-slot:btn>
          <i v-if="login" class="icon icon-settings"></i>
          <i v-else class="icon icon-user"></i>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  computed: {
    login() {
      return true;
    },
  },
  data: () => ({
    settings: false,
    menus: [
      { title: 'Profile', icon: 'icon-user', path: '' },
      { title: 'Exit', icon: 'icon-log-out', path: '' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  background: #3c1199;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  user-select: none;
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