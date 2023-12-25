const express = require('express')
var router = express.Router();

var bankController = require('../controller/bank.controller')
var middlewarer = require('../middleware/auth');
router.get('/',middlewarer.checkUser,bankController.getBankForm)


module.exports = router