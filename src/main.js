import Vue from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

new Vue({
  el: "#app2",
  render: h => h(App2)
}).$mount("#app2");
