const router =  require('express').Router()
const authController = require('../controller/auth')
const validate = require('../middleware/validate')
const authValidation = require("../validations/auth");

router.post('/login', validate(authValidation) ,authController.login);

module.exports = router
