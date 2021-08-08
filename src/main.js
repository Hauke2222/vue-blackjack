import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    this.$store.dispatch("initGame");
  },
  render: (h) => h(App),
}).$mount("#app");
