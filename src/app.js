const express = require('express')
const app = express()
const apiRouter = require('./routes')
const config = require('./config')

config()

app.use('/api',apiRouter)

app.listen(process.env.APP_PORT)
