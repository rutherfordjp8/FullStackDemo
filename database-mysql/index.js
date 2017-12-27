
// DELETE ALL OF THIS FILE. It will make you more comfortable to reference only DOCS to complete this project.

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fullStackDemo'
});

let dbFunctions = {
  getAll: () => {

  }
}

// Allows the server to import the object dbFunctions. and then use the methods(functions) inside of it.
module.exports = dbFunctions;