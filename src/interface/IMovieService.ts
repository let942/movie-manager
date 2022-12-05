import IMovie from './IMovie'

interface IMovieService {
  findAll(): Promise<IMovie[]>,
}

export default IMovieService;
