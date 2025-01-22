const os = require('os');

console.log('CPU Architecture : ', os.arch());

// Memory in bytes

console.log('Free Memory :', os.freemem());

console.log('Total Memory :', os.totalmem());

console.log('Network Interface :', os.networkInterfaces());

// object to json
console.log('Network Interface in json format :', JSON.stringify(os.networkInterfaces()));

console.log('OS default tempt dir :', os.tmpdir());

console.log('Endianness', os.endianness());

console.log('HostName', os.hostname());

console.log('OS Type', os.type());

console.log('OS Platform', os.platform());

console.log('OS Release', os.release());