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

