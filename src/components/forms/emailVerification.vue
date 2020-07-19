<template>
  <div class="verification-container">
    <div class="verification-text">
      please verify your email address. Click on the verification link sent to
      you in your email. Then click on the button below.
    </div>

    <div class="i-have-verified">
      <button @click="checkUserVerification" class="i-have-verified-but">
        I have verified my email
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Auth } from "@/firebase/auth";
export default Vue.extend({
  name: "email-verification",

  methods: {
    async checkUserVerification() {
      let user = Auth.currentUser;

      console.log("user: ", user);

      if (user != null) {
        await Auth.updateCurrentUser(user);
        await user.reload().catch((err) => {
          console.log("an error occured while reloading user");
        });
        if (user.emailVerified) {
          //push with user name and password
          this.$emit("verificationSuccesss");
          await this.$router.push({
            name: "auth",
            params: { procedure: "login" },
          });
        } else {
          console.log("user has not verified his email");
        }
      } else {
        console.log("user is null");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.verification-container {
  width: 400px;
  border-radius: 5px;
  height: auto;
  box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background: white;
  font-size: 2.2rem;
  .verification-text {
    word-wrap: normal;
  }

  .i-have-verified {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    &-but {
      cursor: pointer;
      padding: 15px 30px;
      font-size: 1.7rem;
      background: $primary-color;
      color: white;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>
