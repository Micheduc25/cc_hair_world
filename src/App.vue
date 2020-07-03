<template>
  <v-app class="myApp">
    <my-header></my-header>
    <v-main>hello guys</v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script lang="ts">
import Header from " ./components/global/Header.vue";
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
