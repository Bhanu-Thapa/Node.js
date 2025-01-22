const fs = require('fs');

// Delete File

fs.unlink('index.txt',(err)=>{
  if(err){
    console.log('error in deleteing ', err);
  }
  else{
    console.log('Delete Successfully')
  }
})