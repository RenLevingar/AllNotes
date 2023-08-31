const http = require('http');
const path = require('path');

const server = http.createServer((req,res) => {
    console.log(req.method);
    const url = req.url;
    // home page
    if(url == '/'){
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write('<h1>Home Page of Ren</h1>');
        res.end();
    }
    // about page
    else if(url == '/about'){
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write('<h1>About Page of Ren</h1>');
        res.end();
    }
    //404
    else{
        res.writeHead(400, { 'content-type': 'text/html'});
        res.write('<h1>I guess NOT: 404</h1>');
        res.end();
    }
}).listen(6000);