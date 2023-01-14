const router =  require('express').Router()
const userController = require('../controller/user')
const validate = require('../middleware/validate')
const {updateUserValidation, createUserValidation} = require("../validations/user");

router.get('/' ,userController.list);
router.post('/', validate(createUserValidation), userController.create);
router.put('/:id', validate(updateUserValidation), userController.update);
router.delete('/:id', userController.delete);

module.exports = router
