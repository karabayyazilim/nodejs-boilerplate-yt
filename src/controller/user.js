const userService = require('../services/user')

class User {
	async list(req, res) {
		const users = await userService.list()
		res.json(users)
	}

	async create(req, res) {
		const user = await userService.create(req.body)
		res.json(user)
	}

	async update(req, res) {
		const user = await userService.update(req.params.id, req.body)
		res.json(user)
	}

	async delete(req, res) {
		const user = await userService.delete(req.params.id)
		res.json(user)
	}
}

module.exports = new User()
