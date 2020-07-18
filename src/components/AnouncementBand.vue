<template>
  <div class="band-container">
    <div class="band-container__part1">
      <div class="discount_badge">50% Discount!!</div>
    </div>
    <div class="band-container__part2">
      <div class="discount_badge">50% Discount!!</div>

      <p class="discount_info">
        Get a 50% discount before the end of this month!! dont loose this
        opportunity. The best wigs and accesories which were already cheap are
        now 50% cheaper! hurry before its late!!!!!
      </p>

      <div class="timeLeft-container discount_badge">
        <span>Time Left:</span>
        <timer :totalTime="72000" classes="band_timer"></timer>
      </div>

      <ani-button @onClicked="explore">Explore</ani-button>
    </div>

    <div class="band-container__part3">
      <div class="discount_badge">50% Discount!!</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Timer from "./Timer";
import Button from "./special/AnimatedButton";
export default Vue.extend({
  components: {
    timer: Timer,
    "ani-button": Button
  },
  methods: {
    explore() {
      console.log("button clicked");
    }
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.band-container {
  color: $primary-color-light;
  padding: 0 20px;
  min-height: 350px;
  background-color: #666;

  background: url(), linear-gradient(90deg, #666, $primary-color, #666);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    background: url(../assets/images/home_products/blackgirl.png),
      linear-gradient(90deg, #666, $primary-color, #666);

    background-position: center left;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .discount_badge {
    width: max-content;
    background-color: $primary-color;

    padding: 10px;
    font-size: 2.3rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 10px;
  }

  .band-container__part1 {
    flex-basis: 33%;
    background: url(../assets/images/home_products/blackgirl.png);
    // linear-gradient(90deg, #666, $primary-color, #666);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    flex-grow: 1;
    @media (max-width: 1000px) {
      flex-basis: 40%;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  .band-container__part2 {
    flex-basis: 33%;
    flex-grow: 1;
    @media (max-width: 1000px) {
      flex-basis: 60%;
    }

    .discount_badge {
      margin: auto;
      margin-bottom: 20px;

      @media (max-width: 850px) {
        &:first-child {
          margin: auto;
          margin-bottom: 20px;
        }
      }
    }

    .discount_info {
      font-size: 1.7rem;
      // max-width: 90%;
      margin: auto;
      margin-bottom: 20px;
      @media (max-width: 850px) {
        background-color: rgba(0, 0, 0, 0.3);
        width: 80%;
      }
    }
    .timeLeft-container {
      display: flex;
      width: max-content;
      align-items: center;
      font-size: 2rem !important;
      span {
        margin-right: 10px;
      }
      .band_timer {
        font-size: 2.5rem;
        font-weight: bold;
      }
      // background: url(../assets/images/home_products/blackgirl.png);
    }
  }

  .band-container__part3 {
    flex-basis: 33%;
    flex-grow: 1;
    background: url(../assets/images/home_products/blacklady.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    .discount_badge {
      margin-left: auto;
      margin-bottom: 20px;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }
}
</style>
