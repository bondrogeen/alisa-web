<template>
  <div class="page-login">
    <div class="page-login__inner">
      <Login />
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-login',
  components: {
    Login: () => import('@/components/login'),
  },
};
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
    height: 400px;
  }
}
</style>