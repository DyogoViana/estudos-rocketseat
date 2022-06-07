const { request, response } = require('express');
const express = require('express');
const app = express();

app.listen('3000');
console.log("=) estou te ouvindo.");


// middleware
app.use(express.json());

let author = "Duda";

app.route('/').get((request, response) => response.send(author));

app.route('/').put((request, response) => {
    author = request.body.author;
    response.send(author);
})

// POST
// app.route('/').post((request, response) => response.send(request.body));

// GET
// app.route('/').get( (request, response) => response.send("Follow the white Rabbit"))