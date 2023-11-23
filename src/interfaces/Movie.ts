interface Movie{
    imdbId:string;
    title:string;
    releaseDate:string;
    backdrops:string[];
    genres:string[];
    id:{
        timestamp:number;
        date:string;
    }
    poster:string;
    reviewIds:string[];
    trailerLink:string
}

export default Movie;