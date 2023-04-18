const jwt = require('jsonwebtoken')
const addUsers = require('./users/signup')
const loginUsers = require('./users/login')
const logout = require('./users/logout')
const addPosts = require('./posts/addPosts')
const getPosts = require('./posts/getPosts')

const checkAuth = (req, res, next) => {
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ msg: 'verify token error' })
      } else {
        req.myToken = decoded
        next()
      }
    })
  } else {
    res.redirect('/html')
  }
}

module.exports = { checkAuth, addUsers, loginUsers, logout, addPosts, getPosts }
