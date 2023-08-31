// HTTP App template
const http = require('http');
const path = require('path');
const {readFileSync} = require('fs');

// get All Silfes
const homePage = readFileSync(path.join(__dirname, '/public/index.html'));
const homeStyles = readFileSync(path.join(__dirname, '/public/styles.css'));
const homeImage = readFileSync(path.join(__dirname, '/public/logo.svg'));
const homeLogic = readFileSync(path.join(__dirname, '/public/browser_app.js'));

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    // Homepage
    if(url == '/'){
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    // about page
    else if(url == '/about'){
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }
    //404
    else{
        res.writeHead(400, { 'content-type': 'text/html'});
        res.write('<h1>Error 404</h1>');
        res.end();
    }
}).listen(5000);