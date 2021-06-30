<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Blackjack</h1>
    <DealCard />
    <Score />
  </div>
</template>

<script>
import DealCard from "./components/DealCard.vue";
import Score from "./components/Score.vue";

export default {
  name: "App",
  components: {
    DealCard,
    Score,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
