<template>
  <Form class="signUp-form">
    <div class="signUp-form__title">
      <h1>Create An Account</h1>
    </div>
    <div>
      <form-input
        @change="nameChange"
        :type="'text'"
        :label="'Name'"
        :placeholder="'Enter your name'"
      ></form-input>
      <template v-for="err in nameErr">{{err}}</template>
    </div>

    <div>
      <form-input
        @change="emailChange"
        :type="'text'"
        :label="'Email'"
        :placeholder="'Enter your e-mail'"
      ></form-input>
      <template v-for="err in emailErr">{{err}}</template>
    </div>

    <div>
      <form-input
        @change="passwordChange"
        :type="'password'"
        :label="'Password'"
        :placeholder="'Enter your password'"
      ></form-input>
      <template v-for="err in passwordErr">{{err}}</template>
    </div>

    <div>
      <form-input
        @change="confirmPasswordChange"
        :type="'password'"
        :label="'Confirm Password'"
        :placeholder="'Enter your password again'"
      ></form-input>
      <template v-for="err in confirmPasswordErr">{{err}}</template>
    </div>

    <div class="create_but">
      <button @click="createAccount">Create</button>
    </div>

    <div style="text-align:center; margin-top:20px; font-size:1.6rem;">
      <span>-- or --</span>
    </div>
  </Form>
</template>

<script lang="ts">
import Vue from "vue";
import formInput from "./formInput";

export default Vue.extend({
  name: "signup-form",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
      nameErr: [""],
      emailErr: [""],
      passwordErr: [""],
      confirmPasswordErr: [""]
    };
  },
  components: {
    formInput
  },
  methods: {
    nameChange(name: string) {
      this.name = name;
    },

    emailChange(email: string) {
      this.email = email;
    },
    passwordChange(pass: string) {
      this.password = pass;
    },
    confirmPasswordChange(pass: string) {
      this.confirmPassword = pass;
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },

    validatePassword() {
      if (this.password != this.confirmPassword) {
        this.passwordErr.push("The two passwords don't correspond");
        return false;
      } else if (this.password.length < 8) {
        this.passwordErr.push("Your password must be atleast 8 characters");
        return false;
      } else return true;
    },

    validateConfirmPassword() {
      if (this.password != this.confirmPassword) {
        this.confirmPasswordErr.push("The two passwords don't correspond");
        return false;
      } else if (this.confirmPassword.length < 8) {
        this.confirmPasswordErr.push(
          "Your password must be atleast 8 characters"
        );
        return false;
      } else return true;
    }
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.signUp-form {
  margin: 30px 0;

  width: 400px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.3);

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }

  .create_but {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      cursor: pointer;
      padding: 15px 50px;
      font-size: 1.7rem;
      background: $primary-color;
      color: white;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>