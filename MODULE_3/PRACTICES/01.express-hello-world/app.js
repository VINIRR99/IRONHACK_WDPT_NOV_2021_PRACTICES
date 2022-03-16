require("dotenv").config();

const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));

// ... the previously added code
// Server Started
app.listen(process.env.PORT, () => console.log(`My first app listening on port ${process.env.PORT}!`));