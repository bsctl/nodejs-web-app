//Simple web server in nodejs
var http = require('http');
var answer = process.env.MESSAGE;
var server = http.createServer();
const PORT = 8080

//Define behaviour of the server receiving requests
server.on('request', function(request,response){
  console.log("Got request from: %s", request.connection.remoteAddress);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(answer + '\n');
});

//Start the server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening
    console.log("Server listening on: localhost:%s", PORT);
});
