const express = require('express');
const router = express.Router();
// Route declarations
router.get('/', (req, res) => {
    res.send('Hello World! this is quoc thinh mới tải nodemon');
});

router.get('/abc', (req, res) => {
    res.render('sample.ejs');
});

router.get('/2', (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
});

module.exports = router;