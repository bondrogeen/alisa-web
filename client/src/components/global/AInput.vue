<template>
  <input :type="type" autocomplete="token" class="a-input" name="token" :placeholder="placeholder"/>
</template>


<script>
export default {
  name: 'a-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.a-input {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  height: 44px;
  border: none;
  border-bottom: 2px solid #8a2be2;
  color: #000;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  vertical-align: top;
  outline: 0;
  background: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &::placeholder {
  color: rgba(114, 114, 117, 0.514);
  font-size: 0.7em;
  font-weight: 400;
}
}
</style>