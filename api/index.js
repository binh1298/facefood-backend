import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes';
import status from 'http-status';
import cors from 'cors';
import { handleError } from './utils/errorHandler';

import db from './db/models';
require('dotenv').config();

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error.message);
  });

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

Router.forEach(route => {
  app.use(route.path, route.handler);
});

app.use((req, res, next) => {
  return res.status(status.NOT_FOUND)
    .send({
      success: false,
      error: 'Page not found!',
    });
});

// Global error handler
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;