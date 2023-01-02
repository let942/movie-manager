import IMovie from './IMovie'

interface IMovieService {
  findAll(): Promise<IMovie[]>,
  findById(id: number): Promise<IMovie>,
}

export default IMovieService;
