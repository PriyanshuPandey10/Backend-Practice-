const express = require('express');
const app = express();


// Middleware function
app.use(function (req, res, next) {
    next();
  });


//Routes
 
app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/profile', function (req, res) {
    res.send('Hello World from Profile');
  })
app.get('/contact', function (req, res) {
    res.send('Hello World from Contact');
  })
  app.get('/home', function (req, res) {
    res.send('Hello World from Home');
  })

app.listen(3000);