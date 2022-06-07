const express = require('express');
const app = express();

app.listen('3000');
console.log("=) estou te ouvindo.");

app.route('/').get( (request, response) => response.send("Follow the white Rabbit"))