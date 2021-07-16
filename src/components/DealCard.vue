<template>
  <div>
    <button v-bind:disabled="hitButtonDisabled" @click="hit()">
      Hit
    </button>
    <br />
    <button v-bind:disabled="passButtonDisabled" @click="pass()">
      Pass
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "deckOfCards",
      "cardsPlayer",
      "cardsDealer",
      "scoreDealer",
      "scorePlayer",
    ]),
    hitButtonDisabled() {
      if (this.$store.getters.scorePlayer >= 21) {
        return true;
      }
      return false;
    },
    passButtonDisabled() {
      if (this.$store.getters.scoreDealer >= 17) {
        return true;
      }
      return false;
    },
  },
  methods: {
    hit() {
      this.$store.dispatch("addCardToDeck", {
        player: "player",
        card: this.dealCard(),
      });
    },

    pass() {
      while (this.$store.getters.scoreDealer < 17) {
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
  created() {},
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style></style>
