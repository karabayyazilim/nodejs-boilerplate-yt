const Joi = require('joi');

const authValidation = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

module.exports = authValidation;