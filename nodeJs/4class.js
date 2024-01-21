// my first node server run hello world

var http = require("http");

var server = http.createServer(function (res, req) {
  req.end("hello maruf bellah sever");
});

server.listen(4000);
console.log("hello server");
