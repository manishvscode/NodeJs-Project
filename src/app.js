const express = require('express');
const { registerPartial } = require('hbs');
const app = express();   //variable
// to add public path 
const hbs = require('hbs');
const path = require('path');
const port  = process.env.PORT || 8000; //when we host the web app it will require

// public static path 

const staticPath = path.join(__dirname, '../public');
const templates = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
// we need to registerPartial 
hbs.registerPartials(partialPath);

// views 
app.set('view engine', 'hbs');
app.set('views', templates);

// use static website 
app.use(express.static(staticPath));



app.get('', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('*', (req, res) => {
    res.render('404');
});
app.listen(port, () => {
    console.log('Listening the port number '+ port);
});