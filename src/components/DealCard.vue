<template>
  <div>
    <button
      v-bind:disabled="hitButtonDisabled"
      @click="$store.dispatch('hit', 'player')"
    >
      Hit
    </button>
    <br />
    <button v-bind:disabled="passButtonDisabled" @click="pass()">
      Pass
    </button>
  </div>
</template>

<script>
export default {
  computed: {
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
    pass() {
      while (this.$store.getters.scoreDealer < 17) {
        this.$store.dispatch("hit", "dealer");
      }
    },
  },
};
</script>

<style></style>
