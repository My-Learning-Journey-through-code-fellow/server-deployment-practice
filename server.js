'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./src/middleware/logger');
const notFound = require('./src/handlers/404');
const errorHandler = require('./src/handlers/500');

//This is a singleton (which is a single instance)
const app = express();

// middleware - funtions that interact with REQ / RES obj
app.use(cors());

// app.use(logger);
// app.use();

app.get('/', logger, (req, res, next) => {
  res.status(200).send('Hi World!');
});

app.get('/bad', (req, res, next) => {
  next('We have a problem');
  // express is unopinionated,I could throw an error in a very js sort of way , instead of express sort of way.
  // throw new Error('We have a problem');
});

app.use('*', notFound);
app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log('listening on port: ', PORT));
}

module.exports =  { start, app };
