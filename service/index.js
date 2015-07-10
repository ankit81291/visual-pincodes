var http = require('http'),
    express = require('express'),
    app = express(),
    server = http.createServer(app);

    

require('./config/express')(app);
require('./config/routes')(app);

server.listen(app.get('port'), function(){
  console.log('LoginNext server started on port: ' + app.get('port'));
});
