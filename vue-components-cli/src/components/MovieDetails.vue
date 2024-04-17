<script>
import {Movie} from "@/models/Media.js";

export default {
  name: "MovieDetails",
  props: {
    item: {
      type: Movie,
    },
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{ item.trackName }}</h3>
    <p v-if="item.runtime" class="card-text">Runtime: {{ item.trackName }}</p>
  </div>
</template>

<style scoped>

</style>