const express = require('express');
const router = express.Router();


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

router.get('/', (req, res) => {
    res.send(courses);
});


// POST
router.post('/', (req, res) => {

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
router.put('/:id', (req, res) => {

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
router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});



router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found");
    res.send(course);
});





// VALIDATE
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(course);  
}

module.exports = router;