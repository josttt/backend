const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('somebody visited');
})

app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/page2.html');
    console.log('somebody visited P2');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})