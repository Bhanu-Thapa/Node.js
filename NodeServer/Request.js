const  http = require('http');

const options = {
  hostname: 'api.restful-api.dev',
  path:'/objects',
  method: 'GET'
}

const request = http.request(options, (response)=>{
  response.on('data',(data)=>{
    console.log(data.toString());
  })
})

request.on('error',(err)=>{
  console.log(err);
});

request.end();