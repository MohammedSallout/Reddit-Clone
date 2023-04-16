const Joi = require('joi')

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().max(20).required(),
  password: Joi.string().min(6).max(15).required()
})

const loginSchema = Joi.object({
  email: Joi.string().email().max(20).required(),
  password: Joi.string().min(6).max(15).required()
})

module.exports = { signUpSchema, loginSchema }
