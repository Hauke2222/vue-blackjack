import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    this.$store.dispatch("generateDeckOfCards");
    this.$store.dispatch("hit", "player");
    this.$store.dispatch("hit", "player");
    this.$store.dispatch("hit", "dealer");
    this.$store.dispatch("hit", "dealer");
  },
  render: (h) => h(App),
}).$mount("#app");
