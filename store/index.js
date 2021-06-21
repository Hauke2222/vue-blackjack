import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckOfCards: [],
  },
  mutations: {
    generateCards(state, payload) {
      state.deckOfCards = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
