const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Event listener for 'Subscribe' event
eventEmitter.on('Subscribe', (channel) => {
  console.log(`User has subscribed to the "${channel}" channel.`);
});

// Emit 'Subscribe' event with a string value
eventEmitter.emit('Subscribe', 'MusicChannel');
// Output: User has subscribed to the "MusicChannel" channel.

// //////////////////////***************///////////////////////////


// Event listener for 'Subscribe' event
eventEmitter.on('Subscribe', (channel, callback, message) => {
  console.log(`User has subscribed to the "${channel}" channel.`);
  callback();  // Call the callback function passed as argument
  console.log(message); // Print the additional message
});

// Emit 'Subscribe' event with a string, a function, and an extra message
eventEmitter.emit('Subscribe', 'TechChannel', () => {
  console.log('Callback: Subscription successful!');
}, 'Thank you for subscribing!');
// Output:
// User has subscribed to the "TechChannel" channel.
// Callback: Subscription successful!
// Thank you for subscribing!

// ///////////////////////////////////////////////////////



// Event listener for 'Subscribe' event
eventEmitter.on('Subscribe', (channel, callback1, callback2) => {
  console.log(`User has subscribed to the "${channel}" channel.`);
  callback1();  // Call the first callback
  callback2();  // Call the second callback
});

// Emit 'Subscribe' event with two functions
eventEmitter.emit('Subscribe', 'GamingChannel',
  () => { console.log('Callback 1: Welcome to the channel!'); },
  () => { console.log('Callback 2: Enjoy the content!'); });
// Output:
// User has subscribed to the "GamingChannel" channel.
// Callback 1: Welcome to the channel!
// Callback 2: Enjoy the content!
