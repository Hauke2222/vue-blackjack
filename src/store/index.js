import Vue from "vue";
import Vuex from "vuex";
import Card from "../card.js";
import Functions from "../functions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckOfCards: [],
    cardsPlayer: [],
    cardsDealer: [],
    pass: false,
    cardRank: [
      { rank: "Ace", value: 11, unicodePart: "1" },
      { rank: "2", value: 2, unicodePart: "2" },
      { rank: "3", value: 3, unicodePart: "3" },
      { rank: "4", value: 4, unicodePart: "4" },
      { rank: "5", value: 5, unicodePart: "5" },
      { rank: "6", value: 6, unicodePart: "6" },
      { rank: "7", value: 7, unicodePart: "7" },
      { rank: "8", value: 8, unicodePart: "8" },
      { rank: "9", value: 9, unicodePart: "9" },
      { rank: "10", value: 10, unicodePart: "A" },
      { rank: "Jack", value: 10, unicodePart: "B" },
      { rank: "Queen", value: 10, unicodePart: "D" },
      { rank: "King", value: 10, unicodePart: "E" },
    ],
    cardSuit: [
      { suit: "Clubs", unicode: "1F0D" },
      { suit: "Diamonds", unicode: "1F0C" },
      { suit: "Hearts", unicode: "1F0B" },
      { suit: "Spades", unicode: "1F0A" },
    ],
  },
  mutations: {
    GENERATE_DECK_OF_CARDS(state) {
      state.deckOfCards = [];
      for (let i = 0; i < state.cardSuit.length; i++) {
        for (let j = 0; j < state.cardRank.length; j++) {
          state.deckOfCards.push(
            new Card(
              state.cardSuit[i].suit,
              state.cardRank[j].rank,
              "&#x" + state.cardSuit[i].unicode + state.cardRank[j].unicodePart,
              state.cardRank[j].value
            )
          );
        }
      }
    },
    ADD_CARD_TO_HAND(state, payload) {
      if (payload.player == "player") {
        state.cardsPlayer.push(payload.card);
      } else {
        state.cardsDealer.push(payload.card);
      }
    },
    DELETE_CARD_FROM_DECK(state, payload) {
      state.deckOfCards.splice([payload], 1);
    },
    SET_PASS_BOOLEAN_TRUE(state) {
      state.pass = true;
    },
  },
  actions: {
    generateDeckOfCards({ commit }) {
      commit("GENERATE_DECK_OF_CARDS");
    },
    hit({ commit }, user) {
      let randomNumberInDeck = Math.floor(
        Math.random() * this.state.deckOfCards.length
      );
      let randomCard = this.state.deckOfCards[randomNumberInDeck];

      commit("DELETE_CARD_FROM_DECK", randomCard);
      commit("ADD_CARD_TO_HAND", {
        player: user,
        card: randomCard,
      });
    },
    pass({commit}) {
      commit("SET_PASS_BOOLEAN_TRUE");
    },
    initGame({dispatch}) {
      dispatch("generateDeckOfCards");
      dispatch("hit", "player");
      dispatch("hit", "dealer");
      dispatch("hit", "player");
      dispatch("hit", "dealer");

    }
  },
  getters: {
    deckOfCards: (state) => {
      return state.deckOfCards;
    },
    scoreDealer: (state) => {
      return Functions.calculateScore(state.cardsDealer);
    },
    scorePlayer: (state) => {
      return Functions.calculateScore(state.cardsPlayer);
    },
    cardsDealer: (state) => {
      return state.cardsDealer;
    },
    cardsPlayer: (state) => {
      return state.cardsPlayer;
    },
    pass: (state) => {
      return state.pass;
    },
    winner: (state, getters) => {
      if (getters.scoreDealer === 21 && getters.scorePlayer === 21) {
        return "Draw";
      } else if (getters.scorePlayer === 21) {
        return "Player";
      } else if (getters.scoreDealer === 21) {
        return "Dealer";
      } else if (getters.scorePlayer > 21) {
        return "Dealer";
      } else if (getters.scoreDealer > 21) {
        return "Player";
      } else if (state.pass && getters.scorePlayer > getters.scoreDealer) {
        return "Player";
      } else if (state.pass && getters.scoreDealer > getters.scorePlayer) {
        return "Dealer";
      } else {
        return "";
      }
    },
  },
});
