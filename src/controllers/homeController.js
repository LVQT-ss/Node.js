const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
    //call model
}
const getABC = (req, res) => {
    res.render('sample.ejs');
};
const getFullname = (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
};
const postCreateUser = (req, res) => {
    console.log('>> request body', req.body)
    res.send('tao user')
}

module.exports = {
    getHomepage,
    getABC,
    getFullname,
    postCreateUser
}