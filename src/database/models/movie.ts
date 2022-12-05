import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class Movie extends Model {
  id!: number;
  name!: string;
  source!: string;
  year!: number;
  whatchedAt!: Date;
}

Movie.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  source: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false,  
  },
  whatchedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'movies',
  timestamps: false,
})

export default Movie;

