// installed from npm
const Joi = require('joi');
const express = require('express');
const app = express();

// middleware - returns json and app.use uses middleware json
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

// first gets path or URL root of website, 2nd callback function
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

        const { error } = validateCourse(req.body);

    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }


    // Read course object, use properties to create new course object, and add it to course array
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


// How to update course
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


function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(course);  
}


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

// PORT - an enviornment variable
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));



// DELTTE
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})