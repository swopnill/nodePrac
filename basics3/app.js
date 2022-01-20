// In this file, we are creating a server through node js.
// Using HTTP Module

/** 
    (importing http module of node js) (http comes with method that helps you create/start server.)
**/
const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My First Page</title></head>");
  response.write("<body><h1>Hello From Swopnils Node Js Server</h1></body>");
  response.write("</html>");
  response.end();
});

server.listen(5000);
