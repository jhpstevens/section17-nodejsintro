// get nodejs http module
const http = require("http");

// create a function that handles a request.
function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    // localhost:3000/currenttime
    response.statusCode = 200; // success
    response.end("<h1>" + new Date().toISOString() + "</h1>"); //the end method returns the html.
  } else if (request.url === "/") {
    // localhost:3000
    response.statusCode = 200; // success
    response.end("<h1>Hello World!</h1>"); //the end method returns the html.
  }
}

// we are creating a http server instance. With an event handleRequest
const server = http.createServer(handleRequest);

server.listen(3000); // port our http server
