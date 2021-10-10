<template>
  <div class="a-field">
    <label class="a-field__label">{{ label }}</label>
    <div class="a-field__body">
      <slot></slot>
    </div>
    <div class="a-field__hint">
      {{ error }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'a-field',
  props: {
    label: String,
    error: String
  },
};
</script>

<style lang="scss" scoped>
.a-field {
  &__label {
    color: black;
  }
  &__hint {
    height: 20px;
    color: rgb(199, 82, 82);
  }
}
</style>