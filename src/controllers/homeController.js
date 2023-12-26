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



    let email = req.body.Email;
    let name = req.body.myName;
    let city = req.body.mycity;



    console.log('>> request body ', email, name, city)

    connection.query(
        `INSERT INTO
         Users(email, name, city)
           VALUES( ?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('create user success')
        }
    );

    // cách viết ngắn hơn
    // let {email,name,city} = req.body;
    // INSERT INTO Users(email, name, city)
    //     VALUES("TEST", "THINH LE", "BINH DUONG")

}

module.exports = {
    getHomepage,
    getABC,
    getFullname,
    postCreateUser
}