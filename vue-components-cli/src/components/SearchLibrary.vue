<script>
import axios from 'axios';
import LibraryCollection from "@/models/LibraryCollection";
import { MediaFactory } from "@/models/MediaFactory.js";

export default{
  props: {
    emptyArray: Array,
  },
  data(){
    return{
      searchTerm: 'Jack Johnson',
      searchResults: new LibraryCollection(),
    }
  },
  methods: {
    // function to get info from vue file
    display(){
      console.log('search term', this.searchTerm);

      if(this.searchTerm) {

        // clear results
        this.searchResults = new LibraryCollection();

        let search = 'https://itunes.apple.com/search?term=' + this.searchTerm;

        axios.post(search)
            .then(response => {
              if (response.data?.results?.length > 0) {
                this.searchResults = MediaFactory.createMedia(response.data.results);
                // console.log(this.searchResults);
              }
            })
            .catch(error => {
              console.log('API SEARCH ERROR', error);
            })
      }
    },
    testProp(){
      console.log(this.emptyArray);
    }
  }
}


</script>

<template>
  <form>
    <div class="row justify-content-end">
      <div class="col-sm-6 col-md-7 pe-0">
        <input type="text"
               id="userInput"
               class="form-control"
               aria-label="Search library"
               placeholder="I.E. Beastie Boys"
               v-model="searchTerm">
      </div>
      <div class="col-sm-5 col-md-3">
        <button type="button"
                class="btn btn-success p-0 px-3"
                @click="display">
          Search Library
        </button>
      </div>
    </div>
  </form>

</template>

<style scoped>
.btn{
  min-height: 38px;
  width: 150px;
}
</style>