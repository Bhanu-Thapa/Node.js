const fs = require('fs');

// Write file basically Rewrite the whole file. (Replace)

fs.writeFile('index.txt','Writing a Text From fs Module', (err)=>{
  if(err){
    console.log('Error ', err);
  }
  console.log('Write successfully');
})


fs.readFile('index.txt',(err,dat)=>{
  console.log(dat.toString());
})

// NOTE - for Synchronous : fs.writeFileSync()