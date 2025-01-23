const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Check the current default maximum listeners
console.log('Current max listeners:', eventEmitter.getMaxListeners());

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Attach multiple listeners for the 'subscribe' event
eventEmitter.on('subscribe', () => { console.log('User has subscribed to the channel!'); });
eventEmitter.on('subscribe', () => { console.log('User has subscribed again!'); });
eventEmitter.on('subscribe', () => { console.log('User is now a premium subscriber!'); });
eventEmitter.on('subscribe', () => { console.log('Welcome to the channel!'); });
eventEmitter.on('subscribe', () => { console.log('Enjoy the exclusive content!'); });

// Attempt to add more than 5 listeners (this will trigger a warning)
eventEmitter.on('subscribe', () => { console.log('This is the 6th listener!'); });

// Emit the 'subscribe' event
eventEmitter.emit('subscribe');

// Check the current maximum number of listeners after setting it
console.log('Max listeners set to:', eventEmitter.getMaxListeners());
