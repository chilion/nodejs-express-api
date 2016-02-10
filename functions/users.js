// Use MySql by including it
//var database = require('../inc/database.js');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'test.url.io',
  user     : 'root',
  password : 'aaaaaa',
  database : '_data'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected to the database as id ' + connection.threadId);
});

exports.returnUser = function (req, res) {
        var result;
	
	console.log(req.query);

        connection.query("SELECT * FROM users WHERE id = ?", [req.query.id],
                (function (err, rows, fields) {
                        if (err) throw err;
                        this.result = rows;

                        res.json(this.result);
        }).bind(this));

}
