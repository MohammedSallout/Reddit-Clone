const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginSchema } = require('../../validation/schema')
const { loginQuery } = require('../../database/query')

const loginUsers = (req, res) => {
  const { email, password } = req.body
  // eslint-disable-next-line no-unused-vars
  const { err, value } = loginSchema.validate({ email, password }, { abortEarly: false })
  if (err) {
    res.status(400).json({ msg: err.details })
  } else {
    loginQuery({ email })
      .then((data) => {
        if (data.rowCount) {
          return bcrypt
            .compare(password, data.rows[0].password)
            .then((result) => {
              if (result) {
                const payload = {
                  id: data.rows[0].id,
                  username: data.rows[0].username,
                  avatar: data.rows[0].avatar
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY)
                res.cookie('token', token).json({ err: false, msg: 'Login successfully' })
              } else {
                res.status(400).json({ err: true, msg: 'wrong password' })
              }
            })
            .catch((err) => console.log(err))
        } else {
          res.status(401).json({ err: true, msg: 'please create an account first' })
        }
      })
      .catch(err => res.status(500).json({ msg: err }))
  }
}

module.exports = loginUsers
