function Book(title, pages){
    this.title = title;
    this.pages = pages;
}
Book.type = "Book";
Book.detailsComponent = "BookDetails";


class Movie {
    static type = "feature-movie";
    static detailsComponent = "MovieDetails";

    trackName;
    constructor(trackName) {
        this.trackName = trackName;
    }
}

class Song {
    static type = "song";
    static detailsComponent = "SongDetails";

    artistName;
    constructor(artistName) {
        this.artistName = artistName;
    }
}

export {Book, Movie, Song};
// named exports, imported with 'import {Book} ...'