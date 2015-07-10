var db = require("../config/db");

db.serialize(function() {
	// db.run("DROP TABLE `pincodes`;");
	db.run("CREATE TABLE IF NOT EXISTS `pincodes` ( `id` INTEGER PRIMARY KEY , `pincode` varchar(10) NOT NULL, `rating` INTEGER);");
});
exports.db = db;