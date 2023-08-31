const {createReadStream, createWriteStream} = require('fs');
const path = require('path');

// default 64kb
// last buffer -remainder
// highWaterMark -controls bit size
// start - what character to start reading from
// end - what cahracter to end from

const stream = createReadStream(path.join(__dirname, '/content/newBigFile.txt'),{
    encoding: 'utf8', 
    start: 0,
    end: 5,
    highWaterMark: 64*1024
});

stream.on('data', (result)=>{
    console.log(result);
    console.log('*******************************');
});
stream.on('error',(error) => {
    console.log(error);
});

/*
Streams 101
There are four fundamental stream types in Node.js:
Readable, Writeable, Duplex, and Transform streams

--> a readble stream is an abstraction for a source from which data can be consumed. An example of that is the fs.createReadStream Method

--> a writeble stream is an abstraction for a destinatation from which data can be written. An example of that is the fs.CreateWriteStream method

--> a duplex stream is both a readable stream and a writeable stream. An example of theat is a TCP socket

-->  transform stream is basically a duplex stream that can be used to modify or transform data as it is weitten and read. An example of that is the zilb.createGzip stream to compress the data using gzip. YOu can think of a transform stream as a function where the input is the writtable stream and the ouput is readable stream part. You might also hear transform streams referered to as "THrough streams"

All streams are instances of the EventEmitter. They emit events that can be used to read write data. However we can consume stream data in a simpler way using the pipe method.*/
