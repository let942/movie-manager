import express from 'express'
import cors from 'cors';

import { Router, Request, Response, NextFunction } from 'express';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (_req: Request, res: Response)=> res.send('oi'))
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
    }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

}

export {App};