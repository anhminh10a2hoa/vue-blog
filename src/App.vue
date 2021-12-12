<template>
  <div id="app" class="mt-20">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './src/assets/styles/index.scss';

#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: auto;
  background-color: $background-color-dark-mode;
}
</style>