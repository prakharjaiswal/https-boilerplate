const express = require('express')
const https  = require('https');
const helmet = require('helmet');
const fs = require("fs");


const app = express();
const port = 3000;
const rootDir = '..';

app.use(helmet());

app.use(express.static('ui/dist'));

https.createServer({
    key: fs.readFileSync(`./server.key`),
    cert: fs.readFileSync(`./server.cert`)
  }, app)
  .listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
  })