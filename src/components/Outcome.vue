<template>
  <h2>Winner: {{ winner }}</h2>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["winner"]),
  },
};
</script>

<style></style>
