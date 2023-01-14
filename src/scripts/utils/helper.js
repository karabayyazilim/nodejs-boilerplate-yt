const CryptoJS = require('crypto-js')
const JWT = require('jsonwebtoken')

const hash = (data) => {
	return CryptoJS.HmacSHA256(data, CryptoJS.HmacSHA1(data, process.env.APP_KEY).toString()).toString()
}

const generateAccessToken = (user) => {
	return JWT.sign({name: user.fullName, ...user}, process.env.APP_KEY, {expiresIn: "1w"})
}

module.exports = {
	hash,
	generateAccessToken,
}

// qbcas89atyc9sabcas