// Gets function for debugging namespace
const debug = require('debug')('app:startup');

const config = require('config');
// installed from npm - look up packages on npm for more info
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');

// ROUTES
const courses = require('.routes/courses');
const home = require('.routers/home');
const genres = require('.routes/genres.js');

const express = require('express');
const app = express();


// template engine
app.set('view engine', 'pug');
app.set('views', './views'); //default



// middleware - returns json and app.use uses middleware json parses json
app.use(express.json());
// pass arrays and complex objects with URL format
app.use(express.urlencoded({ extended: true }));
// serve static files
app.use(express.static('public'));
app.use(helmet());
// tells express that for any routes use courses
app.use('/api/courses', courses);
app.use('/api/genres', genres);

app.use('/', home);

// Configuration - Goes through config - json file
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server ' + config.get('mail.host'));
// from custom-enviornment-variables.json
console.log('Mail Password ' + config.get('mail.password'));

// if export NODE_ENV = production in terminal is true, morgan wont be enabled
if (app.get('env') === 'development') {
    app.use(morgan('tiny')); // displays in terminal every time a request is sent
    debug('morgan enabled'); // references the top
}



// logger - middleware from logger.js
app.use(logger);


app.use(function(req, res, next) {
    console.log('Authenticating... ');
    next();
});


// PORT - an enviornment variable
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));



