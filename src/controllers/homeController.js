const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservices');


const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
    //call model
}
const getABC = (req, res) => {
    res.render('sample.ejs');
};
const getFullname = (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
};
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const postCreateUser = async (req, res) => {



    let email = req.body.Email;
    let name = req.body.myName;
    let city = req.body.mycity;



    console.log('>> request body ', email, name, city)

    // connection.query(
    //     `INSERT INTO
    //      Users(email, name, city)
    //        VALUES( ?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('create user success')
    //     }
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES( ?, ?, ?)`, [email, name, city]);
    console.log('check result ', results)
    res.send('create user success')
    // connection.query(
    //     'select * from Users u',
    //     function(err,results,fields){
    //         console.log("result",results);
    //     })

    // const [results, fields] = await connection.query('select * from Users u');


    // cách viết ngắn hơn
    // let {email,name,city} = req.body;
    // INSERT INTO Users(email, name, city)
    //     VALUES("TEST", "THINH LE", "BINH DUONG")

}

module.exports = {
    getHomepage,
    getABC,
    getFullname,
    postCreateUser,
    getCreatePage
}