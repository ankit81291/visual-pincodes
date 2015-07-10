var db = require('../models/pincode.js').db;

exports.getAllPincodes = function(req, res) {
    var data = [];
    db.serialize(function() {
        db.each('SELECT id, pincode, rating FROM `pincodes`', function(err, row) {
            data.push(row);
        }, function(err, rows) {
            res.json(data);
        });
    });
};

exports.get = function(req, res) {
    var pincode = req.params.id;
    db.serialize(function() {
        db.get('SELECT pincode, rating FROM `pincodes` WHERE `pincode` = ?',
            pincode, function(err, record) {
                res.json(record);
            }
        );
    });
};

exports.add = function(req, res) {
    db.serialize(function() {
        var stmt = db.prepare("INSERT INTO `pincodes` (`pincode`, `rating`) VALUES (?, ?)");
        var record = req.body;

        stmt.run([record.pincode, record.rating], function() {
            db.get('SELECT pincode, rating FROM `pincodes` WHERE id = ?', stmt.lastID,
                function(err, record) {
                    res.json(record);
                }
            );
        });
        stmt.finalize();
    });
};

exports.update = function(req, res) {
    var pincode = req.params.pincode;
    db.serialize(function() {
        db.run('UPDATE `pincodes` SET `rating` = ? WHERE `pincode` = ?', [req.body.rating, pincode], function() {
            db.get('SELECT pincode, rating from `pincodes` WHERE `pincode` = ?', pincode, function(err, record) {
                res.json(record);
            });
        });
    });
};