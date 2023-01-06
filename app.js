const http = require('http')
const url = require('url')
const fs = require('fs')
const { dirname } = require('path')

const htmldosyam = fs.readFileSync(`${__dirname}/index.html`,'utf-8')

const server=http.createServer((req,res)=>{
    const pathName=req.url
    if(pathName==='/'){
        res.end('Ana Sayfa')
    }
    else if(pathName==='/sorular'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(htmldosyam)
    }
})

server.listen(3000,()=>{
    console.log('Server calisiyor')
})