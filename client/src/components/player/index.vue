<template>
  <div class="card-player">
    <div class="card-player__header hover">
      <i class="icon icon-arrow-left" @click="$router.back()"></i>
      <h1>Play now</h1>
    </div>
    <div class="card-player__preview" :style="{ backgroundImage: `url(https://${coverURI})` }"></div>
    <div class="card-player__body hover">
      <i class="icon icon-heart"></i>
      <div>
        <h3 class="card-player__title">{{ playerState.title }}</h3>
        <p class="card-player__subtitle">{{ playerState.subtitle }}</p>
      </div>
    </div>
    <div class="card-player__control">
      <div class="card-player__time">
        <span>{{ lastTime }}</span>
        <span>{{ time }}</span>
      </div>
      <div class="card-player__slider">
        <div class="line"></div>
        <div class="pointer" :style="{ left: `${line}%` }"></div>
      </div>
      <div class="card-player__buttons">
        <div class="card-player__track hover">
          <i class="icon icon-skip-back"></i>
          <i v-if="state.playing" class="icon icon-play"></i>
          <i v-else class="icon icon-pause"></i>
          <i class="icon icon-skip-forward"></i>
        </div>
        <div class="card-player__volume hover">
          <i class="icon icon-volume-2"></i>
          <!-- <span>0.1</span> -->
          <!-- <i class="icon icon-volume-1"></i> -->
        </div>
      </div>
    </div>
    <div class="card-player__footer">
      <span class="card-player__line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-player',
  components: {},
  props: {
    message: {
      type: Object,
      default: Object,
    },
  },
  data: () => ({}),
  computed: {
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
$fontSize: 32px;

.card-player {
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
    text-align: center;
  }
  &__subtitle {
    text-align: center;
    font-size: 1.2em;
  }
  &__header {
    flex: 0 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    i {
      position: absolute;
      left: 10px;
      margin: 0 10px;
    }
  }
  &__preview {
    margin: auto;
    height: 200px;
    width: 200px;
    background: no-repeat;
  }
  &__body {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    i {
      position: absolute;
      right: 10px;
      margin: 0 10px;
    }
  }
  &__control {
    flex: 1 1 auto;
  }
  &__buttons {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    position: relative;
    i {
      margin: 0 10px;
    }
  }
  &__volume {
    position: absolute;
    left: 0;
    i {
      margin: 0 20px;
    }
  }
  &__track {
  }
  &__footer {
    flex: 0 0 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  &__line {
    height: 3px;
    width: 30%;
    display: block;    
    background-color: azure;
  }
}
.hover {
  i {
    cursor: pointer;
    font-size: $fontSize;
    transition: all 0.2s ease-out;
    &:hover {
      color: azure;
    }
  }
}
</style>
