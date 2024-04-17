<script>
import SomeBookThing from "@/components/BookDetails.vue";
import MovieDetails from "@/components/MovieDetails.vue";
export default {
  name: "LibraryItem",
  components: {'BookDetails': SomeBookThing, MovieDetails},
  props: {
    item: {
      type: Object,
    },
    removeItem: {
      type: Function,
    }
  },
}
</script>

<template>
  <div class="card h-100" :class="{'border-warning': !item.isAvailable()}">
    <div class="card-body">
      <!--                <component :is="typeOfItem" :item="item"></component>-->
      <component :is="item.constructor.detailsComponent" :item="item"></component>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-outline-danger" @click="$emit('remove', item)">Remove (emit)</button>
      <button class="btn btn-outline-danger" @click="removeItem">Remove (props)</button>
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<style scoped>

</style>