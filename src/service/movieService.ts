import IMovie from "../interface/IMovie";
import Movies from "../database/models/movies";
import IMovieService from "../interface/IMovieService";

class MovieService implements IMovieService {
  // private _movieModel: Movies;
  // constructor(model: Movies) {
  //   this._movieModel = model;
  // }

  public async findAll(): Promise<IMovie[]>{
    const movies = await Movies.findAll();
    return movies
  }
}

export default MovieService;