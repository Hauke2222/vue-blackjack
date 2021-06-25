<template>
  <div>
    <button @click="hit()">Trek een kaart</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["deckOfCards", ""]),
  },
  methods: {
    hit() {
      console.log("qwerqwre" + this.$store.getters.deckOfCards);
      this.cardsPlayer.push(this.dealCard);
      if (this.cardsDealer < 17) {
        this.cardsDealer.push(this.dealCard);
      }
    },

    dealCard() {
      let randomNumberInDeck = Math.floor(
        Math.random() * this.deckOfCards.length
      );
      console.log(randomNumberInDeck);
      let randomCard = this.deckOfCards[randomNumberInDeck];
      this.deckOfCards.splice(randomNumberInDeck, 1);
      console.log(randomCard);
      return randomCard;
    },
  },
  mounted() {},
  data() {
    return {
      deckOfCards: [],
      cardsPlayer: [],
      cardsDealer: [],
    };
  },
};
</script>

<style></style>
