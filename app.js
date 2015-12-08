var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var mongoose = require('mongoose');
var app = express();

//Middle ware
mongoose.connect("mongodb://localhost:27017/shoppingCart");

app.use(bodyParser());

//user route
app.use('/api/user',require('./server/api/user/'));
app.use('/api/product',require('./server/api/product/'));
app.use('/api/transaction',require('./server/api/transaction/'));

app.get(/.*?\.\w{2,4}$/, function(req, res){
	res.sendFile(path.join(__dirname,'/client/',req.url));
});

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname,'/client/index.html'));
});

app.listen(3000,function(){
	console.log("Listing to port 3000");
});