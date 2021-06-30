<template>
  <div>
    <button @click="$store.dispatch('calculateScore')">
      Bereken score
    </button>
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
