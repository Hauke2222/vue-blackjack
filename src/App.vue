<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Blackjack</h1>
    <GenerateCards />
  </div>
</template>

<script>
import GenerateCards from "./components/GenerateCards.vue";

export default {
  name: "App",
  components: {
    GenerateCards,
  },
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
