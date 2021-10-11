<template>
  <div class="page-home">
    <div class="page-home__title">My devices</div>
    <div class="page-home__devices">
      <div v-for="(device, i) of devices" :key="i" class="page-home__list">
        <Device v-bind="device" />
      </div>
      <div v-if="!devices.length" class="page-home__list page-home__empty">
        <span>Add</span>
      </div>
    </div>
  </div>
</template>

<script>
import Device from '../components/home/card/Device';
export default {
  name: 'Home',
  components: {
    Device,
  },
  data: () => ({
  }),
  computed: {
    devices () {
      return this.$store.getters['socket/getDevices']
    }
  }
};
</script>

<style lang="scss" scoped>
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__empty {
    margin: 10px 0;
    height: 220px;

    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    // opacity: 0.5;
    &:hover {
      // opacity: 0.6;
      box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
    span {
      font-size: 25px;
      color: rgb(8, 8, 14);
    }
  }
  &__list {
    width: 100%;
    margin: 15px 0;
  }
  &__devices {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2%;
  }
  &__title {
    flex: 0 0 80px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (min-width: 600px) {
  .page-home {
    &__list {
      width: 48%;
    }
  }
}
@media screen and (min-width: 900px) {
  .page-home {
    &__list {
      width: 32%;
    }
  }
}
@media screen and (min-width: 1200px) {
  .page-home {
    &__list {
      width: 18%;
    }
  }
}
</style>
