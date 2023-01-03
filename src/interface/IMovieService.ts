import IMovie from './IMovie'
import { IMovieInput } from '../database/models/IMovieInput'

interface IMovieService {
  findAll(): Promise<IMovie[]>,
  findById(id: number): Promise<IMovie>,
  create(movie: IMovieInput): Promise<IMovie>
}

export default IMovieService;
