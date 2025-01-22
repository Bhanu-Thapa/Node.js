const fs = require('fs');

// APPEND FILE  - WRITE FILE WITHOUT REPLACING

fs.appendFile('index.txt', ' -- append by Bhanu', 'utf8', (err)=>{
  if(err){
    console.log('error',err);
  }
  console.log('Append file Successfully');
})

fs.readFile('index.txt',(er,data)=>{
  console.log(data.toString());
})

// NOTE - for Synchronous : fs.appendFileSync()