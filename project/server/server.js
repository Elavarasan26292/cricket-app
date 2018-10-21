var config=require('./config')
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
app.use('/',router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
mongoose.connect(config.database);
const appRoutes = require('./routes.js')(app);
app.get('*', function (req, res) {
res.json({
  code:404,
  msg:"Invalid api url"
})
});
app.listen(3000, function () {
  console.log('Application started & listening on port 3000!');
});
