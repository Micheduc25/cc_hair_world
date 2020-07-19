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
import { Auth } from "@/firebase/auth";
import { mapActions } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    "my-header": Header,
    "my-footer": Footer,
  },

  data: () => ({
    //
  }),

  methods: {
    ...mapActions(["set_show_signup"]),
  },

  mounted() {
    const user = Auth.currentUser;
    if (user === null) {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (email != null && password != null) {
        Auth.signInWithEmailAndPassword(email, password).then(
          () => {
            this.set_show_signup(false);
            console.log("user successfully signed in");
          },
          (err) => {
            console.log("could not sign in user ", err);
            this.set_show_signup(true);
          }
        );
      } else {
        this.set_show_signup(true);
        console.log(
          " not good ohhhhhh user email is ",
          email,
          " password is ",
          password
        );
      }
    } else {
      this.set_show_signup(false);
      console.log("user already signed in oh");
    }
  },
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
