import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()
const port = 3000;

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


const server = app.listen(3000, () => console.log('server running on port 3333'))

export default server;