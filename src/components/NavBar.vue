<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  data: function () {
    return {
      isDarkMode: true,
      isOpenMenuBar: false
    };
  },
  computed: {
    activeNavbar: function () {
      return true;
    }
  },
  methods: {
    activeMenuBar: function () {
      let menu: HTMLElement | null = document.querySelector('#menu-bar-container');
      if (menu && !this.isOpenMenuBar) {
        menu.style.display = 'block';
        this.isOpenMenuBar = true;
      } else if (menu && this.isOpenMenuBar) {
        menu.style.display = 'none';
        this.isOpenMenuBar = false;
      }
    },
    onChangeMode: function () {
      this.isDarkMode = !this.isDarkMode;
      const appContainer: HTMLElement | null = document.getElementById('app');
      if (appContainer) {
        if (this.isDarkMode) {
          appContainer.style.backgroundColor = 'rgb(32, 32, 35)';
        } else {
          appContainer.style.backgroundColor = '#f2ddc1';
        }
      }
    },
    activeNavBar: function () {}
  }
});
</script>

<template>
  <nav :class="{ darkModeNavbar: isDarkMode, lightModeNavbar: !isDarkMode }" class="navbar">
    <div class="logo-container">
      <img class="logo" src="../assets/images/logo-image.png" />
      <p>Minh Hoang</p>
    </div>
    <ul class="menu" id="menu">
      <li :class="{ activeNavbar: activeNavbar }"><router-link to="/work">Works</router-link></li>
      <li><router-link to="/blog">Blogs</router-link></li>
      <li>
        <a target="_blank" href="https://github.com/anhminh10a2hoa/my-blog-vue"
          ><i class="fa fa-github git-icon" style="font-size: 20px"></i> Source
        </a>
      </li>
    </ul>
    <div class="selection-container">
      <div
        :class="{ darkModeContainer: isDarkMode, lightModeContainer: !isDarkMode }"
        class="item-container"
        v-on:click="onChangeMode"
      >
        <svg
          v-if="isDarkMode"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="lightbulb"
          class="svg-inline--fa fa-lightbulb fa-w-11 mode-icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="black"
            d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
          ></path>
        </svg>
        <svg
          v-else
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="moon"
          class="svg-inline--fa fa-moon fa-w-16 mode-icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"
          ></path>
        </svg>
      </div>
      <div
        :class="{ darkModeMenuBarContainer: isDarkMode, lightModeMenuBarContainer: !isDarkMode }"
        class="item-container menu-bar-icon"
        v-on:click="activeMenuBar"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14 mode-icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="menu-bar-container" id="menu-bar-container">
      <div>Works</div>
      <div>Blogs</div>
      <div>View source</div>
    </div>
  </nav>
</template>

<style lang="scss">
.darkModeNavbar {
  background-color: $background-color-dark-mode;
  color: $text-color-dark-mode;

  .menu li {
    color: $text-color-dark-mode;
    a {
      color: $text-color-dark-mode;
    }
  }

  .menu-bar-container {
    background-color: $dark-mode-bg-color-menu-bar;
  }
}

.lightModeNavbar {
  background-color: $background-color-light-mode-navbar;
  color: $text-color-light-mode;

  .menu li {
    color: $text-color-light-mode;
    a {
      color: $text-color-light-mode;
    }
  }

  .menu-bar-container {
    background-color: $light-mode-bg-color-menu-bar;
  }
}

.navbar {
  display: flex;
  position: relative;
  align-items: center;
  height: 56px;
  padding-left: 8px;
  padding-right: 8px;

  .logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      height: $navbar-logo-size;
      margin-right: 5px;
    }

    p {
      font-weight: 700;
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
    font-size: 15px;
    display: none;

    li {
      list-style: none;
      cursor: pointer;

      &:hover {
        a {
          border-bottom: 1px solid $text-color-dark-mode;
        }
      }
    }

    a {
      text-decoration: none;
      font-weight: 0;
    }

    .activeNavbar {
      background-color: $active-navbar;
      padding: 10px;

      a {
        color: $active-navbar-text-color;
      }

      &:hover {
        a {
          border-bottom: 1px solid $active-navbar-text-color;
        }
      }
    }

    .git-icon {
      margin-right: 5px;
    }
  }

  .menu-bar-icon {
    display: block;
    cursor: pointer;
  }

  .item-container {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: 8px;
    cursor: pointer;

    .mode-icon {
      width: $navbar-icon-size;
      height: $navbar-icon-size;
    }
  }

  .darkModeContainer {
    background-color: $dark-mode-bg-color;
    &:hover {
      background-color: $dark-mode-bg-color-hover;
    }
  }

  .lightModeContainer {
    background-color: $light-mode-bg-color;
    &:hover {
      background-color: $light-mode-bg-color-hover;
    }
  }

  .darkModeMenuBarContainer {
    border: 1px solid rgba(255, 255, 255, 0.16);
    &:hover {
      background-color: #29292b;
    }
  }

  .lightModeMenuBarContainer {
    border: 1px solid #e2e8f0;
    &:hover {
      background-color: rgb(225, 242, 247);
    }
  }

  .selection-container {
    position: absolute;
    display: flex;
    right: 8px;
  }

  .menu-bar-container {
    display: none;
    position: absolute;
    right: 5px;
    top: 55px;
    margin: 0;
    min-width: max-content;
    border-radius: 0.375rem;

    div {
      width: 200px;
      height: 35px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 600px) {
  .navbar {
    .menu-bar-icon {
      display: none;
    }

    .menu {
      position: relative;
      display: flex;
      width: 220px;
      justify-content: space-between;
      align-items: center;
      transform: none;
      height: auto;
    }

    .menu-bar-container {
      display: none;
    }
  }
}
</style>
