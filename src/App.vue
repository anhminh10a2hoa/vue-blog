<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div id="container">
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">
  /* @import '@/assets/styles/index.scss'; */

  #app {
    background-color: $background-color-dark-mode;
    color: $text-color-dark-mode;
    height: 100vh;
  }

  #container {
    text-align: center;
    margin: auto;
    max-width: 760px;
  }
</style>
