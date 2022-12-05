import { Options } from 'sequelize';

const config:  Options = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'movie_manager',
  port: 5432,
  define: {
    timestamps: true,
  },
};

export default config;