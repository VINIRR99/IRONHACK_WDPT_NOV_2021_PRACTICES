require("dotenv").config();

// app.js
const express = require('express');
const app = express();
const hbs = require('hbs'); 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params);
});

app.get('/search', (req, res, next) => {
    res.send(req.query);
});  

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));