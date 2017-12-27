

// DELETE ALL OF THIS FILE. It will make you more comfortable to reference only DOCS to complete this project.


const express = require('express');
var bodyParser = require('body-parser')
var db = require('../database-mysql/index.js')

const app = express();



// This is middleware that adds a .body to request and response parameters.
// Research it more in the npm docs for body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// This loads the page index.html when you go to the webpage
app.use(express.static(__dirname + '/../react-client/dist'));

// This is what actually starts the node server. Where 3000 is the port number you want to use.
app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
)