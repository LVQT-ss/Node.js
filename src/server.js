
require('dotenv').config();
const express = require('express');  //common js 
const configViewEnngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2')

//import express 
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.hostname;

//config temple engine 
configViewEnngine(app);
// khai báo routes
app.use('/test', webRoutes);
//test  connection 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default la 3306 
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});


connection.query('SELECT * FROM Users u ;',
    function (error, results, fields) {
        console.log('result ', results);
        console.log('field ', fields);
    });


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
