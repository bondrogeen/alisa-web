<template>
  <div class="footer">
    <div class="footer__copyright">
      <p>{{ `Copyright © «Alisa web», ${new Date().getFullYear()}` }}</p>
      <a href="https://github.com/bondrogeen/alisa-web" target="blank"><i class="icon icon-github" @click="click"></i></a>
      <span class="footer__version">ver.{{ $config.version }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 100%;
  background-color: #6839cf;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  user-select: none;
  &__copyright {
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    p {
      margin: 0 10px 0 0;
    }
    span {
      font-size: 14px;
      color: darkgrey;
    }
    a {
      color: azure;
    }
    .icon-github {
      font-size: 1.2em;
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>