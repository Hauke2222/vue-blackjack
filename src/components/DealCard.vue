<template>
  <div>
    <button v-bind:disabled="hitButtonDisabled" @click="$store.dispatch('hit', 'player')">
      Hit
    </button>
    <button v-bind:disabled="passButtonDisabled" @click="pass()">
      Pass
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    hitButtonDisabled() {
      if (this.$store.getters.scorePlayer >= 21 || this.$store.getters.winner != "") {
        return true;
      }
      return false;
    },
    passButtonDisabled() {
      if (this.$store.getters.scoreDealer >= 17 && this.$store.getters.pass == true || this.$store.getters.winner != "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    pass() {
      this.$store.dispatch("pass")
      while (this.$store.getters.scoreDealer < 17) {
        this.$store.dispatch("hit", "dealer");
      }
    },
  },
};
</script>

<style>
button {
  margin: 2px;
}
</style>
