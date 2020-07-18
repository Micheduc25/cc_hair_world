<template>
  <v-app class="myApp">
    <my-header></my-header>

    <router-view></router-view>

    <my-footer></my-footer>
  </v-app>
</template>

<script lang="ts">
import Header from "./components/global/Header.vue";
import Footer from "./components/global/Footer.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    "my-header": Header,
    "my-footer": Footer
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;

html {
  font-size: 62.5% !important;
}

.v-carousel__item .v-image__image--cover {
  background-size: contain !important;
  background-color: black;
}

.router-link-exact-active .router-link-active {
  color: red;
}
a {
  text-decoration: none;
  color: $primary-color-light !important;
}

ul {
  list-style: none;
}
</style>
