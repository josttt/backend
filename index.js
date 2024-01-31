const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
})

app.get('/', (req, res) => {
  res.render('index.njk');
  console.log('1');
})

app.get('/2', (req, res) => {
    res.render('page2.njk');
    console.log('2');
})

app.get('/3', (req, res) => {
  console.log(req.query);
  res.render('form.njk', req.query);
})

app.get('/4', (req, res) => {
  res.render('circle.njk', req.query);
})

app.post('/4', (req, res) => {
  res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})