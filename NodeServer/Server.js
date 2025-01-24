const http = require('http');

const PORT = 3000;
const server = http.createServer((req,res)=>{
  //  res.statusCode=200;
  //  res.setHeader('Content-Type','text/plain');
  //  res.end('Server hit');

   res.statusCode=500;
   res.setHeader('Content-Type','application/json');
   res.end(JSON.stringify({error:'Server error'}));
})

server.listen(PORT,()=>{
  console.log(`Server is running at post number ${PORT}`)
});
