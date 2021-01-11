import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './registerServiceWorker'
import "slick-carousel/slick/slick";
import "./assets/js/app";

import(/* webpackChunkName: "tailwind" */ "./assets/css/tailwind.css");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
