<template>
  <div class="login-signup-container">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import signUpForm from "../components/forms/SignUpForm";
import loginForm from "../components/forms/LoginForm";
export default Vue.extend({
  components: {
    "signup-form": signUpForm,
    "login-form": loginForm
  },

  data() {
    return { currentComponent: null };
  },
  computed: {},

  watch: {
    $route(to, from) {
      this.currentComponent =
        this.$router.currentRoute.params.procedure === "login"
          ? loginForm
          : signUpForm;
    }
  },

  mounted() {
    this.currentComponent =
      this.$router.currentRoute.params.procedure === "login"
        ? loginForm
        : signUpForm;
  }
});
</script>

<style lang="scss" scoped>
.login-signup-container {
  background: url(),
    linear-gradient(45deg, rgb(185, 183, 183), #666, rgb(184, 183, 183));
}
</style>
