const express  = require('express');
var bodyParser = require('body-parser')
//const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

//Middlewares

//Setting up pug as template engine
app.set('view engine', 'pug');
//Declare the static server where we serving the static content from
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Modules
const home = require('./routes/home');
const courses = require('./routes/courses');

app.get('/', home);
app.get('/courses', courses);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });