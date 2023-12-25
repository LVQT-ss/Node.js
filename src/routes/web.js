const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getFullname } = require('../controllers/homeController')
// Route declarations
//router.Method('/route',handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/fullname', getFullname);

module.exports = router;