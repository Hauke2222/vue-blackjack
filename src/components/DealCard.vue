<template>
  <div>
    <button @click="hit()">Trek een kaart</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["deckOfCards", "cardsPlayer", "cardsDealer"]),
  },
  methods: {
    hit() {
      this.$store.dispatch("addCardToDeck", {
        player: "player",
        card: this.dealCard(),
      });

      if (this.cardsDealer < 17) {
        this.$store.dispatch("addCardToDeck", {
          player: "dealer",
          card: this.dealCard(),
        });
      }
    },

    dealCard() {
      let randomNumberInDeck = Math.floor(
        Math.random() * this.deckOfCards.length
      );
      let randomCard = this.deckOfCards[randomNumberInDeck];
      this.$store.dispatch("deleteCardFromDeck", randomNumberInDeck);
      return randomCard;
    },
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style></style>
