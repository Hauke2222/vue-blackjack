<template> </template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["deckOfCards", "cardsPlayer", "cardsDealer"]),
    
    calculateScore(cards) {
      while (
        (score = cards.reduce(function(acc, card) {
          return acc + parseInt(parseInt(card.value));
        }, 0)) > 21 &&
        (ace = checkForCardOf11Score(cards))
      ) {
        ace.value = 1;
      }
      return score;
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style></style>
