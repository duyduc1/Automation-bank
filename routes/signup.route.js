const express = require('express')
var router = express.Router();

var signupController = require('../controller/signup.controller');

router.get('/', signupController.getSignup)
router.post('/',signupController.postSignup)



module.exports = router