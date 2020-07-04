<template>
  <div class="search-container">
    <div class="search-input--title">Search for a product</div>
    <div class="search-input">
      <input
        ref="searchInput"
        v-model="searchKey"
        type="text"
        placeholder="Enter product name or description"
      />
      <span @click="clearSearchField" v-show="searchKey!=''?true:false">X</span>
    </div>

    <div class="filter">
      <div class="searchFor">Search Category:</div>
      <label>
        <v-simple-checkbox
          style="width:max-content; margin-bottom:10px;margin-right:5px;"
          color="#1e0c0c"
          v-model="filterValues.hair"
        ></v-simple-checkbox>Hair
      </label>
      <label>
        <v-simple-checkbox
          style="width:max-content; margin-bottom:10px;margin-right:5px;"
          color="#1e0c0c"
          v-model="filterValues.eyeLashes"
        ></v-simple-checkbox>Eye Lashes
      </label>
      <label>
        <v-simple-checkbox
          style="width:max-content; margin-bottom:10px;margin-right:5px;"
          color="#1e0c0c"
          v-model="filterValues.hairProduct"
        ></v-simple-checkbox>Hair Product
      </label>
      <label>
        <v-simple-checkbox
          style="width:max-content; margin-bottom:10px;margin-right:5px;"
          color="#1e0c0c"
          v-model="filterValues.makeup"
        ></v-simple-checkbox>Make Up
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      searchKey: "",
      filterValues: {
        hair: true,
        eyeLashes: true,
        hairProduct: true,
        makeup: true
      }
    };
  },

  methods: {
    clearSearchField() {
      this.searchKey = "";
      if (this.$refs.searchInput instanceof HTMLElement)
        this.$refs.searchInput.focus();
    }
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.search-container {
  margin-top: 10px;
  font-size: 1.7rem;

  .search-input--title {
    font-size: 1.9rem;
  }

  .search-input {
    border: 2px solid $primary-color;
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 5px;
    padding-right: 5px;
    width: 80%;

    input[type="text"] {
      border: none;
      outline: none;
      justify-self: stretch;
      flex-basis: 97%;
      //   background-color: blue;
      height: 40px;
      border-radius: 0;

      &:focus {
        outline: none;
      }
    }

    span {
      display: inline-block;
      height: 100%;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }

  .filter {
    margin-top: 20px;
    label {
      display: flex;
    }
  }
}
</style>