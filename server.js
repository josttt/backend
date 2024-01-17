const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true;
    express: app;
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
  console.log('somebody visited');
})

app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/views/page2.html');
    console.log('somebody visited P2');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})