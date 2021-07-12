<template>
  <div>Winner: {{ winner }}</div>
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
