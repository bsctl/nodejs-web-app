//Simple logging web server in nodejs

var http = require('http');
var fs = require('fs');
var ip = require('ip');
var message = process.env.MESSAGE || 'Hello World!';
var server = http.createServer();

const PORT = 8080;
const HOST = ip.address();
const LOGDIR = '/var/log/';
const LOGFILE = 'requests.log';

//Define behaviour of the server receiving requests
server.on('request', function(req,resp){
  // Get the IP address of the client
  var remote = req.connection.remoteAddress;
  console.log('Got request from: %s', remote);
  
  // Prepare and send the rensponse
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/html');
  var body = message + ' from ' + HOST;
  var html = '<html><head><title>Hello Gdansk</title></head><body><h1>' + body + '</h1></body></html>\n'; 
  resp.end(html);
  
  // Log the client IP address
  var stamp = Date.now();
  fs.appendFile(LOGDIR + LOGFILE, stamp + ' ' + remote + '\n', encoding='utf8', function (e) {
    if (e) return console.log('Something went wrong with logging %s', e);
  });
});

//Start the server
server.listen(PORT, function(){
    console.log('Server listening on: %s:%s', HOST,PORT);
});
