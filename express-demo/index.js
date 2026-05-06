// installed from npm - look up packages on npm for more info
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();



// middleware - returns json and app.use uses middleware json parses json
app.use(express.json());
// pass arrays and complex objects with URL format
app.use(express.urlencoded({ extended: true }));
// serve static files
app.use(express.static('public'));
app.use(helmet());

// if export NODE_ENV = production in terminal is true, morgan wont be enabled
if (app.get('env') === 'development') {
// displays in terminal every time a request is sent
    app.use(morgan('tiny'));
    console.log('morgan enabled');
}

// logger - middleware from logger.js
app.use(logger);


app.use(function(req, res, next) {
    console.log('Authenticating... ');
    next();
})


// GENRE Exercise


const genres = [
    { id: 1, name: "horror" },
    { id: 2, name: "comedy"},
    { id: 3, name: "action" },
    { id: 4, name: "romance"}
];


// Validate Course
function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(genre);  
}




// GET
app.get('/api/genres', (req, res) => {
    res.send(genres);
});


// GET specific ID
app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre with the given ID was not found");
    res.send(genre);
});



// ADDING TO COURSE

app.post('/api/genres', (req, res) => {

        const { error } = validateGenre(req.body);

        // 400 POST request
    if (error) return res.status(400).send(error.details[0].message);
    


    // Read course object, use properties to create new course object, and add it to course array
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});


// UPDATE
app.put('/api/genres/:id', (req, res) => {

    // Look up the course
    // If not existing, return 404
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre with the given ID was not found");
    

    const result = validateGenre(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    

    // Update course
    genre.name = req.body.name;
    // Return updated course
    res.send(genre);
});



// DELTTE
app.delete('/api/genres/:id', (req, res) => {
const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The course with the given ID was not found");

    // Delete
    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});






/* ----------------------------------------------------
    --------------- End of GENRE Exercise ------------
------------------------------------------------------*/ 



const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];


// VALIDATE
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(course);  
}



// first gets path or URL root of website, 2nd callback function
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});


// POST
app.post('/api/courses', (req, res) => {

        const { error } = validateCourse(req.body);

        // 400 POST request
    if (error) return res.status(400).send(error.details[0].message);
    


    // Read course object, use properties to create new course object, and add it to course array
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


// How to update course
// UPDATE
app.put('/api/courses/:id', (req, res) => {

    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send("The course with the given ID was not found");
    

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // result.error

    if (error) return res.status(400).send(error.details[0].message);
    

    // Update course
    course.name = req.body.name;
    // Return updated course
    res.send(course);
});


// DELTTE
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});



app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

// PORT - an enviornment variable
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));



