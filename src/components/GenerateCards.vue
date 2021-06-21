<template>
  <button
    @click="
      generateDeckOfCards();
      passDataToScoreComponent();
    "
  >
    Kaarten
  </button>
</template>

<script>
import Card from "../card.js";

export default {
  methods: {
    generateDeckOfCards() {
      this.deckOfCards = [];
      for (let i = 0; i < this.cardSuit.length; i++) {
        for (let j = 0; j < this.cardRank.length; j++) {
          this.deckOfCards.push(
            new Card(
              this.cardSuit[i],
              this.cardRank[j].rank,
              this.cardRank[j].value
            )
          );
        }
      }
    },
    passDataToScoreComponent() {
      this.$root.$emit("clicked", this.deckOfCards);
    },
  },
  data() {
    return {
      deckOfCards: [],
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
      unicodes: [],
    };
  },
};
</script>

<style></style>
