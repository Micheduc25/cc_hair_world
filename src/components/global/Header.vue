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
        <ul>
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
        </ul>
      </nav>
    </header>
    <div ref="progress" id="header-progress"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchKey: "",
      scrollPosition: 0,
      scrollingDown: false
    };
  },

  watch: {
    scrollPosition(newVal, oldVal) {
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

    .navigation-large ul {
      list-style: none;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
      display: flex;
      align-items: center;
      height: 100%;

      li:not(:last-child) {
        margin-right: 30px;
      }

      li {
        .router-link {
          padding: 10px 30px;
          border-radius: 5px;

          transition: 0.3s;
        }

        .router-link-exact-active.router-link-active {
          text-decoration: underline !important;
          text-decoration-color: white !important;
        }
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
