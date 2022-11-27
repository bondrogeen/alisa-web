<template>
  <label class="a-checkbox">
    <input :checked="modelValue" class="a-checkbox__input" type="checkbox" @change="onChange" />
    <span class="a-checkbox__mark"></span>
    <slot></slot>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  modelValue: { type: [Boolean, Number], default: false },
});
const emit = defineEmits(['update:modelValue']);
const onChange = ({ target }) => emit('update:modelValue', target.checked);
</script>

<style lang="scss">
$borderRadius: 4px;
$size: 18px;
.a-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &__mark {
    position: relative;
    display: block;
    height: $size;
    width: $size;
    border: 1px solid color('app', 'primary');
    border-radius: $borderRadius;
    margin-right: 10px;
    &::after {
      content: '';
      display: none;
      position: absolute;
      top: 45%;
      left: 50%;
      height: calc(60%);
      width: calc(30%);
      transform: translate(-50%, -50%) rotate(43deg);
      border-right: 2px solid color('app', 'white');
      border-bottom: 2px solid color('app', 'white');
    }
  }
  &__input:checked ~ &__mark {
    background-color: color('app', 'primary');
  }
  &__input:checked ~ &__mark::after {
    display: block;
  }
}
</style>
