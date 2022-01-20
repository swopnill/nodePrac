const http = require("http");

const router = require("./routes");

const httpServer = http.createServer(router);

httpServer.listen(3007);
