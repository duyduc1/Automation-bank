const express = require('express');
var router = express.Router();

var userController = require('../controller/user.controller');
router.get('/', userController.getUsers)

module.exports = router




