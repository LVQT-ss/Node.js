const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getFullname, postCreateUser } = require('../controllers/homeController')
// Route declarations
//router.Method('/route',handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/fullname', getFullname);

router.post('/create-user', postCreateUser);

module.exports = router;