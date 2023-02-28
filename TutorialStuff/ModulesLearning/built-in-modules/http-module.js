// HTTP module
// This module deals with creating web servers

const HTTP = require("http");

// HTTP.createServer((request, response)=>{})
// Creates a web server, requires a callback function with the arguments request and response
const server = HTTP.createServer((request, response)=>{

    if (request.url === "/") {

        response.end("Hello, world! Welcome to the homepage.");

    } else if (request.url === "/about") {

        response.end("About page");

    } 

    response.end("<h1>Oops! 404 error :(</h1>");

});

// server.listen(portNumber)
// Listens for requests and gives responses on the given port number
server.listen(5000);