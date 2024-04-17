<script>
import {Song} from "@/models/Media.js";

export default {
  name: "SongDetails",
  props: {
    item: {
      type: Song,
    },
  },

}
</script>

<template>
  <div class="song">
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.pages" class="card-text">Pages: {{ item.title }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
h3 {
  color: $primary;
}
</style>