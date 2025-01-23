// 7

const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url == '/'){
    res.write("I Am Happy To Learn Full Stack Web Development From Internet!");
  }
  res.end();
});

server.listen(5000);

console.log('Server is running in port number 5000');