var express = require('express');
var controller = require('./userController');

var router = express.Router();

router.post('/add',controller.save);
router.post('/login',controller.login);

module.exports = router;