<template>
  <div>
    <ul id="horizontal-list">
      <p>Score dealer: {{ scoreDealer }}</p>
      <li class="bigFontSize" v-for="(card, index) in cardsDealer" :key="index" v-html="card.unicode"></li>

    </ul>
    <ul id="horizontal-list">
      <p>Score player: {{ scorePlayer }}</p>
      <li class="bigFontSize" v-for="(card, index) in cardsPlayer" :key="index" v-html="card.unicode"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["scoreDealer", "scorePlayer"]),
    ...mapState(["deckOfCards", "cardsPlayer", "cardsDealer"]),
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

.bigFontSize {
  font-size: 100pt;
}
</style>
