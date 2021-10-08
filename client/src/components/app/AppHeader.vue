<template>
  <div class="header">
    <div class="header__brand">Alisa Web</div>
    <div class="header__center"></div>
    <div class="header__profile">
      <a-button color="primary">Log in</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  user-select: none;
  &__brand {
    font-size: 1.5em;
    font-weight: 700;
  }
}
</style>