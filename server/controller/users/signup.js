const bcrypt = require('bcryptjs')
const { signUpSchema } = require('../../validation/schema')
const { signUpQuery } = require('../../database/query')

const addUsers = (req, res) => {
  const { username, email, password } = req.body

  signUpSchema
    .validateAsync({ username, email, password }, { abortEarly: false })
    .then(() => {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          signUpQuery({ username, email, password: hashedPassword })
            .then(() => {
              res.status(201).json({
                error: false,
                data: {
                  message: 'Your account has been created successfully'
                }
              })
            })
            .catch((err) => {
              console.error(err)
              res.status(500).json({
                error: true,
                data: {
                  message: 'An error occurred while creating your account'
                }
              })
            })
        })
        .catch((err) => {
          console.error(err)
          res.status(500).json({
            error: true,
            data: {
              message: 'An error occurred while hashing your password'
            }
          })
        })
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({
        error: true,
        data: {
          message: 'Invalid input data'
        }
      })
    })
}

module.exports = addUsers
