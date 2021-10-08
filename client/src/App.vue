<template>
  <div id="app" class="app">
    <div class="app__header">
      <AppHeader />
    </div>
    <div class="app__body">
      <router-view />
    </div>
    <div class="app__footer">
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f3f5;
  &__header {
    flex: 0 0 50px;
  }
  &__body {
    flex: 1 1 100%;
    padding: 20px;
  }
  &__footer {
    flex: 0 0 50px;
  }
}
</style>