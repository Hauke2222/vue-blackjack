<template>
  <div>
    <button @click="hit()">Trek een kaart</button>
    <br />
    <button @click="pass()">Pass</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["deckOfCards", "cardsPlayer", "cardsDealer", "scoreDealer"]),
  },
  methods: {
    hit() {
      this.$store.dispatch("addCardToDeck", {
        player: "player",
        card: this.dealCard(),
      });

      if (this.$store.getters.scoreDealer < 17) {
        this.$store.dispatch("addCardToDeck", {
          player: "dealer",
          card: this.dealCard(),
        });
      }
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
  created() {
    /*     this.$store.dispatch("addCardToDeck", {
      player: "player",
      card: this.dealCard(),
    });
    this.$store.dispatch("addCardToDeck", {
      player: "dealer",
      card: this.dealCard(),
    }); */
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style></style>
