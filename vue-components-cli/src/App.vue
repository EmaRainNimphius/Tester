<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
// added for iTunes assignment
import SearchLibrary from "@/components/SearchLibrary.vue";

export default {
  components: {LibraryItemList, SearchLibrary},
  data() {
    return {
      MediaCollection: [],
    }
  }
}
</script>

<template>

  <div class="container-fluid">
    <!-- updated for iTunes assignment-->
    <nav class="navbar bg-dark px-5">
      <div class="col-md-6 py-3 ps-5">
        <span class="navbar-brand text-light ">
          <i class="fas fa-shopping-bag ms-4 me-3"></i>
          Ema's Library
        </span>
      </div>
      <div class="col-md-6 py-3 pe-5">
        <SearchLibrary :empty-array="MediaCollection"/>
      </div>
    </nav>

    <div class="item-list mt-4">
      <library-item-list></library-item-list>
    </div>
  </div>

</template>

<style scoped>

</style>
