<template>
  <div>
    <div>
      <p>Cards dealer:</p>
      <ul id="horizontal-list">
        <li v-for="(card, index) in cardsDealer" :key="index">
          {{ card.suit + card.unicode + card.rank }}
        </li>
      </ul>
    </div>
    <div>
      <p>Cards player:</p>
      <ul id="horizontal-list">
        <li v-for="(card, index) in cardsPlayer" :key="index">
          {{ card.suit + card.unicode + card.rank }}
        </li>
      </ul>
    </div>
    <div>Score dealer: {{ scoreDealer }}</div>
    <div>Score player: {{ scorePlayer }}</div>
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

<style>
ul#horizontal-list li {
  display: inline;
}
</style>
