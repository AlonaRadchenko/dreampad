var express = require('express');
var app = express();
var models  = require('./models');

app.use(express.json());
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  

  // Pass to next layer of middleware
  next();
});

app.get('/api/dreams', function (req, res) {

   models.Dream.findAll({}).then(function(users) {
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
       dreams: users
       }));
  });

});

app.post('/api/dream', function (req, res) {
  models.Dream.create(req.body).then(function() {
    
    res.setHeader('Content-Type', 'application/json');
    
   res.send(JSON.stringify({
      }));
  });



});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});