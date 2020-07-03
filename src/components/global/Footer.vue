<template>
  <footer class="app-footer">
    <div class="footer-navigation">
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/products">Our Products</router-link>
      <router-link class="router-link" to="/about">About Us</router-link>
      <router-link class="router-link" to="/contact">Contact Us</router-link>
    </div>

    <div class="social-media">
      <a href>
        <img width="35px" height="35px" src="../../assets/images/icons/facebook_2.svg" alt />
      </a>
      <a href>
        <img width="35px" height="35px" src="../../assets/images/icons/twitter.svg" alt />
      </a>
      <a href>
        <img width="35px" height="35px" src="../../assets/images/icons/instagram.svg" alt />
      </a>
      <a href>
        <img width="35px" height="35px" src="../../assets/images/icons/whatsapp.svg" alt />
      </a>
    </div>

    <div class="copyrights">
      <div>
        Site by
        <a href="https://github.com/Micheduc25">
          <strong>Micheduc25</strong>
        </a>
      </div>

      <div class="copy">
        <div>
          2020-CC Hair World, all rights reserved
          <a href="https://github.com/Micheduc25">
            <strong>Micheduc25</strong>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>


<style lang="scss" scoped>
$primary-color: #1e0c0c;
$primary-color-light: #ffffff;
.app-footer {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-family: "Fira Sans", sans-serif;
  color: $primary-color-light;
  background-color: $primary-color;

  .footer-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;

    .router-link {
      padding: 10px 0;
      transition: 0.3s;

      &:hover {
        text-decoration: underline !important;
        text-decoration-color: white !important;
      }
    }

    .router-link-exact-active.router-link-active {
      text-decoration: underline !important;
      text-decoration-color: white !important;
    }
  }

  .social-media {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    a {
      margin-right: 20px;
    }
  }

  .copyrights {
    display: flex;
    padding: 0 20px;
    color: #666;
    padding-top: 20px;

    justify-content: space-between;
  }
}
</style>