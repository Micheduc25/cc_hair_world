<template>
  <div class="band-container">
    <div class="band-container__part1">
      <div class="discount_badge">50% Discount!!</div>

      <p class="discount_info">
        Get a 50% discount before the end of this month!! dont loose this
        opportunity. The best wigs and accesories which were already cheap are now 50% cheaper! hurry before its
        late!!!!!
      </p>

      <div class="timeLeft-container discount_badge">
        <span>Time Left:</span>
        <timer totalTime="72000" classes="band_timer"></timer>
      </div>
    </div>
    <div class="band-container__part2"></div>
  </div>
</template>

<script >
import Vue from "vue";
import Timer from "./Timer";
export default Vue.extend({
  components: {
    timer: Timer
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.band-container {
  color: $primary-color-light;
  padding: 20px;
  min-height: 350px;
  background-color: #666;

  background: url(../assets/images/home_products/blackgirl.png),
    linear-gradient(90deg, #666, $primary-color, #666);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  display: flex;
  justify-content: space-between;

  .band-container__part1 {
    // flex-basis: 50%;
    .discount_badge {
      width: max-content;
      background-color: $primary-color;

      padding: 10px;
      font-size: 2.3rem;
      font-weight: bold;
      font-style: italic;
      margin-bottom: 10px;
    }

    .discount_info {
      font-size: 1.7rem;
      max-width: 45%;
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
    }
  }

  .band-container__part2 {
    flex-basis: 50%;
  }
}
</style>