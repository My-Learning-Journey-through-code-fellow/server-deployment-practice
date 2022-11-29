'use strict';


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const PORT = process.env.PORT || 3002;


// //This is a singleton (which is a single instance)
// const app = express();


// // middleware - funtions that interact with REQ / RES obj
// app.use(cors());

// // app.use();

// app.get('/', (req, res, next) => {
//   res.status(200).send('Hi World');
// });

// app.listen(PORT, () => console.log('listening on port: ', PORT));

const server = require('./server.js');

server.start();
