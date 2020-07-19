<template>
  <Form class="login-form">
    <div class="login-form__title">
      <h1>Login</h1>
    </div>

    <div>
      <form-input
        @inputChanged="emailChange"
        :type="'email'"
        :label="'Email'"
        :placeholder="'Enter your e-mail'"
        :errList="emailErr"
        :disabled="loading"
        :defaultValue="defaultEmail"
      ></form-input>
    </div>

    <div>
      <form-input
        @inputChanged="passwordChange"
        :type="'password'"
        :label="'Password'"
        :placeholder="'Enter your password'"
        :errList="passwordErr"
        :disabled="loading"
        :defaultValue="defaultPassword"
      ></form-input>
    </div>

    <div class="remember-me" style="display:flex; justify-content:center;">
      <v-checkbox
        class="mt-0"
        color="#1e0c0c"
        v-model="rememberMe"
        label="remember me"
      ></v-checkbox>
    </div>

    <div v-show="!loading" class="create_but">
      <button @click="login">Login</button>
    </div>
    <div v-show="loading" class="loader">
      <v-progress-circular indeterminate color="#1e0c0c"></v-progress-circular>
    </div>
  </Form>
</template>

<script lang="ts">
import Vue from "vue";
import formInput from "./formInput";
import { mapGetters } from "vuex";
import { Auth } from "@/firebase/auth";
import { auth } from "firebase";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "login-form",

  data() {
    return {
      email: "",
      password: "",
      loading: false,

      rememberMe: false,

      emailErr: [""],
      passwordErr: [""],
    };
  },

  computed: {
    ...mapGetters({ defaultEmail: "email", defaultPassword: "password" }),
  },
  components: {
    formInput,
  },
  methods: {
    ...mapActions(["set_show_signup"]),
    emailChange(email: string) {
      this.email = email;
    },
    passwordChange(pass: string) {
      this.password = pass;
    },

    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },

    validatePassword() {
      if (this.password.length < 8) {
        this.passwordErr.push("Your password must be atleast 8 characters");
        return false;
      } else return true;
    },

    async login() {
      //we login here
      const a = this.validateEmail();
      const b = this.validatePassword();
      if (a && b) {
        let user = Auth.currentUser;
        this.loading = true;
        if (this.rememberMe) {
          localStorage.setItem("email", this.email);
          localStorage.setItem("password", this.password);
          console.log("credentials saved locally!");
        }

        if (user != null) {
          await this.set_show_signup(false);
          this.loading = false;
          this.$router.push("/");
        } else {
          await Auth.signInWithEmailAndPassword(this.email, this.password)
            .then((userCred) => {
              user = userCred.user;
              if (user != null) {
                this.loading = false;
                this.$router.push("/"); //change path to profile page later
              }
            })
            .catch((err) => {
              console.log("an error occured ohh ===>>", err);
              this.loading = false;
            });
        }
      }
    },
  },

  mounted() {
    console.log(
      "default email and pass are ===>>",
      this.defaultEmail,
      this.defaultPassword
    );
    if (this.defaultEmail != "") {
      this.email = this.defaultEmail;

      console.log("in here boyyyy", this.email);
    }
    if (this.defaultPassword != "") {
      this.password = this.defaultPassword;
    }
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.login-form {
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
  .loader {
    display: flex;
    justify-content: center;
  }
}
</style>
