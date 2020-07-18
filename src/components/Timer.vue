<template>
  <div :class="classes">
    {{ showHours ? hours : null }}:{{ showMinutes ? minutes : null }}:{{
    showSeconds ? seconds : null
    }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeOutRef: null,
      timeTotal: 0
    };
  },
  props: {
    totalTime: {
      default: 0,
      type: Number
    },
    classes: {
      default: ""
    },
    showHours: { default: true },
    showMinutes: { default: true },
    showSeconds: { default: true }
  },
  mounted() {
    // console.log("in mounted");
    // const app = this;
    this.timeTotal = this.totalTime;
    // window.onload = () => {};
    this.timeOutRef = setInterval(() => {
      this.timeTotal -= 1;
      // console.log("timeTotal is now", this.timeTotal);
    }, 1000);
  },
  computed: {
    seconds() {
      const s = Math.floor((this.timeTotal % 3600) % 60);
      return s < 10 ? "0" + s.toString() : s.toString();
    },
    minutes() {
      const m = Math.floor((this.timeTotal % 3600) / 60);
      return m < 10 ? "0" + m.toString() : m.toString();
    },
    hours() {
      const h = Math.floor(this.timeTotal / 3600);
      return h < 10 ? "0" + h.toString() : h.toString();
    }
  },
  watch: {
    timeTotal: function() {
      if (this.timeTotal === 0) {
        clearInterval(this.timeOutRef);
        this.$emit("timerstopped");
      }
    }
  }
};
</script>
<style scoped></style>
