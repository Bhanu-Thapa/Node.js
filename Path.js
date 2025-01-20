const path = require('path')

console.log(path.sep); // Seperator

console.log(process.env.PATH);

console.log(path.delimiter); // Delimiter mean Join Path :

const currentFilePath = __filename; // __filename show current path of file

console.log(currentFilePath);

console.log(__dirname); // __dirname show current directory path

const baseName = path.basename(currentFilePath);

console.log(baseName)

const baseNameWithOutExt= path.basename(currentFilePath,'.js');

console.log(baseNameWithOutExt);

const directoryPath = path.dirname(currentFilePath); //path of current directory

console.log('Directory name - ',directoryPath);

console.log('Extension - ', path.extname(currentFilePath));
console.log('Extension - ', path.extname('index.md.js'));

// Combine directory path and base name - 'dir' and 'base' is key
const combinePath = path.format({
  dir:'/tad/desktop',
  base: 'com.js'
})

console.log(combinePath);

const absolutePath = path.isAbsolute(currentFilePath);

console.log('is this absolute path ',absolutePath);

console.log('is this absolute path ', path.isAbsolute('./index.js'));

const pathJoin = path.join('home', 'guest','join.js');

console.log(pathJoin);

// path.parse() method separate the path it show about - root, dir & base in object form.
console.log('path sep', path.parse(currentFilePath));

//relative of 2 path
console.log('relative path : ', path.relative('/home/tad/edu', '/home/bin/ind.js'));

// resolve give current file dirrectory and also give some feature to join path
console.log(path.resolve());

// normalize the path
console.log(path.normalize('//home//dir/path'))