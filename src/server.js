
require('dotenv').config();
const express = require('express');  //common js 
const path = require('path');
const configViewEnngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

//import express 
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.hostname;

//config temple engine 
configViewEnngine(app);
// khai báo routes
app.use('/test', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
