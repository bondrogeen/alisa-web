<template>
  <div class="device">
    <div class="device__header"></div>
    <div class="device__body">
      <div class="device__inner">
        <div class="device__image">
          <img height="100" width="100" :src="src" :alt="title" />
        </div>
        <p class="device__title">{{ title }}</p>
        <p class="device__subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="device__footer">
      <a-button full color="primary" @click="click">Управлять</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardDevice',
  props: {
    id: String,
    src: {
      type: String,
      default: '/images/mini.jpg',
    },
    title: {
      type: String,
      default: 'Умные колонки',
    },
    subtitle: {
      type: String,
      default: 'Yandex Mini',
    },
  },
  methods: {
    click() {

      this.$router.push('player/' + 1)
      // console.log('click');
      // this.$socket.emit('message', { test: 'sdds' });
      // fetch('/ws').then(data => {
      //   console.log(data);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.device {
  width: 100%;
  min-width: 200px;
  padding: 20px;
  height: 220px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  &__image {
    display: flex;
    justify-content: center;
  }
  &__title {
    font-size: 18px;
    text-align: center;
  }
  &__subtitle {
    font-size: 14px;
    text-align: center;
  }
  &__body {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
  }
  &__inner {
    display: flex;
    flex-direction: column;
  }
  &__footer {
    flex: 0 0;
  }
}
</style>