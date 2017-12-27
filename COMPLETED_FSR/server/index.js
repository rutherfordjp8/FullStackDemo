const express = require('express');
var bodyParser = require('body-parser')
var db = require('../database-mysql/index.js')

const app = express();

// This is middleware that adds a .body to request and response parameters.
// Research it more in the npm docs for body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// This loads the page index.html when you go to the webpage
app.use(express.static(__dirname + '/../react-client/dist'));

// When a get request is made with the url '/items', this function is ran.
// It uses the database method selectAll and then sends the results back to the
// client side's success function.
app.get('/items', function(req, res) {
  db.selectAll((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
})

// When a post request is made with the url '/items', this function is ran.
// It uses the database method addItem and then sends the results back to the
// client side's success function.
app.post('/items', function(req, res) {
  console.log(req.body);

  db.addItem(req.body, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.json(results);
    }
  })
})

// This is what actually starts the node server. Where 3000 is the port number you want to use.
app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
)