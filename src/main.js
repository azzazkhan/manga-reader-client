import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './registerServiceWorker'
import "owl.carousel";
import "./assets/js/app";

import(/* webpackChunkName: "tailwind" */ "./assets/css/tailwind.css");
import(
  /* webpackChunkName: "owlCarousel" */
  "owl.carousel/dist/assets/owl.carousel.css"
);
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
