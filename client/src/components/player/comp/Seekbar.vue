<template>
  <div class="player-seekbar">
    <div class="player-seekbar__time">
      <span>{{ lastTime }}</span>
      <span>{{ time }}</span>
    </div>
    <div :class="['player-seekbar__slider', { 'player-seekbar__slider--disabled': !hasProgressBar }]" ref="slider">
      <div class="player-seekbar__line" @click="click"><div></div></div>
      <div class="player-seekbar__pointer" :style="`left: calc(${line}% - 10px)`" @mousedown="mousedown"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player-seekbar',
  inheritAttrs: false,
  props: {
    duration: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Number,
      default: 0,
    },
    type: String,
    hasProgressBar: Boolean,
  },
  data: () => ({
    hasMove: false,
    position: 0,
    saveState: 0,
  }),
  computed: {
    line() {
      const state =
        this.hasMove && this.position ? this.position : Math.round((this.progress * 1000) / this.duration) / 10;
      return isNaN(state) ? 0 : state;
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
      if (this.hasProgressBar) {
        const width = this.$refs.slider.clientWidth;
        const percent = Math.round((layerX * 100) / width);
        this.position = percent;
        this.sendRewind(percent);
      }
    },
    onMouseMove({ clientX }) {
      if (this.hasMove && this.$refs.slider) {
        const { offsetLeft, clientWidth } = this.$refs.slider;
        const left = offsetLeft;
        const right = offsetLeft + clientWidth;
        if (clientX > left && clientX < right) {
          const percent = Math.round(((clientX - offsetLeft) * 100) / clientWidth);
          this.position = percent;
        }
      }
    },
    sendRewind(percent) {
      this.$emit('command', {
        command: 'rewind',
        position: Math.round((this.duration / 100) * percent),
      });
    },
    mousedown() {
      this.hasMove = true;
    },
    mouseup() {
      if (this.hasMove) {
        this.hasMove = false;
        this.sendRewind(this.position);
      }
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.mouseup);
  },
  unmounted() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.mouseup);
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
    user-select: none;
  }
  &__slider {
    user-select: none;
    position: relative;
    height: 10px;
    display: flex;
    align-items: center;
    &--disabled {
      opacity: 0.7;
      cursor: default;
    }
  }
  &__line {
    height: 8px;
    width: 100%;
    cursor: pointer;
    padding: 3px 0;
    div {
      height: 2px;
      background-color: rgb(211, 120, 0);
      width: 100%;
    }
  }
  &__pointer {
    position: absolute;
    background-color: rgb(226, 211, 192);
    top: calc(50% - 10px);
    left: 30px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: grab;
  }
}
</style>