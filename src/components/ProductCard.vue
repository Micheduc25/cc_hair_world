<template>
  <div v-on:click="clicked" class="product-card__container">
    <div class="backg"></div>
    <div class="bgcolor"></div>
    <div class="superposed">
      <div class="name">{{name}}</div>
      <div class="description">{{description}}</div>
      <div class="see-product">
        <button class="see-product-button">see this product</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: "A product"
    },
    description: {
      type: String,
      default: "This is the description of the product"
    }
  },

  methods: {
    clicked() {
      this.$emit("productSelect");
    }
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.product-card__container {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.4);
  height: 350px;
  // width: 400px;
  width: 100%;
  // height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  // background-image: url(../assets/images/home_products/slide4.jpeg);

  overflow: hidden;

  cursor: pointer;

  &:hover .bgcolor {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:hover .backg {
    transform: scale(1.2);
  }

  &:hover .superposed {
    opacity: 1;
  }

  .bgcolor {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: transparent;

    transition: 0.3s;
    z-index: 2;
  }
  .backg {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: red;

    transition: 0.5s;
    z-index: 1;
  }

  .bg1 {
    background-image: url(../assets/images/home_products/slide1.jpeg);
  }

  .bg2 {
    background-image: url(../assets/images/home_products/slide2.jpeg);
  }
  .bg3 {
    background-image: url(../assets/images/home_products/slide3.jpeg);
  }
  .bg4 {
    background-image: url(../assets/images/home_products/slide4.jpeg);
  }
  .bg5 {
    background-image: url(../assets/images/home_products/slide5.jpeg);
  }

  .bg6 {
    background-image: url(../assets/images/products/slider2.jpg);
  }
  // &:hover {
  //   background-size: 140% 140%;
  // }

  .superposed {
    opacity: 0;
    height: 80%;
    transition: 0.3s;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name {
      font-size: 2.5rem;
      font-weight: bolder;
    }

    .description {
      font-size: 1.7rem;
    }

    .see-product-button {
      outline: none;
      padding: 15px 30px;
      transition: 0.3s;
      border-radius: 5px;
      font-size: 1.5rem;
      background-color: $primary-color;
      color: $primary-color-light;
    }

    .see-product-button:hover {
      color: $primary-color;
      background-color: $primary-color-light;
    }
  }
}
</style>