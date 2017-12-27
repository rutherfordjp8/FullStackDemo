var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fullStackDemo'
});

let dbFunctions = {

  // Gets All the items from the database
  selectAll: function(callback) {
    connection.query('SELECT * FROM todo', function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  // Adds one item to the database and responds with results. Results contains a insertID property
  // which is ID of the item added.
  addItem: function(input,callback) {
    connection.query(`INSERT INTO todo (todoText) VALUES ('${input.todoText}') `, function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
}

// Allows the server to import the object dbFunctions. and then use the methods(functions) inside of it.
module.exports = dbFunctions;