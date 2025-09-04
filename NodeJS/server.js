http = require('http')

var a = 10
var b = 20

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello, World! <br/>");
    res.write("I am KavyaJP");
    res.write(`<br/> A is ${a} <br/> B is ${b} <br/> it's sum c is ${a+b}`);
}).listen(4000);

console.log("Server Started on http://localhost:4000");
