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
import emailVerification from "@/components/forms/emailVerification";
export default Vue.extend({
  components: {
    "signup-form": signUpForm,
    "login-form": loginForm,
    "email-verification": emailVerification,
  },

  data() {
    return {
      currentComponent: null,

      defaultLoginEmail: "",
      defaultLoginPassword: "",
    };
  },

  // methods: {
  //   onVerificationSuccess() {
  //     this.$emit("verificationSuccess");
  //   }
  // },
  computed: {},

  watch: {
    $route(to, from) {
      this.currentComponent =
        this.$router.currentRoute.params.procedure === "login"
          ? loginForm
          : this.$router.currentRoute.params.procedure === "signup"
          ? signUpForm
          : emailVerification;
    },
  },

  mounted() {
    this.currentComponent =
      this.$router.currentRoute.params.procedure === "login"
        ? loginForm
        : this.$router.currentRoute.params.procedure === "signup"
        ? signUpForm
        : emailVerification;
  },
});
</script>

<style lang="scss" scoped>
.login-signup-container {
  padding: 47px;
  background: url(../assets/images/auth/background.jpg),
    linear-gradient(45deg, rgb(185, 183, 183), #666, rgb(184, 183, 183));
  background-size: cover;
  background-position: center center;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
