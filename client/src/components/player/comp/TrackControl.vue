<template>
  <div class="player-track">
    <i class="icon icon-skip-back" :class="{ disabled: !hasPrev }" @click="command('prev', hasPrev)"></i>
    <i v-if="playing" class="icon icon-pause" @click="command('stop', true)"></i>
    <i v-else class="icon icon-play" @click="command('play', true)"></i>
    <i class="icon icon-skip-forward" :class="{ disabled: !hasNext }" @click="command('next', hasNext)"></i>
  </div>
</template>

<script>
export default {
  name: 'player-track',
  props: {
    playing: Boolean,
    hasNext: Boolean,
    hasPause: Boolean,
    hasPlay: Boolean,
    hasPrev: Boolean,
  },
  methods: {
    command(comm, isTrue) {
      console.log(isTrue)
      if (isTrue) {
        this.$emit('command', { command: comm });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin';
.player-track {
  .icon {
    @include icon-hover;
    margin: 0 10px;
  }
}
</style>