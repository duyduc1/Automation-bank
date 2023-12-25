const express = require('express')
var router = express.Router();

var signupBankController = require('../controller/signupBank.controller')

router.get('/' , signupBankController.getsignupBank)
router.post('/' , signupBankController.postsigupBank)

module.exports = router