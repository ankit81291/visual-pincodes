var pincode = require('../routes/pincode');


module.exports = function(app) {

    /* Pincode routes */
    app.get('/pincodes', pincode.getAllPincodes);
    app.get('/pincodes/:pincode', pincode.get);
    app.post('/pincodes/add', pincode.add);
    app.post('/pincodes/:pincode', pincode.update);
};
