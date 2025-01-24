const http = require('http');

const PORT = 3000;
const server = http.createServer((req,res)=>{


  if(req.url=='/'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Home page');
  } else   if(req.url=='/about'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('About page');
  }else   if(req.url=='/contact'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Contact page');
  }else   if(req.url=='/product'){

    ///////////////

    const options = {
      hostname: 'api.restful-api.dev',
      path:'/objects',
      method: 'GET'
    }

    const request = http.request(options, (response)=>{
      response.on('data',(data)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(data.toString());
      })
    })

    request.on('error',(err)=>{
      console.log(err);
    });

    request.end();
  }

  else {
    res.statusCode=500;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({error:'Server error'}));
  }
})

server.listen(PORT,()=>{
  console.log(`Server is running at post number ${PORT}`)
});
