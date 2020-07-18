<template>
  <section id="app-home">
    <v-carousel cycle>
      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide1.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5">
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
          <div class="display-2 white--text pl-5 pr-5">
            <strong>Discover the best hair products in Nija and abroad</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide3.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5">
            <strong
              >Every coin you spend is worth the beauty you achieve</strong
            >
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide4.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5">
            <strong>At CC Hair World we give you the best ... only</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        class="my-carousel"
        :src="require('../assets/images/home_products/slide5.jpeg')"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5">
            <strong>Beauty conjugated in the hair tense</strong>
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

          <div class="more-products" style>
            <small-card title="Top eye lashes" id="wer4">
              <img
                src="../assets/images/home_products/slide4.jpeg"
                alt="card background image"
                slot="image"
              />
            </small-card>
            <small-card title="Top Hair and wig accesories" id="wer4">
              <img
                src="../assets/images/home_products/slide2.jpeg"
                alt="card background image"
                slot="image"
              />
            </small-card>
            <small-card classes="last-small-card" title="Top Make Up" id="wer4">
              <img
                src="../assets/images/home_products/slide1.jpeg"
                alt="card background image"
                slot="image"
              />
            </small-card>
          </div>
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

    <a-band></a-band>
  </section>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/ProductCard";
import SearchSection from "@/components/SearchSection";
import ABand from "@/components/AnouncementBand";
import SmallCard from "@/components/SmallCard";
import { DB } from "@/firebase/db";

export default {
  name: "Home",
  components: {
    product: Product,
    "search-section": SearchSection,
    "a-band": ABand,
    "small-card": SmallCard,
  },

  data() {
    return {};
  },

  mounted() {
    //when the home screen is mounted, we assign background images to each card
    const allCards = this.$el.querySelectorAll(".backg");
    const data = DB.collection("nice_names")
      .doc("9Be7wmCwdV64QOlUt7wc")
      .get()
      .then((snapshot) => {
        console.log("snapshot data is ", snapshot.data());
      })
      .catch((err) => {
        console.log(`Could not get file, pls check your connection ${err}`);
      });

    console.log(allCards);

    for (let i = 1; i < allCards.length + 1; i++) {
      allCards[i - 1].classList.add(`bg${i}`);
    }
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;

#app-home strong {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
  @media (max-width: 850px) {
    font-size: 2rem;
  }

  @media (max-width: 650px) {
    font-size: 1.8frem;
  }
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

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }

  .top-products-title {
    // margin-top: 10px;
    color: $primary-color-light;
    background: $primary-color;
    width: max-content;
    padding: 10px 20px;
    font-size: 2.3rem;

    @media (max-width: 790px) {
      font-size: 1.9rem;
    }
  }

  .top-prods {
    overflow-x: hidden;
    flex-basis: 70%;
    margin-right: 10px;
    @media (max-width: 790px) {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .top-title-all {
      display: flex;
      width: 100%;
      align-items: center;
      background-color: #666;
      .moving-text {
        z-index: 1;
        white-space: nowrap;

        font-size: 1.6rem;
        color: $primary-color-light;

        animation: textMove 15s infinite linear;
        @media (max-width: 500px) {
          font-size: 1.4rem;
          width: 100%;
        }
      }
      #top-title {
        position: relative;
        z-index: 2;

        @media (max-width: 475px) {
          font-size: 1.5rem;
          padding: 10px 0 10 5px;
        }
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

      @media screen and (max-width: 500px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
      }
    }
  }

  .more-utilities {
    flex-basis: 20%;
    padding-right: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // justify-content: stretch;
    @media (max-width: 790px) {
      .search-container {
        display: none;
        //modify this part later dude
      }
    }

    @media screen and (max-width: 700px) {
      padding: 0;
      & .top-products-title {
        margin: auto;
      }
    }

    .more-utilities-main {
      // background-color: blue;
      justify-self: stretch;

      .more-products {
        display: flex;
        flex-direction: column;
        align-items: center;
        .last-small-card {
          display: none;
        }
        @media screen and (max-width: 700px) {
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;

          & .last-small-card {
            display: flex;
          }
        }
      }
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
