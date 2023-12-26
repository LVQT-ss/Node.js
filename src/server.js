
require('dotenv').config();
const express = require('express');  //common js 
const configViewEnngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')

//import express 
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.hostname;

//config request.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config temple engine 
configViewEnngine(app);
// khai báo routes
app.use(webRoutes);
//test  connection 

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
