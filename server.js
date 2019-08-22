
const express = require('express');
const bodyParser = require('body-parser');
//const qr = require('qr-image');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
// Set static folder
app.use(express.static('static'));

app.use(require('./routes'));


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

const path = require('path');

