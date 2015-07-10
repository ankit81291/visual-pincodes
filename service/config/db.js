var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./config/data');

db.on('trace', function(sql) {
	console.log('\n==> ' + sql + "\n");
});

module.exports = db;
