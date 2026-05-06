const express = require('express');
const router = express.Router();

// references views/index.pug
router.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: "Hello" });
});


module.exports = router;