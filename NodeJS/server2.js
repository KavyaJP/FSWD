var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html',})
    if (req.url == '/home') {
        res.write("Home Page")
        res.end()
    } else if (req.url == '/about') {
        res.write(JSON.stringify({'flag':1,'msg':'Record Added'}))
        res.write('About Page')
        res.end()
    } else {
        res.write('<b>Welcome to Website, how are you</b>')
        res.end()
    }
}).listen(4000)

console.log("Server Started on http://localhost:4000")