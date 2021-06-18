<template> </template>

<script>
export default {
  computed: {
    mounted() {
      this.$root.$on("clicked", (deckOfCards) => {
        this.deckOfCards = deckOfCards;
      });
    },
  },
  data() {
    return {
      deckOfCards: [],
    };
  },
};
</script>

<style></style>
