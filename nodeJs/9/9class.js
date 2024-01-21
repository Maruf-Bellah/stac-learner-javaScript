// htt://rabbill.com?text-home?text-about =>  eta k bole http er query

var http = require("http");
var URL = require("url");

var server = http.createServer(function (req, res) {
  var myURL = "https://rabbil.com/blog.html?year=2020&month=july";
  var myURLObj = URL.parse(myURL, true);

  var myHostName = myURLObj.host;
  var myPathName = myURLObj.pathname;
  var mySearchName = myURLObj.search;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(myHostName);
  res.end();
});

server.listen(5050);

console.log("Yo Yo Server");
