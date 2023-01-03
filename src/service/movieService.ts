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
    return Movies.create(movie)
  }

  public async delete(id: number): Promise<number>{
    await Movies.destroy({
      where:{
        id
      }
    })
    return id
  }

public async update(id: number, movie: IMovieInput): Promise<IMovie> {
  const updatedMovie = await Movies.update(
    {
      name: movie.name,
      rating: movie.rating,
      source: movie.source,
      year: movie.year,
      whatchedAt: movie.whatchedAt,
  },
  {
    where: {id}
  })
  return this.findById(id)
}

}

export default MovieService;