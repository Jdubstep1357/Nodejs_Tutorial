// under the hood this is how node.js is executed


    console.log(__filename);
    console.log(__dirname);



    // Module for login messages
    var url = 'http://mylogger.io/log';

    function log(message) {
        // send an HTTP request
        console.log(message);
    }


    // Adding method log to exports object
    module.exports = log;

    // OKAY
    module.exports.log = log;
    exports.log = log;

    // WPMT WORK, references exports at top
    // exports = log; // module.exports

