var express = require('express');
var cors = require('./cors');

module.exports = function(app) {
	app.set('port', 3000);
	app.use(express.logger());
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(cors());
	app.use(express.methodOverride());
	app.use(app.router);

};