// In this file, we are creating a server through node js.
// Using HTTP Module

/** 
    (importing http module of node js) (http comes with method that helps you create/start server.)
**/
const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);
});

server.listen(4000);
