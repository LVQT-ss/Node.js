const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = []
    //process data  
    connection.query('SELECT * FROM Users u', function (error, results, fields) {
        users = results;
        console.log('result ', results);
        res.send(JSON.stringify(users))

    });
    //call model
}
const getABC = (req, res) => {
    res.render('sample.ejs');
};
const getFullname = (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
};
module.exports = {
    getHomepage,
    getABC,
    getFullname,
}