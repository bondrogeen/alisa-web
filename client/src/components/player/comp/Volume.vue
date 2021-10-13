<template>
  <div class="player-volume" v-click-outside="outside">
    <slot name="btn">
      <i class="icon icon-volume-2" @click="value = true"></i>
    </slot>
    <div
      :class="['player-volume__body', { 'player-volume__body--show': value }]"
      ref="body"
      @wheel="wheel"
      @click="click"
    >
      <div class="player-volume__value" :style="getValue"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player-volume',
  props: {
    volume: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    value: false,
    move: false,
  }),
  computed: {
    volumeTemp: {
      set(value) {
        this.$emit('command', {
          command: 'setVolume',
          volume: value / 100,
        });
      },
      get() {
        return this.volume * 100;
      },
    },
    getValue() {
      return { width: `${this.volumeTemp}%` };
    },
  },
  methods: {
    outside() {
      this.value = false;
    },
    click({ layerX }) {
      const width = this.$refs.body.clientWidth;
      this.volumeTemp = Math.round((layerX * 100) / width / 10) * 10;
    },
    wheel({ deltaY }) {
      const value = this.volumeTemp + (deltaY < 0 ? 10 : -10);
      if (value >= 0 && value <= 100) {
        this.volumeTemp = value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin';
.player-volume {
  position: relative;
  i {
    @include icon-hover;
  }
  &__body {
    position: absolute;
    top: 0;
    left: 30px;
    width: 150px;
    height: 30px;
    background-color: white;
    border-radius: 15px;
    // padding: 2px;
    overflow: hidden;
    border: 2px solid white;
    display: none;
    &--show {
      display: block;
    }
  }
  &__value {
    transition: all 0.2s ease-out;
    background-color: #6839cf;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
}
</style>