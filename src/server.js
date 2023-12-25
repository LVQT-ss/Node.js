
require('dotenv').config();
const express = require('express');  //common js 
const configViewEnngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')

//import express 
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.hostname;

//config temple engine 
configViewEnngine(app);
// khai báo routes
app.use('/test', webRoutes);
//test  connection 


connection.query('SELECT * FROM Users u ;',
    function (error, results, fields) {
        console.log('result ', results);
    });


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
