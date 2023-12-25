const express = require('express');
var router = express.Router();

var bankpsController = require('../controller/bankps.controller');
router.get('/', bankpsController.getPaser)
router.post('/',bankpsController.postPaser)

module.exports = router




