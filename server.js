//Simple web server in nodejs
var http = require('http');
var ip = require('ip');
var answer = process.env.MESSAGE;
var server = http.createServer();
const PORT = 8080;
const HOST = ip.address();

//Define behaviour of the server receiving requests
server.on('request', function(req,resp){
  console.log("Got request from: %s", req.connection.remoteAddress);
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end(answer + " from " + HOST + "\n" );
});

//Start the server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening
    console.log("Server listening on: %s:%s", HOST,PORT);
});
