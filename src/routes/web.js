const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getFullname, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController')
// Route declarations
//router.Method('/route',handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/fullname', getFullname);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

module.exports = router;