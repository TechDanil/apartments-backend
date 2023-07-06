import express, { Request, Response } from 'express';
import router from './routes/routes';
import cors from 'cors';
require('dotenv').config();
import db from './db/models';
import apartments from './db/seeders/apartments';
import createApartments from './utils/createApartments/createApartments.util';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use('/', router);

app.get('/', (res: Response) => {
  res.send('Hello World!');
});


db.sequelize.sync({ force: true }).then(() => {
  createApartments(apartments);
  app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  })
});

