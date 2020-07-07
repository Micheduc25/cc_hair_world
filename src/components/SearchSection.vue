<template>
  <div class="search-container">
    <div class="search-input--title">Search for a product</div>
    <div class="search-input">
      <div class="search-icon">🔎</div>
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

    <!-- color values here -->
    <div class="colors-filter">
      <div class="colors-title">Colors:</div>

      <div class="colors">
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="colorValues.red"
          ></v-simple-checkbox>red
          <div style="width:15px; height:15px;margin-left:3px; background-color:red"></div>
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="colorValues.brown"
          ></v-simple-checkbox>brown
          <div style="width:15px; height:15px;margin-left:3px; background-color:brown"></div>
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="colorValues.grey"
          ></v-simple-checkbox>grey
          <div style="width:15px; height:15px;margin-left:3px; background-color:grey"></div>
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="colorValues.golden"
          ></v-simple-checkbox>golden
          <div style="width:15px; height:15px;margin-left:3px; background-color:gold"></div>
        </label>
      </div>
    </div>

    <!--size  values here -->
    <div class="sizes-filter">
      <div class="sizes-title">Sizes:</div>

      <div class="sizes">
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="sizeValues.sm"
          ></v-simple-checkbox>sm
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="sizeValues.md"
          ></v-simple-checkbox>md
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="sizeValues.xl"
          ></v-simple-checkbox>xl
        </label>
        <label>
          <v-simple-checkbox
            style="width:max-content;margin-right:2px;"
            color="#1e0c0c"
            v-model="sizeValues.xxl"
          ></v-simple-checkbox>xxl
        </label>
      </div>
    </div>

    <div class="searchButton">
      <button>Search</button>
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
      },

      colorValues: {
        red: true,
        brown: true,
        grey: true,
        golden: true
      },
      sizeValues: {
        sm: true,
        md: true,
        xl: true,
        xxl: true
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
  border-right: 1px solid $primary-color;
  margin-top: 10px;
  font-size: 1.7rem;
  margin-bottom: 20px;

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

  .colors-filter {
    .colors {
      display: flex;
      flex-wrap: wrap;
      // justify-content: flex-start;

      label {
        display: flex;
        // flex-basis: 30%;
        align-items: center;
        margin-right: 10px;
      }
    }
  }

  .sizes-filter {
    margin-top: 20px;
    .sizes {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      label {
        display: flex;
        // flex-basis: 40%;
        align-items: center;
        margin-right: 30px;
      }
    }
  }

  .searchButton {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
      background-color: $primary-color;
      color: $primary-color-light;
      padding: 10px 35px;
      border-radius: 10px;
      transition: 0.3s;
      border: 1px solid transparent;
      &:hover {
        background: $primary-color-light;
        color: $primary-color;
        border: 1px solid $primary-color;
        outline: none;
      }
      &:focus {
        outline: none;
      }
      &:active {
        transform: translateY(-5px);
        box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>