import Sequelize from 'sequelize';

import databaseConfig from './databaseConfig';

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.connection = databaseConfig
  }

}

const database: Database = new Database();

export default database;