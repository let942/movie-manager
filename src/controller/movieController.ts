import { Request, Response } from 'express';
import IMovieService from '../interface/IMovieService';
import IMovie from '../interface/IMovie';

export default class MovieController {
  constructor(private _movieService: IMovieService){}

  public async findAll(
    _req: Request,
    res: Response<IMovie[]>,
  ) {
    const result = await this._movieService.findAll();
    return res.status(200).json(result);
  }

  public async findById(
    req: Request,
    res: Response<IMovie>,
  ) {
    const {id} = req.params
    const numberId = parseInt(id)
    const result = await this._movieService.findById(numberId);
    return res.status(200).json(result)
  }

  public async create(
    req: Request,
    res: Response<IMovie>,
  ) {
    const movie = await this._movieService.create(req.body);
    return res.status(201).json(movie);
  }

  public async delete(
    req: Request,
    res: Response,
  ){
    const {id} = req.body;
    const numberId = parseInt(id);
    await this._movieService.delete(numberId);
    return res.status(204);
  }

  public async update(
    req: Request,
    res: Response<IMovie>,
  ){
    const {id} = req.params;
    const numberId = parseInt(id);
    const movie = req.body;
    const updatedMovie = await this._movieService.update(numberId, movie);
    console.log(updatedMovie)
    return res.status(200).json(updatedMovie);
  }

}