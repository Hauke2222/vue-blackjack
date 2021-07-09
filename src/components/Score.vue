<template>
  <div>
    <div>
      <ul id="horizontal-list">
        <li
          class="bigFontSize"
          v-for="(card, index) in cardsDealer"
          :key="index"
          v-html="card.unicode"
        ></li>
      </ul>
    </div>
    <div>
      <ul id="horizontal-list">
        <li
          class="bigFontSize"
          v-for="(card, index) in cardsPlayer"
          :key="index"
          v-html="card.unicode"
        ></li>
      </ul>
    </div>
    <div>Score dealer: {{ scoreDealer }}</div>
    <div>Score player: {{ scorePlayer }}</div>
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
