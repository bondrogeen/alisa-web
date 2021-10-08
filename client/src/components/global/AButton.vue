<template>
  <button class="a-button" :class="[`a-button--${color}`, { 'a-button--full': full }]" @click="$emit('click', $event)">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'a-button',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    color: String,
    full: Boolean
  },
};
</script>

<style lang="scss" scoped>
.a-button {
  padding: 6px 12px;
  min-height: 32px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #1e2121;
  background-color: #d4d4d4;
  transition: all 0.2s ease-out;

  &--full {
    width: 100%;
  }
  &--primary {
    background-color: blueviolet;
    color: aliceblue;
  }
  &:hover {
    opacity: 0.7;
  }
}
</style>