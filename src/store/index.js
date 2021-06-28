import Vue from "vue";
import Vuex from "vuex";
import Card from "../card.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckOfCards: [],
    cardsPlayer: [],
    cardsDealer: [],
    cardRank: [
      { rank: "2", value: 2 },
      { rank: "3", value: 3 },
      { rank: "4", value: 4 },
      { rank: "5", value: 5 },
      { rank: "6", value: 6 },
      { rank: "7", value: 7 },
      { rank: "8", value: 8 },
      { rank: "9", value: 9 },
      { rank: "10", value: 10 },
      { rank: "Ace", value: 11 },
      { rank: "Jack", value: 10 },
      { rank: "Queen", value: 10 },
      { rank: "King", value: 10 },
    ],
    cardSuit: ["Clubs", "Diamonds", "Hearts", "Spades"],
  },
  mutations: {
    generateDeckOfCards(state) {
      state.deckOfCards = [];
      for (let i = 0; i < state.cardSuit.length; i++) {
        for (let j = 0; j < state.cardRank.length; j++) {
          state.deckOfCards.push(
            new Card(
              state.cardSuit[i],
              state.cardRank[j].rank,
              state.cardRank[j].value
            )
          );
        }
      }
      console.log(state.deckOfCards);
    },
    ADD_CARD_TO_DECK(state, payload) {
      if (payload.player == "player") {
        state.cardsPlayer.push(payload.card);
      } else {
        state.cardsDealer.push(payload.card);
      }
    },
    DELETE_CARD_FROM_DECK(state, payload) {
      state.deckOfCards.splice(
        state.deckOfCards[payload.randomNumberInDeck],
        1
      );
    },
  },
  actions: {
    addCardToDeck({ commit }, payload) {
      commit("ADD_CARD_TO_DECK", payload);
    },
    deleteCardFromDeck({ commit }, payload) {
      commit("DELETE_CARD_FROM_DECK", payload);
    },
  },
  getters: {
    deckOfCards: (state) => {
      return state.deckOfCards;
    },
  },
});
