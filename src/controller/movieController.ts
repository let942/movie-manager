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
}