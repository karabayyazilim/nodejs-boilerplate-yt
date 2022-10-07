const BaseService = require('./base')
const User = require('../models/user')

class UserService extends BaseService{
	constructor() {
		super(User);
	}
}

module.exports = new UserService()
