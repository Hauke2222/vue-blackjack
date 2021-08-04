<template>
  <div id="app">
    <h1>Blackjack</h1>
    <Score />
    <DealCard />
    <Outcome />
  </div>
</template>

<script>
import DealCard from "./components/DealCard.vue";
import Outcome from "./components/Outcome.vue";
import Score from "./components/Score.vue";

export default {
  name: "App",
  components: {
    DealCard,
    Score,
    Outcome,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 25px;
}
</style>
