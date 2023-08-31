const express = require('express');
const path = require('path');
const app = express();

// setup static middleware
// Middleware comes in the middle of the request and response cycle of the node.js execution. It able provides access to many functions like request and response objects

/* Response Object is passed as the second parameter to the requestListener function. The response object represents the writable stream back to the client
--write() Sends text or text stream to the client
--writeHead() Sends status and response headers to the client
--end() Signals that the server should consider taht the response is complete
--getHeader() Returns the value of the specified header
--setTimeout() Sets the timeout value of the socket to the specified value in milliseconds
--statusCode - Sets the status code that will be sent to the client

For the writeHead and the statusCode methods the following are acceptable:
100-199 Information Response
200-299 Successful Response
300-399 Redirect Message
400-499 CLient Error
500-599 Server Error

You can find the detailed list
@https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


// Request Object is made by a client to a named host which is located on the server. THe aim of the request is to access resources on the server.
A proper HTTP request contains the following:
-- A request line
-- A series of HTTP header(s)
-- A Message body is needed

Request Line:
Has 3 main aspects
-- A method like GET, UPDATE, DELETE...etc tells the server what it should do with the resource 
-- The Path component ideentidies the resource on the server
-- The HTTP Version number showing what specification to which the client has tried to mae the message comply 

HTTP Header:
HTTP Headers are written on a message to provide the recipient with information about the request, the sender and the way in which the sender wants to communicate with the server/recipent
Ex. {'content-type': 'text/html'},
-host, user-agent...etc


*/

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    console.log(req.url)
    res.sendFile(path.resolve(__dirname, '/public'));
})

app.get('*', (req,res) => {
    res.status(404).send("404 Not Found");
});
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});