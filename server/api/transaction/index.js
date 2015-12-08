var express = require('express');
var controller = require('./transactionController');

var router = express.Router();

router.post('/add',controller.add);
router.get('/get/:userId',controller.get);
router.post('/checkout',controller.checkout);
router.post('/delete',controller.deleteProd);
router.get('/history/:userId',controller.history);

module.exports = router;