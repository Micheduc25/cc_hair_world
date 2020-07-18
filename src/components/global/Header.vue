<template>
  <div id="header-and-progress">
    <header id="header" class="app-header">
      <div class="logo">
        <router-link to="/">
          <img width="50px" height="50px" src="../../assets/images/cc_logo.jpg" alt="logo" />
        </router-link>
        <span>CC-HairWorld</span>
      </div>

      <!-- <div class="search-bar">
        <div class="search-bar-main">
          <input type="text" />
          <span>X</span>
        </div>
      </div>-->

      <nav class="navigation-large">
        <ul id="small-menu" class="not-visible">
          <li>
            <router-link class="router-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/products">Our Products</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/about">About Us</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/contact">Contact Us</router-link>
          </li>
          <li>
            <router-link
              class="router-link auth"
              :to="{name:'auth',params: { procedure: 'login' }}"
              :exact="true"
            >Login</router-link>
          </li>

          <li>
            <router-link
              class="router-link auth"
              :to="{name:'auth',params: { procedure: 'signup' }}"
              :exact="true"
            >Sign Up</router-link>
          </li>
        </ul>
        <menu-icon @clicked="menuClicked"></menu-icon>
      </nav>
    </header>
    <div ref="progress" id="header-progress"></div>
  </div>
</template>

<script lang="ts">
import MenuIcon from "../special/MenuIcon";
export default {
  components: {
    "menu-icon": MenuIcon
  },
  data() {
    return {
      searchKey: "",
      scrollPosition: 0,
      scrollingDown: false,
      menuVisible: false
    };
  },

  methods: {
    menuClicked() {
      const menu = document.getElementById("small-menu");
      // const btn = document.getElementById("my-menu-icon");
      if (menu != null) {
        menu.classList.toggle("not-visible");
        menu.classList.toggle("visible");

        this.menuVisible = !this.menuVisible;
        console.log(this.menuVisible);
      }
    }
  },

  watch: {
    scrollPosition(newVal: number, oldVal: number) {
      if (newVal > oldVal) {
        //scrolling down
        this.scrollingDown = true;
      } else if (newVal < oldVal) {
        //scrolling up
        this.scrollingDown = false;
      } else {
        //at same spot
      }
    }
  },

  mounted() {
    window.onload = () => {
      const header = document.getElementById("header-and-progress");
      const home = document.getElementById("app-home");

      document.documentElement.addEventListener("click", () => {
        if (this.menuVisible === true) {
          const btn = document.getElementsByClassName("btn")[0];
          btn.classList.toggle("active");
          btn.classList.toggle("not-active");
          this.menuClicked();
        }
      });

      window.addEventListener("scroll", () => {
        this.scrollPosition = window.scrollY;

        const progressBar = document.getElementById("header-progress");

        if (progressBar != null) {
          progressBar.style.width =
            (
              (100 * this.scrollPosition) /
              (document.documentElement.scrollHeight - window.innerHeight)
            ).toString() + "%";

          // if (this.scrollingDown && header != null) {
          //   header.classList.replace("fixed", "normal");
          // } else if (!this.scrollingDown && header != null) {
          //   header.classList.replace("normal", "fixed");
          // }
          // console.log(progressBar.style.width);
        }
      });

      console.log("header is", header);
      if (header != null && home != null) {
        header.classList.add("fixed");
        console.log(header.classList);
        home.style.marginTop = `${header.offsetHeight}px`;
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;

.fixed {
  position: fixed;
  z-index: 10;
  // margin-bottom: 100px;
}

.normal {
  position: static;
}

#header {
  transition: 0.4s;
}

#header-and-progress {
  width: 100%;
  .app-header {
    font-family: "Fira Sans", sans-serif;
    background-color: #1e0c0c;
    padding: 10px 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5rem;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 700px) {
      padding: 10px 2px 10px 20px;
    }

    .logo {
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }

      span {
        color: white;
      }
    }

    .router-link:hover {
      color: $primary-color !important;
      background-color: white;
    }

    .navigation-large {
      ul {
        list-style: none;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
        display: flex;
        align-items: center;
        height: 100%;
        transition: 0.5s;

        li:not(:last-child) {
          margin-right: 20px;
        }

        li {
          .router-link {
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1.3rem;

            transition: 0.3s;

            &.auth {
              padding: 10px 5px;
            }

            @media (max-width: 828px) {
              padding: 10px 10px;
            }
          }

          .router-link-exact-active.router-link-active {
            text-decoration: underline !important;
            text-decoration-color: white !important;
          }
        }

        @media (max-width: 700px) {
          & {
            &.not-visible {
              height: 0;
              // padding: 0;
            }
            &.visible {
              height: 260px;
              // padding: 5px 10px 10px 10px;
            }
            overflow-y: hidden;

            z-index: 5;
            position: absolute;
            width: 100%;
            top: 100%;
            right: 0;
            flex-direction: column;
            background-color: #1e0c0c;
            align-items: center;

            li:not(:last-child) {
              margin-right: 0px;
              // border-bottom: 1px solid white;
              margin-bottom: 10px;
            }

            li {
              width: 100%;

              .router-link {
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 70%;

                padding: 0px 0px;
                padding: 5px 0;

                border-radius: 5px;
              }

              .router-link-exact-active.router-link-active {
                text-decoration: none !important;
                text-decoration-color: none !important;
                background-color: white !important;
                color: $primary-color !important;
              }
            }
          }
        }
      }

      @media (max-width: 700px) {
        position: relative;
        width: 40%;
      }
    }
  }

  #header-progress {
    background-color: yellow;
    z-index: 10;
    height: 3px;
  }
}
</style>
