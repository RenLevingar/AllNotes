/*
Get back the class if want to extend from class otherwise just for emittings and handlings events create instances...*/
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/*
on and emit methods keep track of the order and additional arguements and built in modules use it
*/

customEmitter.on('response',(name,id)=>{
    console.log(`data received: ${name} with id ${id}`);
});

customEmitter.on('testing',()=>{
    console.log("Some other login is here");
});

customEmitter.emit('testing',"John",34);
// Much of NodeJS core API is built around idiomatic async event architechture in which certain kinds of objects called emitters emit named events that cause Function objects or listeners to be called. 