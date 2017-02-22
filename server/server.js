/* eslint no-console: ["off"] */
/* eslint one-var: ["off"] */

const api = require('./end-points-serv/api'),
  bodyparser = require('body-parser'),
  compression = require('compression'),
  cors = require('cors'),
  express = require('express'),
  path = require('path');

const data = path.join(__dirname, 'data');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(compression());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

api(app, {
  data,
  file: 'data.json',
});

const server = app.listen(port, () => {
  const host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port);
});
