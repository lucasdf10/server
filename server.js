
const express = require('express');
const app = express();
app.use(express.static('cv'));
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/cv/index.html'));
});

app.get('/easytracking', (req, res) => {
  res.send("EASY TRACKING");
});


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
