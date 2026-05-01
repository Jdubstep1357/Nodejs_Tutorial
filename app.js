// Class - Properties and behaviors
const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();


// Register a listener - passed data from raised event
logger.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});


logger.log('message');