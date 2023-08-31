const http = require('http');
const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// const server = http.createServer((req, res) => {
    // res.end('Welcome');
// });
let siteVisited = 0;
//Using Event Emitter API
const server =http.createServer();
//emits request event
//subscribe to it/ listen to it/ respond to it
server.on("request", (req, res) => {
    if(req.url === '/about'){
        console.log(req.url);
        customEmitter.emit('visited' , req.method, req.url);
        res.end("about");
    } else if (req.url === "/time"){
        res.sendFile(__dirname + "/aboutUs.html")
    }
});

customEmitter.on('visited',(method, url)=>{
    siteVisited++;
    console.log(`Event has been triggered: This site has been visited ${siteVisited}`);
    console.log(`Method is: ${method}, the URL is: ${url}`);
})
server.listen(5000);
