<template>
  <div :class="'card-container'+ ' '+classes">
    <div class="card-container__title">{{ title }}</div>
    <div class="card-container__content">
      <!-- <img :src="bgimage" alt="card background image" /> -->
      <slot name="image"></slot>
      <div class="button-div">
        <router-link :to="'/product/' + id" exact class="button-router-link">See</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String
    },
    classes: {
      type: String
    },

    id: {
      type: String
    }
  }

  //   mounted() {}
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;

.card-container {
  font-size: 1.6rem;
  padding: 15px 15px 15px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 15px 0 15px 0;
  }

  .card-container__title {
    color: $primary-color;
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 10px;
    font-weight: bold;
    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  .card-container__content {
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rbga(0, 0, 0, 0.5);
    box-shadow: 0 0 5px 2px;

    overflow: hidden;
    position: relative;
    width: max-content;

    img {
      width: 200px;
      height: 200px;

      @media (max-width: 414px) {
        width: 250px;
        height: 250px;
      }
    }

    .button-div {
      position: absolute;
      bottom: 0px;
      width: 100%;
      background-color: rgba($color: #000000, $alpha: 0.5);
      height: max-content;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: center;
      padding: 5px 0;

      &:hover {
        background-color: rgba($color: #ffffff, $alpha: 0.5);

        .button-router-link {
          color: $primary-color !important;
          &:hover {
            text-decoration-color: $primary-color;
          }
        }
      }

      .button-router-link {
        padding: 5px;

        display: block;
        width: max-content;
        transition: 0.3s !important;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
          // text-decoration-color: white;
        }
      }
    }
  }
}
</style>
