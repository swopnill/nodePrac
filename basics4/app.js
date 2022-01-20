// In this file, we are creating a server through node js.
// Using HTTP Module

/** 
    (importing http module of node js) (http comes with method that helps you create/start server.)
**/
const http = require("http");

const fs = require("fs");

const server = http.createServer((request, response) => {
  const { url } = request;
  const { method } = request;

  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><input type='submit' value='Submit'></form></body>"
    );
    response.write("</html>");

    return response.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY TEXT");

    response.statusCode = 302;
    response.setHeader("Location", "/");

    return response.end();
  }

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My First Page</title></head>");
  response.write("<body><h1>Hello From Swopnils Node Js Server</h1></body>");
  response.write("</html>");
  response.end();
});

server.listen(4005);
