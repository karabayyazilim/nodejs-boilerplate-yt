const Joi = require('joi');

const createUserValidation = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

const updateUserValidation = Joi.object({
	fullName: Joi.string(),
	email: Joi.string().email(),
	password: Joi.string()
});

module.exports = {
	createUserValidation,
	updateUserValidation
}