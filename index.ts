import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(' '));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server WE OUT HERE AND ANOTHER EDIT AND A FINAL ONE? no way we can do another one... but we can!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});