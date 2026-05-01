const http = require('http');

// event emitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        // converts array to string and writes it to response
        res.write(JSON.stringify([2,3,4]));
        res.end();

        // After running localhost:3000/api/courses will display array
    }
});


server.listen(3000);

console.log('Listening on port 3000');