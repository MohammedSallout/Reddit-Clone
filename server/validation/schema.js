const Joi = require('joi')

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().trim().email().max(20).required(),
  password: Joi.string().min(6).max(15).required()
})

const loginSchema = Joi.object({
  email: Joi.string().trim().email().max(30).required(),
  password: Joi.string().min(6).max(30).required()
})

const postSchema = Joi.object({
  post: Joi.string().trim().max(200).required()
})

const commentSchema = Joi.object({
  comment: Joi.string().trim().max(100).required()
})

module.exports = { signUpSchema, loginSchema, postSchema, commentSchema }
