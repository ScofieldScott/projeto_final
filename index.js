const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTamplate = require('./module/replaceTemplate');
const data = fs.readFileSync(`${__dirname}/dev-data/pessoa.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);

    if(pathname === '/' || pathname === '/homePage'){
        //res.writeHead(2--, {'Content-type': 'text/html'});
        res.end('This the home page!');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listenig to request on port 8000');
});