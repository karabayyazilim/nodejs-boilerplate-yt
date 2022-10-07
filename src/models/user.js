const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
	fullName: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String
	}
}, {timestamps: true})

module.exports = mongoose.model('User', userScheme)
