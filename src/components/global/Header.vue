<template>
  <header class="app-header">
    <div class="logo">
      <router-link to="/">
        <img width="50px" height="50px" src="../../assets/images/cc_logo.jpg" alt="logo" />
      </router-link>
      <span>CC-HairWorld</span>
    </div>

    <div class="search-bar">
      <input type="text" />
    </div>

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
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchKey: ""
    };
  }
};
</script>



<style lang="scss" scoped>
$primary-color: #1e0c0c;
.app-header {
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
</style>
