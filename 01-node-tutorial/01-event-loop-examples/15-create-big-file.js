const {writeFileSync} = require ('fs');
const path = require('path');
// every bit of data is written to the end of the file
let message = `The interactive Coding program prepares students for a career as as software devloper. It teacher students how to design and develop software, build apps for phones, tablets, websites and write and test computer code.`;
// for(i=0; i<10000; i++){
//     writeFileSync(path.join(__dirname, "/content/bigFile.txt"), message, {flag:"a"});
// };
// 10 times to become 200 megabytes

// Every bit of data overwrites the last bit of data
writeFileSync(path.join(__dirname,"/content/bigFile.txt"), message,{flag:"w"});

// Error Issues:
// for(let i=0; i<10000; i++){
//     writeFileSync(path.join(__dirname,"/content/bigFile.txt"), message, {flag:"r"});
// };

// OR Writestreams

const fs = require("fs");
const server = require("http").createServer();
const file = fs.createWriteStream(path.join(__dirname,"./content/newBigFile.txt"));
for(let i=0; i< 1; i++){
    file.write("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, minima. Dolore architecto impedit molestias optio tenetur rem eius vitae praesentium aspernatur exercitationem consequatur magni ea, officia ipsum adipisci mollitia suscipit voluptate velit fuga possimus reprehenderit quam. Nobis tempore blanditiis repellendus aliquam magnam error quam pariatur illum sapiente voluptatem labore eveniet, in ex. Error aperiam quisquam illum in consequuntur accusantium illo delectus similique nesciunt sit, minima molestias a debitis cum at doloribus dolorum vel nulla corrupti dicta? Quo quae sit possimus necessitatibus. Expedita consectetur quibusdam atque, unde excepturi, eligendi illo ex blanditiis optio sed asperiores, quaerat ut beatae accusantium odio ipsa?\n");
}
file.end()
// server.on('request', (req,res) => {
//     fs.readFile(path.join(__dirname, "./content/newBigFile.txt"),(err,data)=>{
//         if(err) {console.log(err)};
//         res.end(data);
//     })
//     const src = fs.createReadStream(path.join(__dirname, "./content/newBigFile.txt"));
//     src.pipes(res);
    
// });

// server.listen(8000)
// Create a readablestream instead
// const src = fs.createReadStream(path.join(__dirname,"./content/newBigFile.txt"));