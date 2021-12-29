<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <div id="container">
    <NavBar />
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

#app {
  background-color: $background-color-dark-mode;
  color: $text-color-dark-mode;
  height: 100vh;
  font-family: 'OpenSansCondensed', sans-serif;
}
#container {
  text-align: center;
  margin: auto;
  max-width: $screen-max-width;
}
</style>
