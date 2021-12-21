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
    <div class="logo-container">
      <img class="logo" src="../assets/images/logo-image.png" />
      <p>Minh Hoang</p>
    </div>
    <ul class="menu" id="menu">
      <li><router-link to="/work">Work</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
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
  height: 56px;

  .logo-container {
    position: relative;
    display: flex;
    grid-column: 1/3;
    justify-content: center;
    align-items: center;

    .logo {
      height: 30px;
      margin-right: 5px;
    }
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

      &:hover {
        a {
          border-bottom: 1px solid white;
        }
      }
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
      grid-column: 3/5;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: none;
      height: auto;
    }
  }
}
</style>
