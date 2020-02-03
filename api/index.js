import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes';
const status = require('http-status');

require('dotenv').config();

const app = express();
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

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;