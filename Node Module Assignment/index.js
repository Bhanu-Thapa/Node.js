
const fs = require('fs');

const data = 'Node.js is built on a single-threaded, event-driven architecture that allows it to handle multiple concurrent requests asynchronously using a non-blocking I/O model. This makes it highly efficient for scalable applications. It relies on the V8 JavaScript engine, which compiles JavaScript code into machine code for fast execution. Node.js also utilizes Libuv, a library that handles asynchronous I/O operations, providing support for multi-platform event-driven programming. For CPU-intensive tasks, Node.js can spawn worker threads to perform parallel processing, improving performance.'

const nodejsAdvantages = `
Node.js offers several advantages, including high performance due to its use of the V8 engine, which compiles JavaScript into machine code. Its non-blocking, event-driven architecture allows for handling many concurrent requests efficiently, making it ideal for scalable applications. Node.js also benefits from a vast ecosystem of packages through npm, making development faster and easier. Additionally, its ability to use JavaScript on both the server and client sides promotes consistency in development.
`;

// 2
fs.writeFile('nodejs_architecture.txt',data, (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Create Successfully');
  }
})

// 3
fs.readFile('nodejs_architecture.txt',(err,dat)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Reading data : ',dat.toString())
  }
})

// 4


fs.appendFile('nodejs_architecture.txt', nodejsAdvantages, 'utf8',(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Append Successfully');
  }
} )

fs.readFile('nodejs_architecture.txt',(err,dat)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Reading data : ',dat.toString())
  }
})

// 5

fs.unlink('nodejs_architecture.txt',(err)=>{
  if(err)console.log(err);
  console.log('File Delete Successfully')
})

// 6

const os = require('os');

console.log('OS Name : ',os.type());
console.log('Release Date : ',os.release())

// 7

