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

    hit(state) {
      state.cardsPlayer.push(state.dealCard());
      if (state.cardsDealer < 17) {
        state.cardsDealer.push(state.dealCard());
      }
    },

    dealCard(state) {
      let randomNumberInDeck = Math.floor(
        Math.random() * state.deckOfCards.length
      );
      let randomCard = JSON.parse(
        JSON.stringify(state.deckOfCards[randomNumberInDeck])
      );
      state.deckOfCards.splice(randomNumberInDeck, 1);
      return randomCard;
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
