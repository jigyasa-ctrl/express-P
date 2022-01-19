const http = require('http')
const {readFileSync} =require('fs')
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (req.url == '/about') {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } else {
        res.writeHead(404, { 'content-Type': 'text/html' })
        res.write('<h1>eror</h1>')
        res.end()
    }

})
server.listen(8000)