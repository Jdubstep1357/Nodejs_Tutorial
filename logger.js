// Module for login messages

var url = 'http://mylogger.io/log';

function log(message) {
    // send an HTTP request
    console.log(message);
}


// Adding method log to exports object
module.exports = log;
