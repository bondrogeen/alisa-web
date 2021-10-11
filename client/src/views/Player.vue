<template>
  <div class="page-player">
    <div class="page-player__inner">
      <Player :message="message" />
    </div>
  </div>
</template>

<script>
import Player from '@/components/player';
export default {
  name: 'page-player',
  components: {
    Player,
  },
  data: () => ({}),
  computed: {
    message() {
      return this.$store.getters['socket/getMessage'](this.$route.params.id )
    }
  },
};
</script>

<style lang="scss" scoped>
.page-player {
  height: 100%;
  display: flex;
  justify-content: center;
  &__inner {
    width: 800px;
  }
}
</style>
