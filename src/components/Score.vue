<template>
  <div>
    <div>Cards dealer: {{ $store.getters.cardsDealer }}</div>
    <div>Cards player: {{ $store.getters.cardsPlayer }}</div>
    <div>Score dealer: {{ $store.getters.scoreDealer }}</div>
    <div>Score player: {{ $store.getters.scorePlayer }}</div>
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
      "scorePlayer",
      "scoreDealer",
    ]),
  },
  data() {
    return {};
  },
};
</script>

<style></style>
