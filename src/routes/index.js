const router =  require('express').Router()
const userRouter = require('./user')
const authRouter = require('./auth')
const auth = require('../middleware/auth')

router.use('/user', auth,userRouter)
router.use('/auth', authRouter)

module.exports = router
