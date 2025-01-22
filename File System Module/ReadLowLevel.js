const fs = require('fs');

// Buffer is a memory when file read by the system that time system need a memory to store the file
const buf = new Buffer(1024);

// OPEN FILE
fs.open('index.txt','r+',(err,fd)=>{
  if(err){
    console.log('error :',err);
  }
  console.log('File open successfully');

  // READ FILE

  fs.read(fd,buf,0,buf.length,0,(er,bytes)=>{
    if(er){
      console.log('error in read', er);
    }
    console.log('reading file ');
    console.log(buf.slice(0,bytes).toString());
  })

  // CLOSE FILE - IMP : FOR SECURITY AND PRIVACY

  fs.close(fd, (err)=>{
    if(err)console.log('err',err);
    console.log('Successfully close ')
  })
})