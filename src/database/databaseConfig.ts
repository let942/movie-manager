import Sequelize from 'sequelize';

const config = new Sequelize.Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'movie_manager',
  port: 5433,
  define: {
    timestamps: true,
  },
});

export default config;