import {Optional} from 'sequelize'
import IMovie from '../../interface/IMovie';

export interface IMovieInput extends Optional<IMovie, 'id'> {}