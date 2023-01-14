const authService = require('../services/auth');
const {hash, generateAccessToken} = require('../scripts/utils/helper');
const httpStatus = require('http-status');
class AuthController {
	async login(req, res) {
		req.body.password = hash(req.body.password)
		await authService.loginUser(req.body)
			.then((user) => {
				if (!user) return res.status(httpStatus.NOT_FOUND).send({message: "Böyle bir kullanıcı bulunamadı!"})
				user = {
					email: user.email,
					tokens: {
						access_token: generateAccessToken(user),
					}
				}
				delete user.password
				res.status(httpStatus.OK).json(user)
			})
			.catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.toString()))
	}
}

module.exports = new AuthController();