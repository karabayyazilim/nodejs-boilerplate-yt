const app = require('./app')
const mongo = require('./mongo-connection')

module.exports = () => {
    app()
    mongo()
}
