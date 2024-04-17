// methods that allow you to create book or movie

// google factory class examples

import LibraryCollection from "@/models/LibraryCollection.js";
import { Movie, Book, Song } from "@/models/Media.js";

class MediaFactory {
    static createMedia(type){
        const collection = new LibraryCollection();

        type.forEach(type => {

            let newMedia = false;


            switch(type.wrapperType.toLowerCase()) {
                case "feature-movie":
                    newMedia = Object.assign(new Movie());
                    console.log("It's a movie")
                    break;
                case "audiobook":
                    newMedia = Object.assign(new Book());
                    console.log("It's a audiobook")
                    break;
                case "track":
                    newMedia = Object.assign(new Song());
                    console.log("it's a song")
                    break;
                default:
                    console.warn('No models defined for ');
                    break;
            }

            if(newMedia){
                collection.add(newMedia);
            }
        }); // end of forEach
        return collection;
    }

    static createFromLocalStorage(items){
        // currently this is no different, but could be in the future
        return this.createMedia(items);
    }
}
export { MediaFactory }