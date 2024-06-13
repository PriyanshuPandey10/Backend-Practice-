const express = require('express');
const app = express();


// Middleware function
app.use(function (req, res, next) {
    next();
  });

  app.set("view engine","ejs");
//Routes
 
app.get('/', function (req, res) {
  res.render('index');
})
app.get('/profile', function (req, res) {
    res.send('Hello World from Profile');
  })

  //Dynamic Route
app.get('/profile/:user', function (req, res) {
    res.send(`Hello From ${req.params.user}`);
  })

app.get('/contact', function (req, res) {
    res.send('Hello World from Contact');
  })

    //Dynamic Route

app.get('/contact/:user', function (req, res) {
    res.send(`Contact to ${req.params.user}`);
  })
  app.get('/home', function (req, res) {
    res.send('Hello World from Home');
  })

app.listen(3000);