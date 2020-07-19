<template>
  <div class="formInput">
    <div class="formInput__label">{{ label }}</div>
    <div class="formInput__content">
      <input
        class="formInput__input"
        :placeholder="placeholder"
        :type="inputType"
        :disabled="disabled"
        v-model="inputValue"
      />

      <div
        @click="togglePasswordView"
        class="passwordInput-eye"
        v-if="isPasswordInput"
      >
        <i v-if="!showPassWord" class="fa fa-eye" aria-hidden="true"></i>
        <i v-else class="fa fa-eye-slash" aria-hidden="true"></i>
      </div>
    </div>
    <div class="error-messages">
      <template v-for="err in errList">{{ err }}</template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "form-input",

  props: {
    type: String,
    label: String,
    placeholder: String,
    errList: Array,
    disabled: Boolean,
    defaultValue: {
      default: "",
      type: String,
    },
  },

  data() {
    return {
      showPassWord: false,
      inputValue: "",
    };
  },

  computed: {
    isPasswordInput() {
      return this.type.toLowerCase() === "password";
    },
    inputType() {
      if (this.type === "password" && this.showPassWord) {
        return "text";
      } else return this.type;
    },
  },

  watch: {
    inputValue(newVal) {
      this.$emit("inputChanged", newVal);
    },
  },

  methods: {
    togglePasswordView() {
      this.showPassWord = !this.showPassWord;
    },
  },

  mounted() {
    this.$parent.$on("formSubmited", () => {
      this.inputValue = "";
    });

    if (this.defaultValue != "") {
      this.inputValue = this.defaultValue;
    }
  },
});
</script>

<style lang="scss" scoped>
.formInput {
  width: 100%;
  font-size: 1.7rem;
  margin-bottom: 30px;
  &__label {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 10px;

    .formInput__input {
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }

  .error-messages {
    color: red;
    font-size: 1.3rem;
  }
}
</style>
