import { config } from './config.mjs';

import express from 'express';

const app = express();

app.set('view engine', config['view engine']);

const port = config.port;

app.use((req, res, next) => {
  res.locals.notes = config.notes;

  next();
});

app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  Object.entries(config).forEach(entry => console.log(entry));

  console.log('\n' + `Listening on port ${port}...`);
});
