import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    showSignUp: true, // this var tells us if the current user is not null
  },
  mutations: {
    set_email_and_password_mut(state, userCred) {
      state.email = userCred.email;
      state.password = userCred.password;
    },

    set_show_signup_mut(state, val: boolean) {
      state.showSignUp = val;
    },
  },
  actions: {
    set_email_and_password({ commit }, userCred) {
      console.log("email and password are now ===>", userCred);
      commit("set_email_and_password_mut", userCred);
    },

    set_show_signup({ commit }, val: boolean) {
      console.log("show signup is now ", val);
      commit("set_show_signup_mut", val);
    },
  },

  getters: {
    email: (state) => state.email,
    password: (state) => state.password,
    showSignUp: (state) => state.showSignUp,
  },

  plugins: [createPersistedState()],
});
