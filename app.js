// Class - Properties and behaviors
const EventEmitter = require('events');

// Onject - Instance of class
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
});

// Emit - make a noise, product something - signaling event happened
emitter.emit('messageLogged');