<template>
  <section id="app-home">
    <v-carousel cycle>
      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide1.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Your Hair is Our Passion</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide2.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Your Hair is Our Passion</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide3.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Your Hair is Our Passion</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide4.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Your Hair is Our Passion</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide5.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Your Hair is Our Passion</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <div class="home-main">
      <div class="more-utilities">
        <div class="top-products-title">More of our Products</div>
        <div class="more-utilities-main">
          <search-section></search-section>
        </div>
      </div>
      <div class="top-prods">
        <div class="top-title-all">
          <div id="top-title" class="top-products-title">Our Top Products</div>
          <div class="moving-text">Discover our most amazing products,</div>
        </div>

        <div class="top-products-area">
          <product></product>
          <product></product>
          <product></product>
          <product></product>
          <product></product>
          <product></product>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/ProductCard";
import SearchSection from "@/components/SearchSection";

export default {
  name: "Home",
  components: {
    product: Product,
    "search-section": SearchSection
  },

  data() {
    return {};
  },

  mounted() {
    //when the home screen is mounted, we assign background images to each card
    const allCards = this.$el.querySelectorAll(".backg");
    console.log(allCards);

    for (let i = 1; i < allCards.length + 1; i++) {
      allCards[i - 1].classList.add(`bg${i}`);
    }
  }
};
</script>


<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;

#app-home strong {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
}
.my-carousel .v-image__image.v-carousel__item .v-image__image--cover {
  background-size: contain !important;
  background-color: black;
}

.home-main {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 0 10px;

  .top-products-title {
    // margin-top: 10px;
    color: $primary-color-light;
    background: $primary-color;
    width: max-content;
    padding: 10px 20px;
    font-size: 2.3rem;
  }

  .top-prods {
    overflow-x: hidden;
    flex-basis: 70%;
    margin-right: 10px;

    .top-title-all {
      display: flex;
      width: 100%;
      align-items: center;
      background-color: #666;
      .moving-text {
        z-index: 1;
        font-size: 1.6rem;
        color: $primary-color-light;

        animation: textMove 15s infinite linear;
      }
      #top-title {
        position: relative;
        z-index: 2;
      }
    }
    .top-products-area {
      margin-top: 20px;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
      row-gap: 30px;
      // justify-content: center;
      justify-items: center;
      flex-grow: 3;
    }
  }

  .more-utilities {
    flex-basis: 30%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // justify-content: stretch;

    .more-utilities-main {
      // background-color: blue;
      justify-self: stretch;
    }
  }
}

@keyframes textMove {
  0% {
    transform: translateX(-100%);
  }
  98% {
    opacity: 1;
  }
  100% {
    transform: translateX(200%);
    opacity: 0;
  }
}
</style>
