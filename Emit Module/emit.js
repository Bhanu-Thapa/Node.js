// 8

const eventEmitter = require('events');

const eventemit = new eventEmitter();

eventemit.on('Subscribe',(Channel)=>{
  console.log(`Thank You for Subscribing my ${Channel}`)
})

eventemit.emit('Subscribe', 'Channel')

// 9

// eventemit.removeListener('Subscribe', ()=>{
//   console.log('Remove Listener');
// });
