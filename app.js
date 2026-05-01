// Class - Properties and behaviors
const EventEmitter = require('events');

// Onject - Instance of class
const emitter = new EventEmitter();

// Register a listener - passed data from raised event
emitter.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http:/' });

