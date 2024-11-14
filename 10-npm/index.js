const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello mr. Zuikis kietas.');
});

app.listen(3000);
