import Vue from "vue";
import Vuex from "vuex";
import Card from "../card.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckOfCards: [],
    cardsPlayer: [],
    cardsDealer: [],
    winner: "",
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
    // CHECK_FOR_WIN(state) {},
    // GENERATE_STARTPOINT_GAME(state) {},
  },
  actions: {
    addCardToDeck({ commit }, payload) {
      commit("ADD_CARD_TO_HAND", payload);
    },
    deleteCardFromDeck({ commit }, payload) {
      commit("DELETE_CARD_FROM_DECK", payload);
    },
    generateDeckOfCards({ commit }) {
      commit("GENERATE_DECK_OF_CARDS");
    },
    // generateGameStartPoint({ commit }) {
    //   commit("GENERATE_STARTPOINT_GAME");
    // },
  },
  getters: {
    deckOfCards: (state) => {
      return state.deckOfCards;
    },
    scoreDealer: (state) => {
      return state.cardsDealer.reduce((acc, card) => acc + card.value, 0);
    },
    scorePlayer: (state) => {
      return state.cardsPlayer.reduce((acc, card) => acc + card.value, 0);
    },
    cardsDealer: (state) => {
      return state.cardsDealer;
    },
    cardsPlayer: (state) => {
      return state.cardsPlayer;
    },
    winner: (state) => {
      return state.winner;
    },
  },
});
