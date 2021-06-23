<template> </template>

<script>
export default {
  computed: {
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
      deckOfCards: [],
      cardsPlayer: [],
      cardsDealer: [],
    };
  },
};
</script>

<style></style>
