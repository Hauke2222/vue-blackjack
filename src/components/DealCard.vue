<template>
  <div>
    <button v-bind:disabled="hitButtonDisabled" @click="$store.dispatch('hit')">
      Hit
    </button>
    <br />
    <button v-bind:disabled="passButtonDisabled" @click="$store.dispatch('pass')">
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
  methods: {},
  created() {},
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style></style>
