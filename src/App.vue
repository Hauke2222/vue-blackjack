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
body {
  text-align: center;
  margin: 0 auto;
  max-width: 45rem;
  padding: 0 15px;
  font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD",
    "Book Antiqua", Georgia, serif;
  background-color: #fffff8;
  color: #111;
}

p {
  line-height: 1rem;
}

ul {
  -webkit-padding-start: 0%;
}

h1,
h2,
h3 {
  font-weight: 400;
  line-height: 1;
}

h1 {
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-size: 3.2rem;
}

h2 {
  font-style: italic;
  margin-top: 2.1rem;
  margin-bottom: 0;
  font-size: 2.2rem;
}

h3 {
  font-style: italic;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
}
</style>
