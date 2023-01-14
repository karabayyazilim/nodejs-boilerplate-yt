const User = require('../models/user')
const BaseService = require('./base')
class AuthService extends BaseService {
	constructor() {
		super(User);
	}

	async loginUser(user) {
		return await this.model.findOne({where: user});
	}
}

module.exports = new AuthService();