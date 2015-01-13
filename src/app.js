var express = require('express'),
    app = express(),
    path = require('path'),
    routes = require('./routes');

routes(app);

app.use('/', express.static(path.join(__dirname, '..', 'static')));

app.listen(8080, function() {
  console.log('app running');
});
