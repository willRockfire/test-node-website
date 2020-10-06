
  var http = require('http');
  var test = require('./test-modules.js');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(req.url);
  }).listen(8080);
