const path = require('path');
const express = require('express');
const configViewEnngine = (app) => {
    console.log('check dir name ', path.join('./src', 'views'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    //config static file : image/css/js
    app.use(express.static(path.join('./src', 'public')));

}
module.exports = configViewEnngine;