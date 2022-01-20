const fs = require("fs");

const requestHandler = (request, response) => {
  const { url } = request;
  const { method } = request;

  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write("<body>");
    response.write("<h1>Hello World !</h1>");
    response.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'/><input type='submit' value='Submit'></form>"
    );
    response.write("</body>");
    response.write("</html>");

    return response.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    request.on("data", (chunk) => {
      body.push(chunk);

    });

    return request.on("end", (err) => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      response.statusCode = 302;
      response.setHeader("Location", "/");

      console.log("my message", message);

      return response.end();
    });
  }

  if (url === "/users") {
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write("<body>");
    response.write(
      "<ul><li>Dog</li><li>Cat</li><li>Rat</li><li>Tiger</li><li>Leopard</li><li>Lion</li></ul>"
    );
    response.write("</body>");
    response.write("</html>");

    return response.end();
  }
};

module.exports = requestHandler;
