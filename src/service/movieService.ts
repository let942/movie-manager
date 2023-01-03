import IMovie from "../interface/IMovie";
import Movies from "../database/models/movies";
import IMovieService from "../interface/IMovieService";
import { IMovieInput } from "../database/models/IMovieInput";

class MovieService implements IMovieService {
  // private _movieModel: Movies;
  // constructor(model: Movies) {
  //   this._movieModel = model;
  // }

  public async findAll(): Promise<IMovie[]>{
    const movies = await Movies.findAll();
    return movies
  }

  public async findById(id: number): Promise<IMovie>{
    const movie = await Movies.findByPk(id);
    if (movie != null){
      return movie
    }
      throw new Error('movie not found');
  }

  public async create(movie: IMovieInput): Promise<IMovie> {
    console.log(movie)
    return Movies.create(movie)
  }


}

export default MovieService;