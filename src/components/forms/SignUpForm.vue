<template>
  <Form class="signUp-form">
    <div class="signUp-form__title">
      <h1>Create An Account</h1>
    </div>
    <div>
      <form-input
        @inputChanged="nameChange"
        :type="'text'"
        :label="'Name'"
        :placeholder="'Enter your name'"
        :errList="nameErr"
        :disabled="loading"
      ></form-input>
    </div>

    <div>
      <form-input
        @inputChanged="emailChange"
        :type="'email'"
        :label="'Email'"
        :placeholder="'Enter your e-mail'"
        :errList="emailErr"
        :disabled="loading"
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
      ></form-input>
    </div>

    <div>
      <form-input
        @inputChanged="confirmPasswordChange"
        :type="'password'"
        :label="'Confirm Password'"
        :placeholder="'Enter your password again'"
        :errList="confirmPasswordErr"
        :disabled="loading"
      ></form-input>
    </div>

    <div v-show="!loading">
      <div class="create_but">
        <button @click.prevent="createAccount">Create</button>
      </div>

      <div style="text-align:center; margin:20px 0; font-size:1.6rem;">
        <span>-- or --</span>
      </div>

      <div class="login-with google">
        <button class="google-login-but">
          <img
            width="20"
            height="20"
            src="@/assets/images/icons/google.png"
            alt="google icon"
          />
          <span>SignUp with google</span>
        </button>
      </div>
    </div>
    <div v-show="loading" class="loader">
      <v-progress-circular indeterminate color="#1e0c0c"></v-progress-circular>
    </div>
  </Form>
</template>

<script lang="ts">
import Vue from "vue";
import formInput from "@/components/forms/formInput";
import { Auth } from "@/firebase/auth";
import { DB } from "@/firebase/db";
import { mapActions } from "vuex";

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
      confirmPasswordErr: [""],
      currentAccountErrMessage: "",
      loading: false,

      accountCreationErrorMessages: {
        networkError:
          "Sorry an error occured during connection with the server",
        usedEmail:
          "Sorry the email you provided is already used by another account",
        weakPassword: "Sorry your password is too weak",
        other:
          "Sorry an error occured while creating your account, please try again",
      },
    };
  },
  components: {
    formInput,
  },
  methods: {
    ...mapActions(["set_email_and_password"]),
    nameChange(name: string) {
      console.log("my name is ", name);
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
      this.emailErr = this.emailErr[0] === "" ? new Array() : this.emailErr;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = re.test(String(this.email).toLowerCase());
      if (isValid) return true;
      else {
        this.emailErr.push("invalide e-mail format");
        return false;
      }
    },

    validatePassword() {
      console.log(this.passwordErr[0] === "");
      this.passwordErr =
        this.passwordErr[0] === "" ? new Array() : this.passwordErr;
      if (this.password != this.confirmPassword) {
        this.passwordErr.push("The two passwords don't correspond");
        return false;
      } else if (this.password.length < 8) {
        this.passwordErr.push("Your password must be atleast 8 characters");
        return false;
      } else return true;
    },

    validateConfirmPassword() {
      this.confirmPasswordErr =
        this.confirmPasswordErr[0] === ""
          ? new Array()
          : this.confirmPasswordErr;
      if (this.password != this.confirmPassword) {
        this.confirmPasswordErr.push("The two passwords don't correspond");
        return false;
      } else if (this.confirmPassword.length < 8) {
        this.confirmPasswordErr.push(
          "Your password must be atleast 8 characters"
        );
        return false;
      } else return true;
    },

    async createAccount() {
      const a = this.validateEmail();
      const b = this.validatePassword();
      const c = this.validateConfirmPassword();

      const app = this;

      if (a && b && c) {
        this.loading = true;
        const credentials = await Auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
          .then(async (val) => {
            const user = val.user;

            this.set_email_and_password({
              email: app.email,
              password: app.password,
            });

            if (user != null) {
              DB.collection("users")
                .add({
                  id: user.uid,
                  username: this.name,
                  email: this.email,
                })
                .then(() => {
                  this.name = "";
                  this.email = "";
                  this.password = "";
                  this.confirmPassword = "";

                  this.$emit("formSubmited");
                  user.sendEmailVerification();
                  this.loading = false;
                  console.log("email verification sent!");
                  this.$router.push({
                    name: "auth",
                    params: { procedure: "verification" },
                  });
                });
            }
          })
          .catch((err) => {
            console.log("An error occured ", err);
            if (err.code === "auth/network-request-failed") {
              this.currentAccountErrMessage = this.accountCreationErrorMessages.networkError;
            } else if (err.code === "auth/email-already-in-use") {
              this.currentAccountErrMessage = this.accountCreationErrorMessages.usedEmail;
            } else if (err.code === "auth/weak-password") {
              this.currentAccountErrMessage = this.accountCreationErrorMessages.weakPassword;
            } else {
              this.currentAccountErrMessage = this.accountCreationErrorMessages.other;
            }
            this.loading = false;
          });
      }
    },
  },
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

  .login-with {
    display: flex;
    justify-content: center;
    .google-login-but {
      display: flex;
      align-items: center;
      padding: 15px 30px;
      border: 1px solid #666;
      border-radius: 5px;
      font-size: 1.5rem;

      img {
        margin-right: 15px;
      }
    }
  }

  .loader {
    display: flex;
    justify-content: center;
  }
}
</style>
