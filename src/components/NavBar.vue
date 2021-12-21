<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  mounted() {
    let menu: HTMLElement | null = document.querySelector('#menu');
    let menu_bar: HTMLElement | null = document.querySelector('#menu-bar');

    const activeMenuBar = () => {
      menu?.classList.toggle('menu-toggle');
    };

    menu_bar?.addEventListener('click', activeMenuBar);
  }
});
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <ul class="menu" id="menu">
      <li><a href="#">Works</a></li>
      <li><a href="#">Posts</a></li>
    </ul>

    <div class="menu-bar" id="menu-bar">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  background-color: $background-color-dark-mode;
  color: $text-color-dark-mode;
  display: grid;
  position: relative;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  box-shadow: 0 0 10px rgba(121, 142, 160, 0.164);
  height: 56px;

  svg {
    width: 30px;
    color: #333;
  }

  .logo {
    position: relative;
    display: flex;
    grid-column: 1/2;
    justify-content: center;
  }

  .menu {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: $background-color-dark-mode;
    transform: translateX(200%);
    transition: transform 0.5s;

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      font-weight: 0;
      color: $text-color-dark-mode;
    }
  }

  .menu-bar {
    display: block;
    grid-column: 8/9;
    cursor: pointer;
  }

  .shooping {
    display: none;
  }

  .menu-toggle {
    transform: translateX(0%);
  }
}

@media only screen and (min-width: 600px) {
  .navbar {
    .menu-bar {
      display: none;
    }

    .menu {
      position: relative;
      grid-column: 4/6;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: none;
      height: auto;
    }
  }
}
</style>
