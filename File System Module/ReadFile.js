const fs = require('fs');

// Asynchronous way to read File

console.log('Start');

// READ FILE ASYNCHRONOUSLY

fs.readFile('index.txt', (err,data)=>{
  if(err){
    console.log('Error', err);
    return err;
  }else if(data){
    // without toString() its show buffer value
    console.log('File Reading Asynchronous', data.toString())
    return data;
  }
})

console.log ('End');

// Synchronous way to read File

const syncReadFile = fs.readFileSync('index.txt')
console.log('read start');
console.log(syncReadFile.toString());
console.log('Read end');