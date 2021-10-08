<template>
  <div class="page-player">
    <div class="page-player__inner">
      <div class="card">
        <div class="card__header">
          <h1>Play now</h1>
        </div>
        <div class="card__preview" :style="{ backgroundImage: `url(https://${coverURI})` }"></div>
        <div class="card__body">
          <h3 class="card__title">{{ playerState.title }}</h3>
          <p class="card__subtitle">{{ playerState.subtitle }}</p>
        </div>
        <div class="card__control">
          <div class="card__time">
            <span>{{ lastTime }}</span>
            <span>{{ time }}</span>
          </div>
          <div class="card__slider">
            <div class="line"></div>
            <div class="pointer" :style="{ left: `${line}%` }"></div>
          </div>
          <div class="card__buttons">
            <i class="icon icon-skip-back"></i>
            <i v-if="state.playing" class="icon icon-play"></i>
            <i v-else class="icon icon-pause"></i>
            <i class="icon icon-skip-forward"></i>
          </div>
        </div>
        <div class="card__footer">
          <i class="icon icon-pause"></i>
          <i class="icon icon-volume-1"></i>
          <i class="icon icon-volume-2"></i>
          <i class="icon pause"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'page-player',
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters({
      message: 'socket/getMessage',
    }),
    playerState() {
      return this.message.state.playerState;
    },
    state() {
      return this.message.state;
    },
    coverURI() {
      return this.extra.coverURI.replace('%%', '200x200');
    },
    extra() {
      return this.playerState.extra;
    },
    line() {
      return (this.playerState.progress * 100) / this.playerState.duration;
    },
    time() {
      var date = new Date(null);
      date.setSeconds(this.playerState.duration);
      return date.toISOString().substr(14, 5);
    },
    lastTime() {
      var date = new Date(null);
      date.setSeconds(this.playerState.progress);
      return date.toISOString().substr(14, 5);
    },
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
    background: #091227;
  }
}
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #56617e;
  &__time {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
  }
  &__slider {
    padding: 10px 20px;
    position: relative;

    .line {
      height: 2px;
      background-color: rgb(211, 120, 0);
    }
    .pointer {
      position: absolute;
      background-color: rgb(226, 211, 192);
      top: calc(50% - 10px);
      left: 30px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
    }
  }
  &__title {
    color: aliceblue;
    font-size: 1.5em;
  }
  &__subtitle {
  }
  &__buttons {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    i {
      font-size: 36px;
      margin: 0 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  &__header {
    flex: 0 0 100px;
    display: flex;
    justify-content: center;
  }
  &__preview {
    margin: auto;
    height: 200px;
    width: 200px;
    background: no-repeat;
  }
  &__body {
    flex: 1 1 auto;
    text-align: center;
  }
  &__control {
    flex: 1 1 auto;
  }
  &__footer {
    flex: 0 0 200px;
  }
}
</style>
