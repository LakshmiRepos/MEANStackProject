var express = require('express');
var controller = require('./productController');

var router = express.Router();

router.get('/getproducts',controller.get);

module.exports = router;