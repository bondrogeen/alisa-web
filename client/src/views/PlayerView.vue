<template>
  <div class="page-player">
    <div class="page-player__inner">
      <Player v-bind="message" @command="command"/>
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
  // computed: {
  //   message() {
  //     return this.$store.getters['socket/getMessage'](this.$route.params.id )
  //   }
  // },
  // methods: {
  //   command(message) {
  //     // console.log(message)
  //     this.$socket.emit('send', { id: this.$route.params.id, message });
  //   }
  // }
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
