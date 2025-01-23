const http = require('http');

// Creating Server using createServer() Method - request and response
const server = http.createServer((req,res)=>{
  if(req.url == '/'){

    // response take html/text/json data
    res.write('<h1>Home Page!</h1>');
    res.write('Home Page ');
    res.write('{"name":"hero"}')

  }else if(req.url=='/about'){
    res.write('<h1>About Page</h1>');
  }
  res.end();
});

// Server listen or Deploy Port
server.listen(3000);

console.log('Server is Running in Port Number 3000 ');
