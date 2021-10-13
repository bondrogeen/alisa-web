<template>
  <div class="player-seekbar">
    <div class="player-seekbar__time">
      <span>{{ lastTime }}</span>
      <span>{{ time }}</span>
    </div>
    <div class="player-seekbar__slider" ref="slider" @click="click">
      <div class="player-seekbar__line"></div>
      <div class="player-seekbar__pointer" :style="`left: calc(${line}% - 10px)`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player-seekbar',
  props: {
    duration: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    line() {
      return Math.round((this.progress * 1000) / this.duration) / 10;
    },
    time() {
      var date = new Date(null);
      date.setSeconds(this.duration);
      return date.toISOString().substr(14, 5);
    },
    lastTime() {
      var date = new Date(null);
      date.setSeconds(this.progress);
      return date.toISOString().substr(14, 5);
    },
  },
  methods: {
    click({ layerX }) {
      const width = this.$refs.slider.clientWidth;
      const percent = Math.round((layerX * 100) / width / 10) * 10;
      this.$emit('command', {
        command: 'rewind',
        position: this.duration / 100 * percent,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin';
.player-seekbar {
  &__time {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
  }
  &__slider {
    position: relative;
    cursor: pointer;
    height: 10px;
    display: flex;
    align-items: center;
  }
  &__line {
    height: 2px;
    background-color: rgb(211, 120, 0);
    width: 100%;
  }
  &__pointer {
    position: absolute;
    background-color: rgb(226, 211, 192);
    top: calc(50% - 10px);
    left: 30px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
}
</style>