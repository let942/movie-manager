import 'express-async-errors';

import { NextFunction, Request, Response } from 'express';

import cors from 'cors';
import errorHandler from './middleware/error';
import express from 'express'
import movieRoute from './routes/movieRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', async (_req: Request, res: Response)=> res.send('Movies API'))
    this.app.use(errorHandler);
    }

    private config(): void {
      const accessControl: express.RequestHandler = (_req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
        res.header('Access-Control-Allow-Headers', '*');
        next();
      }

      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(accessControl);
      this.app.use('/movies', movieRoute)
    }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

}

export {App};
