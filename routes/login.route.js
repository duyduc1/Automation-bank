const express = require('express')
var router = express.Router();

var loginController = require('../controller/login.controller')
router.get('/',loginController.getLogin)
router.post('/',loginController.postLogin)

module.exports = router

